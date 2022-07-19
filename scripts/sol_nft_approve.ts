import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const contract = "0xC59812283D65E651181A3458a8dC7eBAc2886A84";
  const nft = await ethers.getContractAt("MyNFT", contract, player);
  const res = await nft.approve(contract, 0);
  console.log("result : ", res);
})().catch((err) => console.error(err));
