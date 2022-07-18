import { ethers } from "hardhat";

(async function sol() {
  const [addr] = await ethers.getSigners();

  // create divisioncalculator instance
  const MyDivisionCalculator = await ethers.getContractFactory(
    "MyDivisionCalculator"
  );
  const myDivisionCalculator = await MyDivisionCalculator.connect(
    addr
  ).deploy();
  await myDivisionCalculator.deployed();

  const instance = "0x6e75f304173c8ACeD22F04A8699e19b19527C676";
  const DivisionCalculatorProblem = await ethers.getContractFactory(
    "DivisionCalculatorProblem"
  );
  const divisionCalculatorProblem = DivisionCalculatorProblem.attach(instance);
  await divisionCalculatorProblem.setDivisionCalculator(
    myDivisionCalculator.address
  );
})().catch((err) => console.error(err));
