import { ethers } from "hardhat";
import { ContractType } from "hardhat/internal/hardhat-network/stack-traces/model";

const ABI = [
  {
    type: "function",
    name: "getAddress",
    inputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "unknown",
    inputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "register",
    inputs: [
      {
        name: "target",
        type: "address",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "fallback",
    stateMutability: "payable",
  },
];

(async function () {
  const [player] = await ethers.getSigners();
  const contract_addy = "0x55A8d778e5D361f251405aa981a86D84A6224155";
  const contract = new ethers.Contract(contract_addy, ABI, player);

  const tx = {
    from: "0xb027379947eC4815E1421e760a5D24e3B6316Dd5",
    to: "0x55A8d778e5D361f251405aa981a86D84A6224155",
    data: "0x4420e486000000000000000000000000b027379947ec4815e1421e760a5d24e3b6316dd5",
    gasLimit: "5000000",
  };
  const res = await player.sendTransaction(tx);
  console.log(res);
})().catch((err) => console.error(err));
