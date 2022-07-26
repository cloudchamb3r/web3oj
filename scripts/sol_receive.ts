import {ethers} from 'hardhat';

(async function() {
    const [player] = await ethers.getSigners();
    const addy = '0x960F72d100aF33ca9AC3a6c579FdB457725c810F';
    const problem = await ethers.getContractAt('ReceiveEtherFunctionProblem', addy, player);
    
    const Payable = await ethers.getContractFactory('PayableContract');
    const payable = await Payable.connect(player).deploy();
    await payable.deployed();
    console.log(`payable addy : ${payable.address}`);

    await payable.Transfer(problem.address, 30000, {gasLimit: 1000000});
    await problem.setReceiveEtherAddress(payable.address);
})().catch(err => console.error(err));