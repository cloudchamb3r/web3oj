import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const contract = "0xA25326e273f17C44842a7520790BC4D4BB550eCA";
  const nft = await ethers.getContractAt(
    "Web3OnlineJudgeNFTPausable",
    contract,
    player
  );

  console.log(await nft.pause());
})().catch((err) => console.error(err));
