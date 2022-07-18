// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract MyToken is ERC20 {
    constructor(address player) ERC20("Web3 Online Judge Token", "WEB3OJT") {
        uint MAX_SUP = 2000000000 * (10 ** decimals());
        if (totalSupply() < MAX_SUP){
            _mint(player, MAX_SUP - totalSupply());
        }
    }
}