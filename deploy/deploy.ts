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

	// const BananaAccount = await ethers.getContractFactory('BananaAccount');
	// const BananaAccountDeployer = await BananaAccount.deploy();
	// console.log('Banana Account:', BananaAccountDeployer.address);
	// 0x106DD6EdaF8Db8a3ACFa215c8C6ADf0730175CaF

	// 	const BananaAccount = await ethers.getContractFactory('BananaTest');
	// const BananaAccountDeployer = await BananaAccount.deploy();
	// console.log('Banana Test:', BananaAccountDeployer.address);

	// const PUBLIC_KEY_EXPOSED = '0xE6C9E76028cFf978E139a7a5B3E289bca75110cc'
	// const PRIVATE_KEY_EXPOSED = '27818a7268e6b5b09559a2df7b42c998277c3df6c2a80eb533cf4853c0bfb704';
	// const receiver = '0xBaa8C8C57c1118cA48b2ef47Bc474326eC3b5192';
	// const fundTxn = {
    //     from: PUBLIC_KEY_EXPOSED,
    //     to: receiver,
    //     value: ethers.utils.parseEther("0.01"),
    //     gasLimit: 210000
    //   }
	// const wallet = new ethers.Wallet(PRIVATE_KEY_EXPOSED, new ethers.providers.JsonRpcProvider('https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas'));
	// const txn = await wallet.sendTransaction(fundTxn);
	// await txn.wait()
	// console.log(txn);

	// const EntryPoint = await ethers.getContractFactory('EntryPoint');
	// const entryPoint = await EntryPoint.deploy();
	// console.log('entryPoint :', entryPoint.address);





	/********************************************************************* ******************************** ******************************** ********************************  */
    // const BananaAccountProxyFactory = await ethers.getContractFactory('BananaAccountProxyFactory');
	// const bananaTouchIdAccountProxyFactory = await BananaAccountProxyFactory.deploy();
	// console.log('BananaTouchIdAccountProxy Factory :', bananaTouchIdAccountProxyFactory.address);

	const BananaAccount = await ethers.getContractFactory('BananaAccount');
	const BananaAccountDeployer = await BananaAccount.deploy();
	console.log('Banana Account:', BananaAccountDeployer.address);

	// const TokenCallBackHandlerDeployer = await ethers.getContractFactory('TokenCallbackHandler');
	// const tokenCallBackHandlerDeployer = await TokenCallBackHandlerDeployer.deploy();
	// console.log('Token callback handler :', tokenCallBackHandlerDeployer.address);

    // const ec = await ethers.getContractFactory('EllipticCurve');
	// const ec_deployed = await ec.deploy();
	// console.log('Elliptic :', ec_deployed.address);

	// const st = await ethers.getContractFactory('Staking');
	// const stDeployer = await st.deploy();
	// console.log('staking :', stDeployer.address);

// normalized for mumbai + opt + goerli 
// owner add 0xB730423Bb7B354b1Ff0a2E8fd17ff57555C951a7
// BananaTouchIdAccountProxy Factory : 0xF1Fae5392dce474fc1c2D98c645f438d6c760E78
// Banana Account: 0x33FF9B2A40810fA6B0cA5824fd2C189953ffD5D9
// Token callback handler : 0x414Ce649934a1b3cAE1903411e325E4159C46474
// Elliptic : 0xEA4d16E741E76E7a93b8f46650537855149efc48
// staking : 0x8505F94693Dbd0756c733056924de3f71a020f2E



// 	owner add 0x6584A3bccbcA566efac25A7c10Ec32EcbC5d10B1
// BananaTouchIdAccountProxy Factory : 0xaa6bBbA9Cde638e58b4F01b4f98D73011FaB2b23
// Banana Account: 0xdD230e4F566178739B999c1dF4F7362240887E46
// Token callback handler : 0x668299a3cAB0821b6A9A6AA401a0Fe7f16cB0642
// Elliptic : 0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94

// owner add 0x6584A3bccbcA566efac25A7c10Ec32EcbC5d10B1
// BananaTouchIdAccountProxy Factory : 0xaa6bBbA9Cde638e58b4F01b4f98D73011FaB2b23
// Banana Account: 0xdD230e4F566178739B999c1dF4F7362240887E46
// Token callback handler : 0x668299a3cAB0821b6A9A6AA401a0Fe7f16cB0642
// Elliptic : 0xDf6fFfB5Ec52A73F7C96e2818dBD46B7d4009b94
// owner add 0x6584A3bccbcA566efac25A7c10Ec32EcbC5d10B1

}

main();

// function stringToHex(string) {
// 	let hexStr = '';
// 	for (let i = 0; i < string.length; i++) {
// 		let compact = string.charCodeAt(i).toString(16)
// 		hexStr += compact
// 	}
// 	return '0x' + hexStr
// }

// function getAbi(jsonPath) {
// 	let file = fs.readFileSync(jsonPath)
// 	let abi = JSON.parse(file.toString()).abi
// 	return abi
// }

// async function delay(sec) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, sec * 1000);
// 	})
// }

// function m(num, decimals) {
// 	return BigNumber.from(num).mul(BigNumber.from(10).pow(decimals))
// }

// function d(bn, decimals) {
// 	return bn.mul(BigNumber.from(100)).div(BigNumber.from(10).pow(decimals)).toNumber() / 100
// }

// function b(num) {
// 	return BigNumber.from(num)
// }

// function n(bn) {
// 	return bn.toNumber()
// }

// function s(bn) {
// 	return bn.toString()
// }

// async function getProof(psw, amount, user) {

// 	let input = [stringToHex(psw), amount]
// 	console.log('input', input)

// 	let data = await snarkjs.groth16.fullProve({in:input}, "./zk/new_circuit/circuit_js/circuit.wasm", "./zk/new_circuit/circuit_0001.zkey")

// 	// console.log("pswHash: ", data.publicSignals[0])
// 	console.log(JSON.stringify(data))

// 	const vKey = JSON.parse(fs.readFileSync("./zk/new_circuit/verification_key.json"))
// 	const res = await snarkjs.groth16.verify(vKey, data.publicSignals, data.proof)

// 	if (res === true) {
// 		console.log("Verification OK")

// 		let pswHash = data.publicSignals[0]
// 		let allHash = data.publicSignals[2]
// 		// console.log(`getProof: user add ${user.address}`)
// 		let boxhash = ethers.utils.solidityKeccak256(['uint256', 'address'], [pswHash, user.address])

// 		let proof = [
// 			BigNumber.from(data.proof.pi_a[0]).toHexString(),
// 			BigNumber.from(data.proof.pi_a[1]).toHexString(),
// 			BigNumber.from(data.proof.pi_b[0][1]).toHexString(),
// 			BigNumber.from(data.proof.pi_b[0][0]).toHexString(),
// 			BigNumber.from(data.proof.pi_b[1][1]).toHexString(),
// 			BigNumber.from(data.proof.pi_b[1][0]).toHexString(),
// 			BigNumber.from(data.proof.pi_c[0]).toHexString(),
// 			BigNumber.from(data.proof.pi_c[1]).toHexString()
// 		]

		
// 		return {proof, pswHash, boxhash, allHash}

// 	} else {
// 		console.log("Invalid proof")
// 	}
// }


// async function approveNFT(
//     heirToken,
//     user,
//     to,
//     tokenId
//   ){
//     await heirToken.connect(user).approve(to, tokenId);
// 	console.log(`Heir token approved`)
//   }

// async function moveBlocks(numOfBlocks){
//     console.log("Moving blocks.... ")
//     for (let i =0; i<= numOfBlocks; i++){
//         await network.provider.request({
//             method: "evm_mine",
//             params: [],
//         })
//     }
//     console.log(` Blocks moved by ${numOfBlocks} `)
// }

// async function rechargeWithAddress(PecuniaLock, owner, heirAddr, amount, tokenuri){
// 	const tokenId = await PecuniaLock.connect(owner).rechargeWithAddress(owner.address, heirAddr, tokenuri, {value: amount})
	
// 	console.log('step 2 rechargeWithAddress done')
// 	return tokenId
// }

// main()
// 	.then(() => process.exit(0))
// 	.catch(error => {
// 		console.error(error);
// 		process.exit(1);
// 	});