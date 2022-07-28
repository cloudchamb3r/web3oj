import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const addy = "0x78d74640B535cE1715432f0924a18c0c8bEf8cF4";

  const contract = await ethers.getContractAt(
    "ErrorHandleProblem2",
    addy,
    player
  );
  // await contract.throwError().then(
  //   () => {},
  //   async (reason) => {
  //     console.log(JSON.stringify(reason));
  //     await contract.setErrorCode(reason.error.code);
  //   }
  // );
  await contract.setErrorCode(18);
})().catch((err) => console.error(err));
