import {ethers} from 'hardhat';

(async function() {
    const [player] = await ethers.getSigners();
    const addy = '0x2716825988D47c62f8780361DC21990b4990C0f3';
    const contract = await ethers.getContractAt('Unlock', addy, player);


    const Unlocker = await ethers.getContractFactory("Unlocker");
    const unlocker = await Unlocker.connect(player).deploy(addy);
    await unlocker.deployed();
    console.log(unlocker.address);

    console.log(await unlocker.unlock());
    console.log(await contract.lock());
})().catch(err => console.error(err));