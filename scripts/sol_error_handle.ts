import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();
  const addy = "0xb64DB2e266dE6172218fF85AC7e9d837c5238192";

  const contract = await ethers.getContractAt(
    "ErrorHandleProblem",
    addy,
    player
  );

  console.log(
    await (await contract.setErrorMessage("No error message found.")).wait()
  );
})().catch((err) => console.error(err));
