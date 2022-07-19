import { ethers } from "hardhat";
import { BigNumber } from "@ethersproject/bignumber";

(async function () {
  const [player] = await ethers.getSigners();
  const contract = "0x864B604d6a160CF86F7BEDdcF385e5E33C177DC3";
  const token = await ethers.getContractAt(
    "Web3OJTPermitable",
    contract,
    player
  );
  const decimal = BigInt(await token.decimals());
  const nonce = await token.nonces(player.address);

  const domain = {
    name: "Web3 Online Judge Token",
    version: "1",
    chainId: 4,
    verifyingContract: contract,
  };
  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  };
  const value = {
    owner: player.address,
    spender: contract,
    value: 20n * 10n ** decimal,
    nonce: nonce,
    deadline: ethers.constants.MaxUint256,
  };
  const data = await player._signTypedData(domain, types, value);

  // parse r, s, v from data
  const signed = data.substring(2);
  const r = "0x" + signed.substring(0, 64);
  const s = "0x" + signed.substring(64, 128);
  const v = Number("0x" + signed.substring(128));
  console.log(v);
  console.log(s);
  console.log(r);

  const result = await token.permit(
    player.address,
    contract,
    20n * 10n ** decimal,
    ethers.constants.MaxUint256,
    v,
    r,
    s
  );

  console.log(result);
})().catch((err) => console.error(err));
