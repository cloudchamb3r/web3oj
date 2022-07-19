// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyMintableToken is IERC20Mintable, ERC20, Ownable{
    constructor(address creator) ERC20("MyMintableToken", "MMT") {
        _transferOwnership(creator);
    }
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
