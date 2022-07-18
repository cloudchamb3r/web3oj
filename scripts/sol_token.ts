import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.connect(player).deploy(player.address);
  await myToken.deployed();

  const instance = "0x82DD4607E4F6601A56aae313058070C64d9A491A";
  const ERC20Init = await ethers.getContractFactory("ERC20Init");
  const erc20Init = ERC20Init.attach(instance);
  await erc20Init.setWeb3ojt(myToken.address);
})().catch((err) => console.error(err));
