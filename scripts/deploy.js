const hre = require('hardhat')
const network = require('hardhat')
const { ethers } = require('hardhat');
const fs = require('fs')
const  { } = require('../../banana-wallet-sdk/src/types')
const { BigNumber } = require('ethers')
const { NewTouchIdAccountSafe, BananaTest } = require('../src/types')
const { NewTouchIdAccountSafe__factory, BananaTest__factory } = require('../src/types/factories')
const NewTouchIdAccountProxyFactory = require('./factory.json')
// const abi = require('./factory.json')
const newAbi = require('./factory.json')
// require('../artifacts/contracts/samples/NewTouchIdSafeAccountProxyFactory.sol/NewTouchIdSafeAccountProxyFactory.json')

async function main() {
	const accounts = await hre.ethers.getSigners()
	// const abi = NewTouchIdAccountProxyFactory;
	
	// FOR NEW DEPLOYMENT //
	// const [owner, heir, lawyer] = accounts
	const owner = accounts[0]
	console.log(`owner add ${owner.address}`)
	// const OTPFactory = await ethers.getContractFactory('OTPFactory')
	// const oTPFactory = await OTPFactory.deploy()
	// await oTPFactory.deployed()
	// console.log('oTPFactory deployed:', oTPFactory.address)


	// const Verifier = await ethers.getContractFactory('Verifier');
	// const verifier = await Verifier.deploy();
	// console.log('verifier :', verifier.address);

	// const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4');
	// const wallet = new ethers.Wallet("a66cf2b4bad26d3c10c0d6fc748f91f3fda596db7b6bc289c38bb3d3ff711e74", provider);

	// const singletonContract = "0xe75Ea15be97753bc9d7F2A70dfE0fd0EB4a5AB51";

	// const NewTouchIdAccountSafeInstance = NewTouchIdAccountSafe__factory.connect(
	// 	singletonContract,
	// 	provider
    //   );

	// 	const banana = BananaTest__factory.connect(
	// 	"0x75F5C4626fb2DD0177C420e55dbB36FAd47dc015",
	// 	provider
    //   );
	// const banana = new ethers.Contract(
	// 	// "0x8bd7A25A0f3dC4E3b9b465E130A9117299D5e4b6",
	// // "0xfF5667604BE1C5424c9E472366B2ABC18049eC6C",
	// "0xacF0ea36CAD99902CD52dBEd2013fA9a2d01FB7d",
	// NewTouchIdAccountProxyFactory.abi,
	// // NewTouchIdAccountProxyFactory.abi,
	// 	wallet
	// )


	//   const hash = ethers.utils.keccak256("0x4d48686d5a6a466c4d445a6a4e7a526c4e7a6733596d51334e54646b5a4445314d44677a4d6a566c4e5455324d4467344e7a466d5a544d344e5456694f47466a4d6d493459574979597a526b4d6a41774e6a646b4d6a6378");
	//   console.log(hash);

	//   const value = await banana.check("0xa7bfc950997fed8ad2f46dcb0320708fb691517cfd6937f6bad2d2c7941e7009",
	//   "0x15481288826c74b81a29f99fecc7666e48cd787b3f17a5cfdf72a142471412bc844aba52a6a917daa261fdb20309cad217c8bf9cae712cb60b23dbb0f19c9b431a119876485789c569ef7e2d4dbe131c82f29120a066190c01d91bab13845fa5371442d4eaec3189cb998f1d888ecaa26c741bdddc82a453a615171937472948");
	//   console.log(value)

	//   4d48686c5a54497a597a49775a54426b5a6d4d774d6d466a4f44466a4d7a55794e6a63345a5755344d44526b4d5459784d6a646b596d4d784d545a6b5a5456684e6d4e6b595463795a57566d4d7a41355a4455354d325132



	// const encodedSetupEntryPoint = NewTouchIdAccountSafeInstance.interface.encodeFunctionData('setupWithEntrypoint',
	// [
	// 	["0x288d1d682311018736B820294D22Ed0DBE372188"],
	// 	1,
	// 	"0x0000000000000000000000000000000000000000",
	// 	"0x",
	// 	"0x0000000000000000000000000000000000000000",
	// 	"0x0000000000000000000000000000000000000000",
	// 	0,
	// 	"0x288d1d682311018736B820294D22Ed0DBE372188",
	// 	"0x0576a174D229E3cFA37253523E645A78A0C91B57"
	// ]);


	// const NewTouchIdAccountProxyFactoryContract = new ethers.Contract(
	// 	// "0x8bd7A25A0f3dC4E3b9b465E130A9117299D5e4b6",
	// // "0xfF5667604BE1C5424c9E472366B2ABC18049eC6C",
	// "0xBb2343B1dd233783022c7496C667B3F99b400f08",
	// newAbi.abi,
	// // NewTouchIdAccountProxyFactory.abi,
	// 	wallet
	// )




	//   console.log("Instance: ", NewTouchIdAccountSafeInstance.interface);

	// // setupWithEntrypoint(address[],uint256,address,bytes,address,address,uint256,address,address
	// console.log("Contract ", NewTouchIdAccountProxyFactoryContract);

	// console.log("Encoded Setup ep: ", encodedSetupEntryPoint);

	// const address = await NewTouchIdAccountProxyFactoryContract.getAddress(singletonContract, "5", encodedSetupEntryPoint);
	// console.log("precompute; ", address);

	// const txn = await NewTouchIdAccountProxyFactoryContract.createChainSpecificProxyWithNonce(singletonContract,
	// 	encodedSetupEntryPoint,
	// 	"5",
	// 	{
	// 		gasLimit: 10000000
	// 	});
	// 	await txn.wait();
	// 	console.log(txn);
	// await txn.wait();
	// console.log("Hash ", txn.hash());
	// const NewTouchIdAccountDeployer = await ethers.getContractFactory('NewTouchIdAccountSafe');
	// const newTouchIdAccountDeployer = await NewTouchIdAccountDeployer.deploy();
	// console.log('Singleton :', newTouchIdAccountDeployer.address);

	// const TokenCallBackHandlerDeployer = await ethers.getContractFactory('TokenCallbackHandler');
	// const tokenCallBackHandlerDeployer = await TokenCallBackHandlerDeployer.deploy();
	// console.log('Token callback handler :', tokenCallBackHandlerDeployer.address);

	// const NewTouchIdAccountProxy = await ethers.getContractFactory('NewTouchIdSafeAccountProxy');
	// const newTouchIdAccountProxy = await NewTouchIdAccountProxy.deploy(newTouchIdAccountDeployer.address);
	// console.log('NewTouchIdAccountProxy :', newTouchIdAccountProxy.address);

	// const BananaAccountProxyFactory = await ethers.getContractFactory('BananaAccountProxyFactory');
	// const bananaTouchIdAccountProxyFactory = await BananaAccountProxyFactory.deploy();
	// console.log('BananaTouchIdAccountProxy Factory :', bananaTouchIdAccountProxyFactory.address);

	//goerli tokenhandler: 0xc1d4982E6126BF76959Fe21b53189bc2a717e243
	// banana proxy factory: 0x2cB39E2248251f104DbF5fdE528b77aE7415fD99
	// singleton: 0xfB988d2047526761cb34485AD519761278cE596D



	// const ec = await ethers.getContractFactory('EllipticCurve');
	// const ec_deployed = await ec.deploy();
	// console.log('Elliptic :', ec_deployed.address);

	// const st = await ethers.getContractFactory('Staking');
	// const stDeployer = await st.deploy();
	// console.log('staking :', stDeployer.address);

	const BananaAccount = await ethers.getContractFactory('BananaAccount');
	const BananaAccountDeployer = await BananaAccount.deploy();
	console.log('Banana Account:', BananaAccountDeployer.address);
	// 0x106DD6EdaF8Db8a3ACFa215c8C6ADf0730175CaF

	// 	const BananaAccount = await ethers.getContractFactory('BananaTest');
	// const BananaAccountDeployer = await BananaAccount.deploy();
	// console.log('Banana Test:', BananaAccountDeployer.address);
	
	// const PUBLIC_KEY_EXPOSED = '0xB97B29F08470DE99264ef5A08dde56807919BdDF'
	// const PRIVATE_KEY_EXPOSED = 'a3b484547f4517e2b15d3ab4cfbac3078a7e88f54b9cbca5ef2372ede8dff92d';
	// const receiver = '0x48701dF467Ba0efC8D8f34B2686Dc3b0A0b1cab5';
	// const fundTxn = {
    //     from: PUBLIC_KEY_EXPOSED,
    //     to: receiver,
    //     value: ethers.utils.parseEther("0.49"),
    //     gasLimit: 210000
    //   }
	// const wallet = new ethers.Wallet(PRIVATE_KEY_EXPOSED, new ethers.providers.JsonRpcProvider('https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas'));
	// const txn = await wallet.sendTransaction(fundTxn);
	// await txn.wait()
	// console.log(txn);

	// const EntryPoint = await ethers.getContractFactory('EntryPoint');
	// const entryPoint = await EntryPoint.deploy();
	// console.log('entryPoint :', entryPoint.address);
}

main();

