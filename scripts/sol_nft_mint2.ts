import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const creator = "0xFbc8c2E746a762af6AE80DcdCfeaA219c7BaBA9A";
  const MyMintableNFT = await ethers.getContractFactory("MyMintableNFT2");
  const myMintableNFT = await MyMintableNFT.connect(player).deploy(creator);
  await myMintableNFT.deployed();

  const contract = "0xeea4307f9747727cf354a3c40d9b59c4CEb988c7";
  const ERC721Mintable = await ethers.getContractFactory("ERC721Mintable2");
  const erc721mintable = ERC721Mintable.attach(contract);
  await erc721mintable.setToken(myMintableNFT.address);
})().catch((err) => console.error(err));
