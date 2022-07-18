import { expect } from "chai";
import { ethers } from "hardhat";

describe("Transfer Test", function () {
  it("Test Transfer ", async function () {
    const [player] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(player.address);
    await myToken.deployed();

    const decimal: bigint = BigInt(await myToken.decimals());
    const TOTAL_AMOUNT = 2000000000n;
    const TOTAL_SUPPLY = TOTAL_AMOUNT * 10n ** decimal;

    expect(await myToken.totalSupply()).to.equal(TOTAL_SUPPLY);

    expect(await myToken.balanceOf(player.address)).to.equal(TOTAL_SUPPLY);
    await myToken.transfer(myToken.address, 20n * 10n ** decimal);
    expect(await myToken.balanceOf(player.address)).to.equal(
      (TOTAL_AMOUNT - 20n) * 10n ** decimal
    );
  });
});
