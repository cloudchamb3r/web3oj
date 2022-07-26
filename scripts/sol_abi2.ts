import { ethers } from "hardhat";

const _pad = (addy : string) => {
    if (addy.startsWith('0x')) addy = addy.substring(2);
    return '0'.repeat(64 - addy.length) + addy
} ;

(async function(){
    const [player] = await ethers.getSigners();
    const addy = '0x5cb794134fdB759e24A14576aF0cDF68b2aE433B';
    const problem = await ethers.getContractAt('RunWithABI2Problem', addy, player);

    // const Hook = await ethers.getContractFactory('MyRunWithABI2');
    // const hook = await Hook.connect(player).deploy();
    const hook = await ethers.getContractAt('MyRunWithABI2', '0x4caa36867d580dcd2193AFCa6177B8598E2713f3', player)
    // await hook.deployed();

    console.log('p:', problem.address);
    console.log('h:', hook.address);

    // await hook.setPrivateKey(problem.address);
    console.log(await hook.getPrivateKey());
})().catch(err => console.error(err))