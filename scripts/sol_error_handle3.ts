import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const addy = "0x9919b3eBD77D6a44FfA9cC45E671B3e395E02422";

  const contract = await ethers.getContractAt(
    "ErrorHandleProblem3",
    addy,
    player
  );

  const Handler = await ethers.getContractFactory("MyErrorHandler3");
  const handler = await Handler.connect(player).deploy(contract.address);
  await handler.deployed();
  console.log("hhhhhhhhhhhhhhh", handler.address);
  const tx = await handler.sol({ gasLimit: 10000000 });
  await tx.wait();

  // console.log(await handler.getErrorMessage());
  console.log("eeeeeeeeeeeeeeeeeee", await handler.getError());
  console.log("----------------");
  console.log(await handler.test());
})().catch((err) => console.error(err));
