// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IBZZ is IERC20 {
    function burn(uint256 amount) external;
    function burnFrom(address account, uint256 amount) external;
    function isMinter(address account) external view returns (bool);
    function addMinter(address account) external;
    function renounceMinter() external;
    function mint(address account, uint256 amount) external returns (bool);
    function cap() external view returns (uint256);
}
