// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ErrorHandleProblem3.sol";

contract MyErrorHandler3 {
    ErrorHandleProblem3 internal problem;
    address internal addy;
    uint errcode;
    string errmsg;
    bytes __err;
    bytes32 b32;
    bool done;

    constructor(address _prob){
        addy = _prob;
        problem = ErrorHandleProblem3(_prob);
    }

    function sol() public {
        problem.txBegin();
        try problem.throwError(){
            // err
        } catch (bytes memory err)  {
            __err = err;
            b32 = substringByte32(abi.encodePacked("0x31337deadbeef1"), 0) ;
            // errmsg = bytes32ToString(substringByte32(err, 100));
        }
    }

    function substringByte32(bytes memory b, uint32 offset) public pure returns(bytes32) {
        uint ptr;
        bytes memory tmp = new bytes(32);

        assembly {
            ptr := b
            tmp := mload(ptr)
        }
        
        return abi.decode(Memory.toBytes(addr + offset, 4), (bytes32));
    }

    function bytes32ToString(bytes32 b) public pure returns (string memory) {
        bytes memory temp = new bytes(32);
        for (uint i = 0 ; i  < 32; i++) {
            temp[i] = b[i];
        }
        return string(temp);
    }

    function getError() public view returns(bytes memory) {
        return __err;
    }

    function getErrorMessage()public view returns(string memory){
        return errmsg;
    }

    function getErrorCode() public view returns(uint) {
        return errcode;
    }

    function test() public view returns(bytes32) {
        return bytes32(uint(0x123456));
    }



}