import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const addy = "0x9A6dF8Fbf58aecA875BBa3cf02b255277C6f1580";
  const contract = await ethers.getContractAt(
    "SumOfArrayProblem",
    addy,
    player
  );
  const SumArr = await ethers.getContractFactory("MySumOfArray");
  const sumArr = await SumArr.connect(player).deploy();
  await contract.setSumOfArrayContract(sumArr.address);
})().catch((err) => console.error(err));
