// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    constructor(address player) ERC721("Web3 Online Judge NFT", "WEB3OJNFT") {
        _mint(player, 0);
    }

    function _baseURI()internal pure override returns (string memory) {
        return "https://app.web3oj.com/web3ojnft/";
    }
}