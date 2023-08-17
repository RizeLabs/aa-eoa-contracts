import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { EntryPoint, EntryPoint__factory } from "@account-abstraction/contracts";
import { BananaAccount } from "../src/types";


function parseEther(eth: string) {
  return ethers.utils.parseEther(eth);
}

describe("Smart Account tests", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  let entryPoint: EntryPoint;
  let baseImpl: BananaAccount;
  let walletFactory: any;
  let token: any;
  let owner: string;
  let bob: any;
  let userSCW: any;
  let account: any;
  let accounts: any;
  let tx: any;

  before(async () => {
    const [account, bob] = await ethers.getSigners();
    console.log("account: ", account);
    console.log("bob: ", bob);
    console.log(await ethers.getSigners());
    let balance = await ethers.provider.getBalance(
      account.getAddress()
    );
    // expect(balance).to.equal(0);
    console.log("balance1: ", balance.toString())
    balance = await ethers.provider.getBalance(
      bob.getAddress()
    );
    // expect(balance).to.equal(0);
    console.log("balance bob: ", balance.toString())
    const epf = await (await ethers.getContractFactory("EntryPoint")).deploy();
    entryPoint = await EntryPoint__factory.connect(epf.address, accounts[0]);
    console.log("entry point deployed at: ", entryPoint.address);

    owner = await accounts[0].address;
    console.log("owner address: ", owner); 
    bob = await accounts[1];

    const BaseImplementation = await ethers.getContractFactory("BananaAccount");
    baseImpl = await BaseImplementation.deploy();
    await baseImpl.deployed();
    console.log("base wallet impl deployed at: ", baseImpl.address);

    const WalletFactory = await ethers.getContractFactory(
      "BananaAccountProxyFactory"
    );
    walletFactory = await WalletFactory.deploy();
    await walletFactory.deployed();
    console.log("wallet factory deployed at: ", walletFactory.address);

    const MockToken = await ethers.getContractFactory("MyToken");
    token = await MockToken.deploy();
    await token.deployed();
    console.log("Test token deployed at: ", token.address);

    // console.log("mint tokens to owner address..");
    // await token.mint(owner, ethers.utils.parseEther("1000000"));
  });

  describe("transfer: take native tokens out of Smart Account", function () {
    it("success if enough tokens and owner call", async () => {

      console.log("create smart account for owner..");

      
      const initializer = baseImpl.interface.encodeFunctionData('setupWithEntrypoint',
                [
                owner, // owners 
                1,                                              // thresold will remain fix 
                "0x0000000000000000000000000000000000000000",   // to address 
                "0x",                                           // modules setup calldata
                "0xac1c08a5a59cEA20518f7201bB0dda29d9454eb0",          // fallback handler
                "0x0000000000000000000000000000000000000000",   // payment token
                0,                                              // payment 
                "0x0000000000000000000000000000000000000000",   // payment receiver
                entryPoint.address                // entrypoint         // q values 
                ]);
      console.log("initializer: ", initializer);
      const scwAddress = await walletFactory.getAddress(baseImpl.address, "0", initializer);
      console.log("smart account created at: ", scwAddress);
      tx = await walletFactory.createProxyWithNonce(baseImpl.address, initializer, "0");
      const receipt = await tx.wait();
      const proxyCreationEvent = receipt.events.find(
        (event: any) => event.event === "ProxyCreation"
        );
      const [proxy, singleton] = proxyCreationEvent.args;
      console.log("proxy : ", proxy)
      expect(proxy).to.equal(scwAddress);

      let balance = await ethers.provider.getBalance(
        scwAddress
      );
      expect(balance).to.equal(0);
      console.log("balance: ", balance.toString())

      balance = await ethers.provider.getBalance(
        accounts[0].address
      );
      // expect(balance).to.equal(0);
      console.log("balance1: ", balance.toString())

      tx = await accounts[0].sendTransaction({
        to: scwAddress,
        value: parseEther("1"),
      });
      await tx.wait();
      balance = await ethers.provider.getBalance(scwAddress);
      expect(balance).to.equal(parseEther("1"));
      console.log("balance: ", balance.toString())

      // transfer 0.5 ETH from smart account to bob by owner signature
      const bobBalanceBefore = await ethers.provider.getBalance(bob);
      userSCW = await ethers.getContractAt(
        "SmartAccount",
        scwAddress
      );
      tx = await userSCW.connect(accounts[0]).transfer(bob, parseEther("0.5"));
      await tx.wait();

      expect(await ethers.provider.getBalance(bob)).to.equal(
        bobBalanceBefore.add(parseEther("0.5"))
      );
      expect(
        await ethers.provider.getBalance(scwAddress)
      ).to.equal(parseEther("0.5"));


    });

  });
  
});
