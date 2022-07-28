// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SumOfArrayProblem.sol";

contract MySumOfArray is ISumOfArray{
    function inc(uint256 i) private pure returns(uint256) {
        unchecked {
            return i + 1;
        }
    }
    function sum(uint256 a, uint256 b) private pure returns(uint256) {
        unchecked {
            return a + b;
        }
    }
    function sum(uint[] memory _a) pure public returns(uint) {
        uint ret;
        // for (uint i; i < 100; i = inc(i)) {
        //     ret = sum(ret, _a[i]);
        // }
        // sum(ret, _a[0]);
        
        sum(ret, _a[0]);
        sum(ret, _a[1]);
        sum(ret, _a[2]);
        sum(ret, _a[3]);
        sum(ret, _a[4]);
        sum(ret, _a[5]);
        sum(ret, _a[6]);
        sum(ret, _a[7]);
        sum(ret, _a[8]);
        sum(ret, _a[9]);
        sum(ret, _a[10]);
        sum(ret, _a[11]);
        sum(ret, _a[12]);
        sum(ret, _a[13]);
        sum(ret, _a[14]);
        sum(ret, _a[15]);
        sum(ret, _a[16]);
        sum(ret, _a[17]);
        sum(ret, _a[18]);
        sum(ret, _a[19]);
        sum(ret, _a[20]);
        sum(ret, _a[21]);
        sum(ret, _a[22]);
        sum(ret, _a[23]);
        sum(ret, _a[24]);
        sum(ret, _a[25]);
        sum(ret, _a[26]);
        sum(ret, _a[27]);
        sum(ret, _a[28]);
        sum(ret, _a[29]);
        sum(ret, _a[30]);
        sum(ret, _a[31]);
        sum(ret, _a[32]);
        sum(ret, _a[33]);
        sum(ret, _a[34]);
        sum(ret, _a[35]);
        sum(ret, _a[36]);
        sum(ret, _a[37]);
        sum(ret, _a[38]);
        sum(ret, _a[39]);
        sum(ret, _a[40]);
        sum(ret, _a[41]);
        sum(ret, _a[42]);
        sum(ret, _a[43]);
        sum(ret, _a[44]);
        sum(ret, _a[45]);
        sum(ret, _a[46]);
        sum(ret, _a[47]);
        sum(ret, _a[48]);
        sum(ret, _a[49]);
        sum(ret, _a[50]);
        sum(ret, _a[51]);
        sum(ret, _a[52]);
        sum(ret, _a[53]);
        sum(ret, _a[54]);
        sum(ret, _a[55]);
        sum(ret, _a[56]);
        sum(ret, _a[57]);
        sum(ret, _a[58]);
        sum(ret, _a[59]);
        sum(ret, _a[60]);
        sum(ret, _a[61]);
        sum(ret, _a[62]);
        sum(ret, _a[63]);
        sum(ret, _a[64]);
        sum(ret, _a[65]);
        sum(ret, _a[66]);
        sum(ret, _a[67]);
        sum(ret, _a[68]);
        sum(ret, _a[69]);
        sum(ret, _a[70]);
        sum(ret, _a[71]);
        sum(ret, _a[72]);
        sum(ret, _a[73]);
        sum(ret, _a[74]);
        sum(ret, _a[75]);
        sum(ret, _a[76]);
        sum(ret, _a[77]);
        sum(ret, _a[78]);
        sum(ret, _a[79]);
        sum(ret, _a[80]);
        sum(ret, _a[81]);
        sum(ret, _a[82]);
        sum(ret, _a[83]);
        sum(ret, _a[84]);
        sum(ret, _a[85]);
        sum(ret, _a[86]);
        sum(ret, _a[87]);
        sum(ret, _a[88]);
        sum(ret, _a[89]);
        sum(ret, _a[90]);
        sum(ret, _a[91]);
        sum(ret, _a[92]);
        sum(ret, _a[93]);
        sum(ret, _a[94]);
        sum(ret, _a[95]);
        sum(ret, _a[96]);
        sum(ret, _a[97]);
        sum(ret, _a[98]);
        sum(ret, _a[99]);
        
        return ret;
    }
}
