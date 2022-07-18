import { ethers } from "hardhat";

(async function() {
    const [player] = await ethers.getSigners();
    const owner = '0x2633640d60c8693047ff4803e6e7657b0df36543'
    const token = await ethers.getContractAt('ERC20BurnableToken', '0x15a1B7bC24e6445CDc954934a566f43168df74B5', player);

    const amount = await token.balanceOf(player.address);
    await token.burn(amount);
})().catch(err => console.error(err));