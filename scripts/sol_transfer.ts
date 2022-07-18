import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.connect(player).deploy(player.address);
  await myToken.deployed();

  const instance = "0x76169180c530917bd8B3486954E823f810Faac69";
  const decimal = BigInt(await myToken.decimals());
  const amount = 20n * 10n ** decimal;

  // transfer amount (20) to problem wallet
  await myToken.transfer(instance, amount);

  const ERC20Transfer = await ethers.getContractFactory("ERC20Transfer");
  const erc20transfer = ERC20Transfer.attach(instance);
  await erc20transfer.setWeb3ojt(myToken.address);
})().catch((err) => console.error(err));
