// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PayableContract {
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function Transfer(address payable to, uint amount) public payable {
        (bool success, ) = to.call{value : amount}("");
        require(success, "failed to send");
    }

    receive() external payable {}
}