// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyRunWithABI2 {
    bytes32 private privateKey;

    function setPrivateKey(address problemAddress) public {
        bytes memory gen_priv = new bytes(4);
        gen_priv[0] = 0xa6;
        gen_priv[1] = 0xe5;
        gen_priv[2] = 0xca;
        gen_priv[3] = 0x07;
        (bool _success, ) = problemAddress.call(gen_priv);
        if (!_success) revert("call failed");
        (bool success,) = problemAddress.delegatecall(gen_priv);
        if (!success) revert("delegate failed");
    }

    // 채점을 위한 함수 입니다.
    function getPrivateKey() public view returns (bytes32) {
        return privateKey;
    }
}
