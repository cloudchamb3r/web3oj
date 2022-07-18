import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("ERC20TransferFrom");
  const token = await Token.connect(player).deploy();
  await token.deployed();

  console.log("addr", player.address);

  const decimal = BigInt(await token.decimals());
  const owner = "0xc9144f98320Ec8B34a8B10b1F76a88739EeD57D7";
  const allow = (await token.allowance(owner, player.address)).toBigInt();
  const amount = 20n * 10n ** decimal;
  console.log("allow : ", allow);
  console.log("amount : ", amount);
  console.log("before token balance : ", await token.balanceOf(player.address));

  await token.transferFrom(owner, player.address, amount);

  console.log("after token balance : ", await token.balanceOf(player.address));
})().catch((err) => console.error(err));
