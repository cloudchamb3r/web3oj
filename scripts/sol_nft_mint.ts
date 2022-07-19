import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const creator = "0xFbc8c2E746a762af6AE80DcdCfeaA219c7BaBA9A";
  const MyMintableNFT = await ethers.getContractFactory("MyMintableNFT");
  const myMintableNFT = await MyMintableNFT.connect(player).deploy(creator);
  await myMintableNFT.deployed();

  const contract = "0x6A1818D69fa4e4F0b844F1D796DE3Af609ea6b87";
  const ERC721Mintable = await ethers.getContractFactory("ERC721Mintable");
  const erc721mintable = ERC721Mintable.attach(contract);
  await erc721mintable.setToken(myMintableNFT.address);
})().catch((err) => console.error(err));
