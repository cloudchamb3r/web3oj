import { ethers } from "hardhat";

(async function() {
    const [player] = await ethers.getSigners();
    const contract = '0xD5D6297793bf17638ECbeBDB7A87765E80D0C8D7';
    const token = await ethers.getContractAt('Web3OJTPausable', contract, player);
    
    await token.pause();
})().catch(err => console.error(err));