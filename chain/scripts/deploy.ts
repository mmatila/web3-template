import { ethers } from "hardhat";

// npx hardhat deploy --network goerli

async function main() {
  const contract = await ethers.getContractFactory("Contract");
  console.log("Deploying contract...");
  const contractAddress = await contract.deploy();
  console.log("Contract deployed at: ", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
