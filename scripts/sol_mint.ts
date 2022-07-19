import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const creator = "0xFbc8c2E746a762af6AE80DcdCfeaA219c7BaBA9A";
  const MyMintableToken = await ethers.getContractFactory("MyMintableToken");
  const myMintableToken = await MyMintableToken.connect(player).deploy(creator);
  await myMintableToken.deployed();

  const contract = "0xb14DB19354d8be474aE4E8907f5CD47e8fBc7e84";

  const ERC20Mintable = await ethers.getContractFactory("ERC20Mintable");
  const erc20mintable = ERC20Mintable.attach(contract);
  await erc20mintable.setToken(myMintableToken.address);
})().catch((err) => console.error(err));
