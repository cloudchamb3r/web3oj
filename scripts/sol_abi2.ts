import { ethers } from "hardhat";

const _pad = (addy : string) => {
    if (addy.startsWith('0x')) addy = addy.substring(2);
    return '0'.repeat(64 - addy.length) + addy
} ;

(async function(){
    const [player] = await ethers.getSigners();
    const addy = '0xbE79949C8b09CAE0ce8f6c4335B07C6fCC6fa117';
    const problem = await ethers.getContractAt('RunWithABI2Problem', addy, player);

    const Hook = await ethers.getContractFactory('MyRunWithABI2');
    const hook = await Hook.connect(player).deploy();
    await hook.deployed();
    console.log('hook addy:', hook.address);
    

    await hook.setPrivateKey(problem.address, {gasLimit : 10000000});
    await problem.setRunWithABI2(hook.address);
})().catch(err => console.error(err))