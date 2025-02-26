const hre = require("hardhat");

async function main() {
  // Get the deployer's account
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract factory
  const ChatContract = await hre.ethers.getContractFactory("ChatApp");

  // Deploy the contract
  const chat = await ChatContract.deploy();

  // Wait for the contract to be deployed
  await chat.deployTransaction.wait(); // Wait for the deployment transaction to be mined

  console.log("Contract deployed at:", chat.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });