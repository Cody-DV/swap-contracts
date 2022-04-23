const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");


async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const myContract = await hre.ethers.getContractAt("Swap", contractAddress);
  const signer = await hre.ethers.getSigner()
  console.log(signer)

  const provider = ethers.provider

  // Before
  balance = await provider.getBalance(signer.address);
  console.log("Balance before: ", balance.toString()); // 0

  const result = await myContract.swapExactInputSingle(3);
  const receipt = await result.wait()

  // After
  balance = await provider.getBalance(signer.address);
  console.log("Balance after: ", balance.toString()); // 0
  
  console.log(result)
  console.log(receipt)
}

main()