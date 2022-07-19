import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const NFT = await ethers.getContractFactory("MyNFT");
  const nft = await NFT.connect(player).deploy(player.address);
  await nft.deployed();

  const contract = "0xd4f3eB93777E1586A1f967543B33e410F18Ca6D2";
  const ERC721Init = await ethers.getContractFactory("ERC721Init");
  const erc721init = ERC721Init.attach(contract);
  await erc721init.setWeb3ojNFT(nft.address);
})().catch((err) => console.error(err));
