// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyRunWithABI2 {
    bytes32 private privateKey;
    bytes res;
    function setPrivateKey(address problemAddress) public {
        // 0xa6e5ca07 
        bytes memory gen_priv = new bytes(4);
        gen_priv[0] = 0xa6;
        gen_priv[1] = 0xe5;
        gen_priv[2] = 0xca;
        gen_priv[3] = 0x07;
        (bool success_gen, ) = address(problemAddress).delegatecall(gen_priv);
        if (!success_gen) revert("gen_priv failed");
    }

    // 채점을 위한 함수 입니다.
    function getPrivateKey() public view returns (bytes32) {
        return privateKey;
    }
}
