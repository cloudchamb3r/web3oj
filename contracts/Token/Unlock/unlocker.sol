// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Unlocker {
    address locker; 
    constructor(address addy ) { 
        locker = addy;
    }

    function unlock() public {
        bytes memory func = abi.encodeWithSignature("unlock()");
        (bool success, ) = locker.call(func);
        require(success, "unlock failed" );
    }
}