import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();

  const addy = "0xdAa1274d695157b9dc40C99e64f92f8855aE74D8";
  const contract = await ethers.getContractAt(
    "StringCompareProblem",
    addy,
    player
  );

  const Compare = await ethers.getContractFactory("MyStringCompare");
  const compare = await Compare.connect(player).deploy();
  await compare.deployed();
  console.log(compare.address);
  await contract.setStringCompareContract(compare.address);

  console.log(await compare.compare("", ""));
  console.log(await compare.compare("1", "12"));
})().catch((err) => console.error(err));
