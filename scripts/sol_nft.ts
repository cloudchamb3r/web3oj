import { ethers } from "hardhat";

(async function(){
    const [player] = await ethers.getSigners();
})().catch(err => console.error(err));