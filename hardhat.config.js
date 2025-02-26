require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  // networks: {
  //   fuji: {
  //     url: "https://api.avax-test.network/ext/bc/C/rpc",
  //     accounts: [process.env.PRIVATE_KEY],  // Use your MetaMask private key
  //   },
  // },

  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Default Hardhat localhost URL
    },
  },

};
