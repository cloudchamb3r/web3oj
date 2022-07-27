// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Unlock{
    bool locked;
    address owner;

    function lock() public view returns (bool) {
        return locked;
    }

    // unlock()
}