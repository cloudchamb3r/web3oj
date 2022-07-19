// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC721Mintable.sol";

contract MyMintableNFT is  IERC721Mintable, ERC721, Ownable {
    constructor(address creator) ERC721("MyMintableNFT", "MMNFT"){
        _transferOwnership(creator);
    }

    function mint(address to, uint256 tokenId) override public{
        _mint(to, tokenId);        
    }
}