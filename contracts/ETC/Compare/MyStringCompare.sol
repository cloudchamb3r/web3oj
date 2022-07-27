// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./StringCompareProblem.sol";

contract MyStringCompare is IStringCompare {
    function compare(string memory _lhs, string memory _rhs) pure public returns (bool) {
        bytes memory lhs = bytes(_lhs);
        bytes memory rhs = bytes(_rhs);
        if (lhs.length == rhs.length) {
            for (uint i = 0 ; i < lhs.length; i++) {
                if (lhs[i] != rhs[i]) return false;
            }
            return true;
        }
        return false;
    }
}