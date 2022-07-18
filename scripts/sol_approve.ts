import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.connect(player).deploy(player.address);
  await myToken.deployed();

  const instance = "0xb94BD7E9d2717A485d4681842C37A37eDE6B8Ed5";
  const decimal = BigInt(await myToken.decimals());
  const amount = 20n * 10n ** decimal;

  await myToken.approve(instance, amount);

  const ERC20Approve = await ethers.getContractFactory("ERC20Approve");
  const erc20approve = ERC20Approve.attach(instance);
  await erc20approve.setWeb3ojt(myToken.address);
})().catch((err) => console.error(err));
