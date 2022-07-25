import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const addy = "0xDffFBB3E48fcf813198C7F2cf263edaa59768329";
  const contract = await ethers.getContractAt("FindPrivateValue", addy, player);
  const private_value = 6997;

  await contract.setValue(private_value);

  const result = await contract.isSame();
  console.log(result);
})().catch((err) => console.error(err));
