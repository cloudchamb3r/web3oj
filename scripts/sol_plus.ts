import { ethers } from "hardhat";

(async function sol() {
  const [addr] = await ethers.getSigners();

  const MyPlusCalculator = await ethers.getContractFactory("MyPlusCalculator");
  const myPlusCalculator = await MyPlusCalculator.connect(addr).deploy();
  await myPlusCalculator.deployed();

  const instance = "0x9B2406D3DF90227CCa44AAcd56c5a485D50DfCd9";
  const PlusCalculatorProblem = await ethers.getContractFactory(
    "PlusCalculatorProblem"
  );
  const plusCalculatorProblem = PlusCalculatorProblem.attach(instance);
  await plusCalculatorProblem.setPlusCalculator(myPlusCalculator.address);
})().catch((err) => console.error(err));
