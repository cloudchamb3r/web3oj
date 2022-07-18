import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token Test", function () {
  it("Test totalSupply, balance, decimals, name, symbol", async function () {
    const [player] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(player.address);
    await myToken.deployed();

    const decimal = BigInt(await myToken.decimals());
    const TOTAL_AMOUNT = 20000000000n;
    const TOTAL_SUPPLY = TOTAL_AMOUNT * 10n * decimal;

    expect(await myToken.totalSupply()).to.equal(TOTAL_SUPPLY);
    expect(await myToken.balanceOf(player.address)).to.equal(TOTAL_SUPPLY);
    expect(await myToken.decimals()).to.equal(18);
    expect(await myToken.name()).to.equal("Web3 Online Judge Token");
    expect(await myToken.symbol()).to.equal("WEB3OJT");
  });
});
