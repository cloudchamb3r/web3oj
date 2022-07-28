// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ErrorHandleProblem3.sol";

contract MyErrorHandler3 {
    ErrorHandleProblem3 internal problem;
    bytes __err;
    uint errcode;
    string errmsg;
    bool valid;

    constructor(address _prob){
        problem = ErrorHandleProblem3(_prob);
    }

    function sol() public {
        problem.txBegin();
        try problem.throwError(){
            // err
        } catch (bytes memory err)  {
            bytes32 e;
            bytes32 m;
            assembly {
                e := mload(add(err, 36))
                m := mload(add(err, 132))
            }
            __err = err;
            errcode = uint256(e);
            errmsg = bytes32ToString(m);

            problem.setErrorData(errcode, errmsg);
            valid = problem.valid();
        }
    }

    // https://ethereum.stackexchange.com/questions/2519/how-to-convert-a-bytes32-to-string#:~:text=To%20do%20this%2C%20you%20would%20get%20the%20value,then%20see%20and%20use%20in%20your%20frontend%20dApp.
    function bytes32ToString(bytes32 _bytes32) public pure returns (string memory) {
        uint8 i = 0;
        while(i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
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

    function getValid() public view returns(bool) {
        return valid;
    }

}