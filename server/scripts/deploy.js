const hre = require("hardhat");

const main = async () => {
  const BikeChain = await hre.ethers.getContractFactory("BikeChain");
  const bikeChain = await BikeChain.deploy();

  await bikeChain.deployed();

  console.log("Bikechain deployed to :", bikeChain.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
