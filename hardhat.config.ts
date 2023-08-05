
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan"
import "hardhat-gas-reporter"

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });


export default {
  solidity: {
    version: "0.8.15",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
        // details: {
        //   yul: false
        // }
      },
    },
  },
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  //   mumbai: {
  //     url: process.env.MUMBAI_URL || '',
  //     accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
      
  // },
  goerli: {
    url: `https://eth-goerli.g.alchemy.com/v2/IaVkSX3wU98rK7vpVyFgIryaaHfYpoST`,
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"]
  },
  optimismTestnet: {
    url: `https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas`,
    accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"]
  },
  mumbai: {
    url: 'https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4',
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"]
  },
  shardeum: {
    url: 'https://sphinx.shardeum.org/',
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"],
    chainId: 8082,
  },
  arbitrumTestnet: {
    url: 'https://arb-goerli.g.alchemy.com/v2/i-ei4ue2tQfCNvYGJ63NWcv8U8nEl0dw',
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"] // change it before multi network deployment
  },
  gnosis: {
    url: 'https://gnosis-mainnet.blastapi.io/1d3ec055-c764-4685-86b5-1025719f35f6',
    accounts: ["77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644"],
    chainId: 100,
  },
  chiadoTestnet: {
    url: 'https://gnosis-chiado.blastapi.io/1d3ec055-c764-4685-86b5-1025719f35f6',
    accounts: ['77b838ecdcebf23e06ad223a1295746d3e055584c5690d0b899513c8ab7cf644']
  },
  shibuyaTestnet: {
    url: 'https://evm.shibuya.astar.network',
    accounts: ['4da13661e1deb6598ccc0f0963d86c1f5e1cfb748ccd66753fd7fa1339c92616']
  },
  polygonMainnet: {
    // url: 'https://polygon-rpc.com',
    url: "https://polygon-mainnet.g.alchemy.com/v2/M6obmh9NhecgkyNlK0G00anwrpBnjzwA",
    // accounts: ['4d4d1e5c12708c233d5678fc1b9a82b51f4d24710d2e4bdbf724632060f1440a']
    accounts: ['bb9b293b1f51ba971c50ecc239f068bc7f94a31f2fc10608c43462614f6882a8']
  },
  astar: {
    // url: 'https://astar-mainnet.g.alchemy.com/v2/AeVnumdmpgsZZfta5rnQDeI5CxXOK3Hw',
    url: 'https://astar.public.blastapi.io',
    accounts: ["adf160e8af90b3b93ad7a443ab3e976fd310aabe9e14dc3d88b2c006af2c1b91"]
  }
  },
  etherscan: {
    // apiKey: "YJ546HGGQFGMEE4B22QNGB58QKZ97G8YSP"
    // apiKey: "2S8CM6KUUPXGG7JV63UZVVVZTWP6RYJXYE"
    apiKey: "C2J3GI995B9DKK1XVF3P67UDHU72P4Q15D",
    // apiKey: "ESHESDSD935HS3IAW42I9X8HDJ13TX4IUM" //gnosis
 }
};