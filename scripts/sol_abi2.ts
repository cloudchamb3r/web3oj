import { ethers } from "hardhat";


(async function(){
    const [player] = await ethers.getSigners();
    const addy = '0x766Dd832A8C4DC32d21Ab8cdA7f8F766870D10aA';
    const problem = await ethers.getContractAt('RunWithABI2Problem', addy, player);

    const MyABI = await ethers.getContractFactory('MyRunWithABI2');
    const myAbi = await MyABI.connect(player).deploy();
    await myAbi.deployed();
    console.log(`myAbi : ${myAbi.address}`);

    await myAbi.setPrivateKey(problem.address, {gasLimit: 10000000});
    await problem.setRunWithABI2(myAbi.address);
})().catch(err => console.error(err))