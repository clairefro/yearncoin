const { ethers } = require("hardhat");

const main = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with account: ", deployer.address);

  const balance = (await deployer.getBalance()).toString();
  console.log("Account balance: ", balance);

  const Token = await ethers.getContractFactory("Yearn");
  const token = await Token.deploy();

  console.log("Token address: ", token.address);
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
