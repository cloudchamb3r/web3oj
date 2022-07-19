// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC721Mintable2.sol";

contract MyMintableNFT2 is  IERC721Mintable2, ERC721, Ownable {
    uint tokenId;
    constructor(address creator) ERC721("MyMintableNFT2", "MMNFT2"){
        tokenId = 0;
        _transferOwnership(creator);
    }

    function mint(address to) override public{
        _mint(to, tokenId);
        tokenId++;
    }
}