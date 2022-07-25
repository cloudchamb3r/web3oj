import { ethers } from "hardhat";

(async function () {
  const [player] = await ethers.getSigners();

  const contract = "0x55A8d778e5D361f251405aa981a86D84A6224155";
  const func = "da17c605";
  const padded_addr =
    "000000000000000000000000b027379947eC4815E1421e760a5D24e3B6316Dd5";
  const tx = {
    data: `0x${func}${padded_addr}`,
    to: contract,
    from: player.address,
    gasLimit: 10000000,
  };
  const result = await player.sendTransaction(tx);
  console.log(result);
})().catch((err) => console.error(err));
