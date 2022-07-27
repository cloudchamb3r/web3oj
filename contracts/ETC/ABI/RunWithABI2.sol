// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRunWithABI2 {
    function getPrivateKey() external view returns (bytes32);
}

contract RunWithABI2Problem {
    bytes32 private privateKey; // 비밀키 저장 변수
    IRunWithABI2 Iinstance;

    function setRunWithABI2(address _RunWithABI2) public {
        Iinstance = IRunWithABI2(_RunWithABI2);
    }

    /*
    * 비밀키 생성 및 저장하는 함수가 추가로 존재합니다.
    function _______() public {
        
    }
    */
}
