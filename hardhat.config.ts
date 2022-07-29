import { HardhatUserConfig } from "hardhat/config";
import "hardhat-gas-reporter";
import { config as dotenv } from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

dotenv();

const config = {
  solidity: {
    compilers: [{ version: "0.8.15" }],
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY],
      gas: 2100000,
      blockGasLimit: 30_000_000,
      minGasPrice: "0",
    },
  },
  etherscan: {
    // your api key for etherscan
    apiKey: process.env.ETHERSCAN_KEY,
  },
};

export default config;
