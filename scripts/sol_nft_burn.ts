import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const contract = "0xeA9EE55353513B7845eD15e61e3748E623f41392";
  const nft = await ethers.getContractAt(
    "Web3OnlineJudgeNFTBurnable",
    contract,
    player
  );
  const res = await nft.burn(0);
  console.log(res);
})().catch((err) => console.error(err));
