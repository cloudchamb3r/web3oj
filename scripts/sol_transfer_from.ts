import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const token = await ethers.getContractAt("ERC20TransferFrom", "0xE0b483B85190B2608956bcAeEcDd8031b9aE694B");
  const owner = "0xc9144f98320ec8b34a8b10b1f76a88739eed57d7";
  const allow = (await token.allowance(owner, player.address)).toBigInt();
  await token.transferFrom(owner, player.address, allow);
})().catch((err) => console.error(err));
