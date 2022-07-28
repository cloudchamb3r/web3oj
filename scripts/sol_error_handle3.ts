import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const addy = "0xB634b9ed28CA804b3281021d4C849878d5F0F5E5";

  const contract = await ethers.getContractAt(
    "ErrorHandleProblem3",
    addy,
    player
  );

  const Handler = await ethers.getContractFactory("MyErrorHandler3");
  const handler = await Handler.connect(player).deploy(contract.address);
  await handler.deployed();
  console.log("handler address : ", handler.address);
  const tx = await handler.sol({ gasLimit: 10000000 });
  await tx.wait();

  // console.log(await handler.getErrorMessage());
  console.log("err", await handler.getError());
  console.log("code", await handler.getErrorCode());
  console.log("msg", await handler.getErrorMessage());
  console.log("valid", await handler.getValid());
  console.log("----------------");
  // console.log(await handler.test());
})().catch((err) => console.error(err));
