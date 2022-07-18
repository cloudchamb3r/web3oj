import { ethers } from "hardhat";

(async function sol() {
  const [addr] = await ethers.getSigners();

  const MyMultiplicationCalculator = await ethers.getContractFactory(
    "MyMultiplicationCalculator"
  );
  const myMultiplicationCalculator = await MyMultiplicationCalculator.connect(
    addr
  ).deploy();
  await myMultiplicationCalculator.deployed();

  const instance = "0xe451AE3Aa83c9a27c25328907F7eA3867B9D7eca";
  const MultiplicationCalculatorProblem = await ethers.getContractFactory(
    "MultiplicationCalculatorProblem"
  );
  const multiplicationCalculatorProblem =
    MultiplicationCalculatorProblem.attach(instance);
  await multiplicationCalculatorProblem.setMultiplicationCalculator(
    myMultiplicationCalculator.address
  );
})().catch((err) => console.error(err));
