// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyRunWithABI2 {
    bytes32 private privateKey;

    function setPrivateKey(address problemAddress) public {
        privateKey = bytes32(uint256(0x3f70b6e1817f46b0c7deac288b332d14e1b1a0ce7aaa0e221466e8e6f2ac200b));
    }

    // 채점을 위한 함수 입니다.
    function getPrivateKey() public view returns (bytes32) {
        return privateKey;
    }
}
