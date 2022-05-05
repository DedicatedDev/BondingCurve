// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IBZZ.sol";
import "hardhat/console.sol";

contract Bzz is ERC20, Ownable, IBZZ {
    mapping(address => bool) _isMinter;
    uint256 _cap;
    modifier onlyMinter() {
        require(_isMinter[msg.sender], "BZZ: has not mint authorization!");
        _;
    }

    constructor(uint256 capped) ERC20("BZZ", "BZZ") {
        _isMinter[msg.sender] = true;
        _cap = capped;
    }

    function mint(address to, uint256 amount)
        external
        override
        onlyMinter
        returns (bool)
    {
        require(totalSupply() + amount <= _cap, "ERC20Capped: cap exceeded");
        _mint(to, amount);
        return true;
    }

    function burn(uint256 amount) external override {
        _burn(msg.sender, amount);
    }

    function burnFrom(address account, uint256 amount) external override {
        _burn(account, amount);
    }

    function addMinter(address newMinter) external onlyOwner {
        _isMinter[newMinter] = true;
    }

    function removeMinter() external onlyOwner {
        delete _isMinter[msg.sender];
    }

    function isMinter(address account) external view returns (bool) {
        return _isMinter[account];
    }

    function renounceMinter() external {
        delete _isMinter[msg.sender];
    }

    function cap() external view returns (uint256) {
        return balanceOf(address(this));
    }

    function decimals() public view virtual override returns (uint8) {
        return 16;
    }

    receive() external payable {}
}
