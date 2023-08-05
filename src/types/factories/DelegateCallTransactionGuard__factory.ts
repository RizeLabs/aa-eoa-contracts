/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DelegateCallTransactionGuard,
  DelegateCallTransactionGuardInterface,
} from "../DelegateCallTransactionGuard";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "allowedTarget",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "checkAfterExecution",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "checkTransaction",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a03461007157601f61037438819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007157516001600160a01b0381168103610071576080526040516102e7908161008d823960805181818161016701526101b60152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260049182361015610021575b5050503461001c57005b600080fd5b600092833560e01c91826301ffc9a7146101e55750816373a8c682146101a157816375f0bb521461007f575063932713681461005d5780610012565b3461007b578060031936011261007b576024358015150361007b5751f35b5080fd5b90503461019d5761016036600319011261019d576001600160a01b038135818116908190036101995767ffffffffffffffff604435818111610195576100c89036908601610238565b506064359060028210156101955760e435848116036101955761010435848116036101955761012435908111610195576101059036908601610238565b5061014435838116036101915760011491821592610165575b505015610129575051f35b6020606492519162461bcd60e51b83528201526017602482015276151a1a5cc818d85b1b081a5cc81c995cdd1c9a58dd1959604a1b6044820152fd5b7f000000000000000000000000000000000000000000000000000000000000000016149050388061011e565b8580fd5b8680fd5b8480fd5b8280fd5b50503461007b578160031936011261007b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b84913461019d57602036600319011261019d573563ffffffff60e01b811680910361019d576020925063736bd41d60e11b8114908115610227575b5015158152f35b6301ffc9a760e01b14905083610220565b81601f8201121561001c5780359067ffffffffffffffff9283831161029b5760405193601f8401601f19908116603f011685019081118582101761029b576040528284526020838301011161001c57816000926020809301838601378301015290565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220e48a95977e31d092de35e64e396c6ad9ce05fef7d6c6b4f7685890439057984e64736f6c634300080f0033";

type DelegateCallTransactionGuardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DelegateCallTransactionGuardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DelegateCallTransactionGuard__factory extends ContractFactory {
  constructor(...args: DelegateCallTransactionGuardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    target: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DelegateCallTransactionGuard> {
    return super.deploy(
      target,
      overrides || {}
    ) as Promise<DelegateCallTransactionGuard>;
  }
  override getDeployTransaction(
    target: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(target, overrides || {});
  }
  override attach(address: string): DelegateCallTransactionGuard {
    return super.attach(address) as DelegateCallTransactionGuard;
  }
  override connect(signer: Signer): DelegateCallTransactionGuard__factory {
    return super.connect(signer) as DelegateCallTransactionGuard__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DelegateCallTransactionGuardInterface {
    return new utils.Interface(_abi) as DelegateCallTransactionGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DelegateCallTransactionGuard {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DelegateCallTransactionGuard;
  }
}