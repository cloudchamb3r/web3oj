import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const contract = "0xA2753e8D8aa3342dBEc4097c894159ca0C7C5C1e";
  const nft = await ethers.getContractAt(
    "Web3OnlineJudgeNFTFind",
    contract,
    player
  );

  const token_id = 0x1a6;
  console.log(await nft.transferFrom(player.address, contract, token_id));
})().catch((err) => console.error(err));
