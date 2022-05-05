// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { Settings } from "@swarm/contracts-typechain";
import { ethers } from "hardhat";
import { pre_mint_sequence, tokenSettings } from "../test/settings";

import { saveDeployedAddress } from "../utils/utils";
//

async function main() {
  const accounts = await ethers.getSigners()

  //DAI token contract deploy
  const mockDaiFactory = await ethers.getContractFactory("MockDAI");
  const dai = await mockDaiFactory.deploy();
  await dai.deployed();

  //BZZ token contract deploy
  const bzzFactory = await ethers.getContractFactory("Bzz");
  const bzz = await bzzFactory.deploy(tokenSettings.bzz.cap);
  await bzz.deployed();

  //curve contract deploy
  const curveFactory = await ethers.getContractFactory("BondingCurve");
  const curve = await curveFactory.deploy(bzz.address, dai.address);
  await curve.deployed();
  await bzz.addMinter(curve.address);
  await bzz.mint(curve.address, pre_mint_sequence.whole);
   //get dai token
   let requiredCollateral = await curve.requiredCollateral(
    pre_mint_sequence.whole
  );
  await dai.mint(accounts[0].address, requiredCollateral);
  await dai.connect(accounts[0]).approve(curve.address, requiredCollateral);
  await curve.connect(accounts[0]).init();


  const setting = {
    contracts: {
      initial_supply: pre_mint_sequence.whole.toString(),
      dai: dai.address,
      bzz: bzz.address,
      curve: curve.address,
      dai_live: "0x6b175474e89094c44da98b954eedeac495271d0f",
      bzz_live: "0x19062190b1925b5b6689d7073fdfc8c2976ef8cb",
      curve_live: "0x4F32Ab778e85C4aD0CEad54f8f82F5Ee74d46904",
    },
  };

  await saveDeployedAddress(setting);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
