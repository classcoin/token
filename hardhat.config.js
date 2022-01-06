/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-contract-sizer");
require("hardhat-deploy");
require("hardhat-gas-reporter");

require("dotenv").config();
const pkey = process.env.PRIVATE_KEY || "your private key"
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      35: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      97: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      56: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
      96: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
    },
    dev: {
      // Default to 1
      default: 1,
      // dev address mainnet
      // 1: "",
        35: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
        56: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
        96: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
    },
  },
  networks: {
    meta: {
      url: process.env.META_RPC,
      chainId: 17,
      accounts: [`0x${pkey}`], 
      live: true,
      saveDeployments: true,
      tags: ["production"],
    },
    xchain: {
      url: process.env.XCHAIN_RPC,
      chainId: 35,
      accounts: [`0x${pkey}`], 
      live: true,
      saveDeployments: true,
      tags: ["production"],
    },    
    bsc: {
      url: process.env.BSC_RPC,
      chainId: 56,
      accounts: [`0x${pkey}`], 
      live: true,
      saveDeployments: true,
      tags: ["production"],
    },    
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
};
