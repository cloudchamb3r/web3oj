import { ethers } from "hardhat";

(async function sol() {
  const [addr] = await ethers.getSigners();

  const MyMinusCalculator = await ethers.getContractFactory(
    "MyMinusCalculator"
  );
  const myMinusCalculator = await MyMinusCalculator.connect(addr).deploy();
  await myMinusCalculator.deployed();

  const instance = "0x2cbb693B5bfF9F2fEe17575c4B42e0cB3A62F69D";
  const MinusCalculatorProblem = await ethers.getContractFactory(
    "MinusCalculatorProblem"
  );
  const minusCalculatorProblem = MinusCalculatorProblem.attach(instance);
  await minusCalculatorProblem.setMinusCalculator(myMinusCalculator.address);
})().catch((err) => console.error(err));
