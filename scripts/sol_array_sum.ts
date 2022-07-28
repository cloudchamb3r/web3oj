import {ethers} from 'hardhat';

(async function() {
    const [player] = await ethers.getSigners();
    const addy = '0xD4AD935e6D626CafD45836d04821Cc709311289e';
    const contract = await ethers.getContractAt('SumOfArrayProblem', addy, player);
    const SumArr = await ethers.getContractFactory('MySumOfArray');
    const sumArr = await SumArr.connect(player).deploy();
    await sumArr.deployed();
    await contract.setSumOfArrayContract(sumArr.address);
    
    console.log(sumArr.address);
    const gas_price = await player.getGasPrice();
    const arr = [
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
        1,2,3,4,5,6,7,8,9,10,
    ]
    console.log(gas_price);
    console.log(await sumArr.estimateGas.sum(arr));
})().catch(err => console.error(err));