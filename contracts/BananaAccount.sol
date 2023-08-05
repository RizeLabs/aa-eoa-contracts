// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

/* solhint-disable avoid-low-level-calls */
/* solhint-disable no-inline-assembly */
/* solhint-disable reason-string */

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import './safe-contracts/Safe.sol';
import './interfaces/UserOperation.sol';
import './utils/EllipticalCurveLibrary.sol';
import './utils/Exec.sol';
import './utils/BytesUtils.sol';
import './utils/Base64.sol';

contract BananaAccount is Safe {
    using ECDSA for bytes32;

    //return value in case of signature failure, with no time-range.
    uint256 internal constant SIG_VALIDATION_FAILED = 1;

    //EIP4337 trusted entrypoint
    address public entryPoint;

    //owner
    address public owner;

    /**
     * @dev Modifier to allow only the owner to call the function.
     * Reverts with CallerIsNotOwner if the caller is not the owner.
     */
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller Is Not Owner");
        _;
    }

    /**
     * @dev Modifier to allow only the owner or the contract itself to call the function.
     * Reverts with MixedAuthFail if the caller is not the owner or the contract itself.
     */
    modifier mixedAuth() {
        require(msg.sender == owner || msg.sender != address(this), "Mixed Auth Fail");
        _;
    }

    event OwnerUpdated(address indexed _scw, address indexed _oldOwner, address indexed _newOwner);

    /**
     * @notice Throws if trying to change an owner of a SmartAccount to the zero address
     */
    error OwnerCannotBeZero();

    /**
     * @notice Thrown when trying to use address of the Smart Account as an owner for itself
     */
    error OwnerCanNotBeSelf();

    /**
     * @notice Thrown when trying to use current owner as a new owner in a _setOwner() call
     */
    error OwnerProvidedIsSame();

    /**
     * @notice Throws when if trying to transfer to zero address
     */
    error TransferToZeroAddressAttempt();

    /**
     * @notice Throws if transfer of tokens failed
     * @param token token contract address
     * @param dest token transfer receiver
     * @param amount the amount of tokens in a failed transfer
     */
    error TokenTransferFailed(address token, address dest, uint256 amount);

    /// @dev Setup function sets initial storage of contract.
    /// @param _owner List of Safe owners.
    /// @param _threshold Number of required confirmations for a Safe transaction.
    /// @param to Contract address for optional delegate call.
    /// @param data Data payload for optional delegate call.
    /// @param fallbackHandler Handler for fallback calls to this contract
    /// @param paymentToken Token that should be used for the payment (0 is ETH)
    /// @param payment Value that should be paid
    /// @param paymentReceiver Address that should receive the payment (or 0 if tx.origin)
    /// @param _entryPoint Address for the trusted EIP4337 entrypoint
    function setupWithEntrypoint(
        address _owner,
        uint256 _threshold,
        address to,
        bytes calldata data,
        address fallbackHandler,
        address paymentToken,
        uint256 payment,
        address payable paymentReceiver,
        address _entryPoint
    ) external {
        entryPoint = _entryPoint;
        owner = _owner;

        address[] memory owners = new address[](1);
        owners[0] = _owner;
        _executeAndRevert(
            address(this),
            0,
            abi.encodeCall(
                Safe.setup,
                (
                    owners,
                    _threshold,
                    to,
                    data,
                    fallbackHandler,
                    paymentToken,
                    payment,
                    paymentReceiver
                )
            ),
            Enum.Operation.DelegateCall
        );
    }

    function _payPrefund(uint256 missingAccountFunds) internal {
        if (missingAccountFunds != 0) {
            (bool success, ) = payable(msg.sender).call{
                value: missingAccountFunds,
                gas: type(uint256).max
            }('');
            (success);
            //ignore failure (its EntryPoint's job to verify, not account.)
        }
    }

    function validateUserOp(
        UserOperation calldata userOp,
        bytes32 userOpHash,
        uint256 missingAccountFunds
    ) external returns (uint256 validationData) {
        _requireFromEntryPoint();
        validationData = _validateSignature(userOp, userOpHash);
        require(userOp.nonce < type(uint64).max, 'account: nonsequential nonce');
        _payPrefund(missingAccountFunds);
    }

    /**
     * ensure the request comes from the known entrypoint.
     */
    function _requireFromEntryPoint() internal view virtual {
        require(msg.sender == entryPoint, 'account: not from EntryPoint');
    }

    /// implement template method of BaseAccount
    function _validateSignature(
        UserOperation calldata userOp,
        bytes32 userOpHash
    ) internal virtual returns (uint256 validationData) {
        bytes32 hash = userOpHash.toEthSignedMessageHash();
        if (owner != hash.recover(userOp.signature))
            return SIG_VALIDATION_FAILED;
        return 0;
    }

    /// @dev Allows the entrypoint to execute a transaction without any further confirmations.
    /// @param to Destination address of module transaction.
    /// @param value Ether value of module transaction.
    /// @param data Data payload of module transaction.
    /// @param operation Operation type of module transaction.
    function execTransactionFromEntrypoint(
        address to,
        uint256 value,
        bytes memory data,
        Enum.Operation operation
    ) public {
        // Only Entrypoint is allowed.
        require(msg.sender == entryPoint, 'account: not from EntryPoint');
        // Execute transaction without further confirmations.
        _executeAndRevert(to, value, data, operation);
    }

    /// @dev Allows the entrypoint to execute a batch transactions without any further confirmations.
    /// @param to Destination addresses of transactions.
    /// @param value Ether values of transactions.
    /// @param data Data payloads of transactions.
    /// @param operation Operation types of transactions.
    function execBatchTransactionFromEntrypoint(
        address[] calldata to,
        uint256[] calldata value,
        bytes[] memory data,
        Enum.Operation operation
    ) public {
        // Only Entrypoint is allowed.
        require(msg.sender == entryPoint, 'account: not from EntryPoint');
        // Execute transaction without further confirmations.
        require(to.length == data.length, "wrong array lengths");
        for(uint256 i=0; i < to.length; i++) {
            _executeAndRevert(to[i], value[i], data[i], operation);
        }
    }

    function _executeAndRevert(
        address to,
        uint256 value,
        bytes memory data,
        Enum.Operation operation
    ) internal {
        bool success = execute(to, value, data, operation, type(uint256).max);

        bytes memory returnData = Exec.getReturnData(type(uint256).max);
        // Revert with the actual reason string
        // Adopted from: https://github.com/Uniswap/v3-periphery/blob/464a8a49611272f7349c970e0fadb7ec1d3c1086/contracts/base/Multicall.sol#L16-L23
        if (!success) {
            if (returnData.length < 68) revert();
            assembly {
                returnData := add(returnData, 0x04)
            }
            revert(abi.decode(returnData, (string)));
        }
    }

    /// @dev There should be only one verified entrypoint per chain
    /// @dev so this function should only be used if there is a problem with
    /// @dev the main entrypoint
    function replaceEntrypoint(address newEntrypoint) public authorized {
        entryPoint = newEntrypoint;
    }


    /**
     * @dev Allows to change the owner of the smart account by current owner or self-call (modules)
     * @param _newOwner Address of the new signatory
     */
    function updateOwner(address _newOwner) public mixedAuth {
        if (_newOwner == address(0)) revert OwnerCannotBeZero();
        if (_newOwner == address(this)) revert OwnerCanNotBeSelf();
        if (_newOwner == owner) revert OwnerProvidedIsSame();
        address oldOwner = owner;
        assembly {
            sstore(owner.slot, _newOwner)
        }
        emit OwnerUpdated(address(this), oldOwner, _newOwner);
    }


    /**
     * @dev Utility method to be able to transfer native tokens out of Smart Account
     * @notice only owner/ signatory of Smart Account with enough gas to spend can call this method
     * @notice While enabling multisig module and renouncing ownership this will not work
     * @param dest Destination address
     * @param amount Amount of native tokens
     */
    function transfer(address payable dest, uint256 amount) external onlyOwner {
        if (dest == address(0)) revert TransferToZeroAddressAttempt();
        bool success;
        assembly {
            success := call(gas(), dest, amount, 0, 0, 0, 0)
        }
        if (!success) revert TokenTransferFailed(address(0), dest, amount);
    }

    /**
     * @dev Utility method to be able to transfer ERC20 tokens out of Smart Account
     * @notice only owner/ signatory of Smart Account with enough gas to spend can call this method
     * @notice While enabling multisig module and renouncing ownership this will not work
     * @param token Token address
     * @param dest Destination/ Receiver address
     * @param amount Amount of tokens
     */
    function pullTokens(
        address token,
        address dest,
        uint256 amount
    ) external onlyOwner {
        if (dest == address(0)) revert TransferToZeroAddressAttempt();
        if (!transferToken(token, dest, amount))
            revert TokenTransferFailed(token, dest, amount);
    }

}