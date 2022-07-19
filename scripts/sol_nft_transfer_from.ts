import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const contract = "0xAFDa4Ddb2E9Fc61a3cb6e317B670962F88d81ea9";
  const owner = "0x6bc7c15e8ab846c668c69e41a7254e6fbdd09833";
  const nft = await ethers.getContractAt("MyToken", contract, player);

  const res = await nft.transferFrom(owner, player.address, 0);
  console.log(res);
})().catch((err) => console.error(err));
