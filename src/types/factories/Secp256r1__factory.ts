/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Secp256r1, Secp256r1Interface } from "../Secp256r1";

const _abi = [
  {
    inputs: [],
    name: "nn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100195760c5908161001f823930815050f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c90816372a4c30f14605a57506391327ec614603457600080fd5b80600319360112605757604051600160601b63ffffffff60c01b03198152602090f35b80fd5b905081600319360112608b577bffffffff00000000000000004319055258e8617b0c46353d039cdaae198152602090f35b5080fdfea2646970667358221220f8d1dd6373f70478b782fdfd1f894ecec86f28d10dac8abf9a33d213a5c5369e64736f6c634300080f0033";

type Secp256r1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Secp256r1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Secp256r1__factory extends ContractFactory {
  constructor(...args: Secp256r1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Secp256r1> {
    return super.deploy(overrides || {}) as Promise<Secp256r1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Secp256r1 {
    return super.attach(address) as Secp256r1;
  }
  override connect(signer: Signer): Secp256r1__factory {
    return super.connect(signer) as Secp256r1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Secp256r1Interface {
    return new utils.Interface(_abi) as Secp256r1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Secp256r1 {
    return new Contract(address, _abi, signerOrProvider) as Secp256r1;
  }
}