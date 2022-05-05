import {
  Settings,
  CurveABI,
  IBZZ,
  IBZZ__factory,
} from "@swarm/contracts-typechain";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract, ContractFactory } from "ethers";
import { pre_mint_sequence, test_settings, tokenSettings } from "./settings";
import { expect } from "chai";

describe("Curve", () => {
  let bzzFactory: ContractFactory;
  let bzz: Contract;

  let mockDaiFactory: ContractFactory;
  let dai: Contract;

  let curveFactory: ContractFactory;
  let curve: Contract;
  let accounts: SignerWithAddress[];

  let owner: SignerWithAddress,
    investor: SignerWithAddress,
    user: SignerWithAddress,
    user_two: SignerWithAddress;

  before(async () => {
    accounts = await ethers.getSigners();
    owner = accounts[0];
    investor = accounts[1];
    user = accounts[2];
    user_two = accounts[3];

    //DAI token contract deploy
    mockDaiFactory = await ethers.getContractFactory("MockDAI");
    dai = await mockDaiFactory.deploy();
    await dai.deployed();

    //BZZ token contract deploy
    bzzFactory = await ethers.getContractFactory("Bzz");
    bzz = await bzzFactory.deploy(tokenSettings.bzz.cap);
    await bzz.deployed();
    //curve contract deploy
    curveFactory = await ethers.getContractFactory("BondingCurve");
    curve = await curveFactory.deploy(bzz.address, dai.address);
    await curve.deployed();
    await bzz.addMinter(curve.address);
  });

  it("Curve contract init", async () => {
    await bzz.mint(curve.address, pre_mint_sequence.whole);
    await bzz.addMinter(curve.address);

    //get dai token
    let requiredCollateral = await curve.requiredCollateral(
      pre_mint_sequence.whole
    );
    await dai.mint(owner.address, requiredCollateral);
    await dai.connect(owner).approve(curve.address, requiredCollateral);
    await curve.connect(owner).init();
  });

  it("BONUS1:validate these inputs against a curve contract", async () => {

    //buy Bzz token
    const buyPriceBefore = await curve.buyPrice(1000)
    const daiAmount = ethers.utils.parseEther("12");
    await dai.mint(user_two.address, daiAmount);
    dai.connect(user_two).approve(curve.address,daiAmount);
    await expect(curve.connect(user_two).depositDai(daiAmount)).to.emit(curve,"mintTokens");
    const bzzAmount = await bzz.balanceOf(user_two.address);
    console.log(ethers.utils.formatEther(bzzAmount.toString()))
    
    //redeem again
    await curve.connect(user_two).redeem(bzzAmount,0);
    const buyPriceAfter = await curve.buyPrice(1000)
    expect(buyPriceBefore).to.equal(buyPriceAfter)
  });

  it("Pre-mint cost consistent", async () => {
    // Getting the cost of the initial tokens through the mint function
    let buyCost = await curve.mathMint(pre_mint_sequence.whole, 0);
    // Getting the cost of the initial tokens through the init function
    let initialCost = await curve.requiredCollateral(pre_mint_sequence.whole);
    // Getting the primitive function for the initial supply (0)
    let primFuncAtZero = await curve.primitiveFunction(0);
    // Getting the primitive function for the pre-mint supply
    let primFuncAtPreMint = await curve.primitiveFunction(
      pre_mint_sequence.whole
    );
    // Testing expected behaviour
    expect(buyCost.toString()).to.equal(initialCost.toString());
    expect(buyCost.toString()).to.equal(primFuncAtPreMint.toString());
    expect(initialCost.toString()).to.equal(pre_mint_sequence.dai.cost);
    expect(primFuncAtZero.toString()).to.equal("0");
  });

  it("Spot price before init", async () => {
    // Getting the price of one token before the curve has been initialized
    let spotPriceAtStart = await curve.spotPrice(0);
    // Testing expected behaviour
    expect(spotPriceAtStart.toString()).to.not.equal("0");
    expect(spotPriceAtStart.toString()).to.equal("1");
  });

  it("Helper is correct", async () => {
    // Getting the helper
    let helper = await curve.helper(pre_mint_sequence.whole);
    // Testing expected behaviour
    expect(helper.toString()).to.equal(test_settings.helper_value);
  });
  /**
   * Testing that after the curve has pre-minted that the price for each
   * token is expected
   */
  it("Price at start of curve", async () => {
    // Getting the cost of the initial tokens through the mint function
    let buyCost = await curve.mathMint(
      test_settings.bzz.buyAmount,
      pre_mint_sequence.whole
    );
    // Getting the primitive function for the initial supply (0)
    let primFuncAtZero = await curve.primitiveFunction(pre_mint_sequence.whole);
    // Getting the primitive function for the pre-mint supply
    let primFuncAtPreMint = await curve.primitiveFunction(
      test_settings.bzz.supply_at_buy
    );
    // Getting the price for one token at current supply
    let spotPricePostMint = await curve.spotPrice(pre_mint_sequence.whole);
    // Testing expected behaviour
    expect(buyCost.toString()).to.equal(test_settings.dai.buyCost);

    expect(primFuncAtZero.toString()).to.equal(pre_mint_sequence.dai.cost);

    expect(primFuncAtPreMint.toString()).to.equal(
      test_settings.dai.curve_coll_at_prem
    );

    expect(spotPricePostMint.toString()).to.equal(test_settings.dai.one_cost);
  });
  // /**
  //  * Testing that after the curves pre-mint the sell price for each token
  //  * is expected
  //  */
  it("Withdraw reward at start", async () => {
    // Getting the buy cost for 1000 tokens
    let buyCost = await curve.buyPrice(test_settings.bzz.buyAmount);
    // Approving the curve as a spender of collateral
    await dai.connect(user).approve(curve.address, buyCost);
    // Minting the collateral tokens for the user
    await dai.mint(user.address, buyCost);
    // Mints tokens
    await curve.connect(user).mint(test_settings.bzz.buyAmount, buyCost);

    let currentSupply = await bzz.totalSupply();
    // // Getting the cost of the initial tokens through the mint function
    let sellRewardWithdraw = await curve.withdraw(
      test_settings.bzz.buyAmount,
      currentSupply
    );
    // // Testing expected behaviour
    expect(sellRewardWithdraw[0].toString()).to.equal(
      test_settings.dai.buyCost
    );
  });
});
