/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BondingCurveInterface extends utils.Interface {
  contractName: "BondingCurve";
  functions: {
    "bondedToken()": FunctionFragment;
    "burnBzz(uint256)": FunctionFragment;
    "buyBzz(uint256)": FunctionFragment;
    "buyPrice(uint256)": FunctionFragment;
    "claimDAI(uint256,uint256)": FunctionFragment;
    "collateralToken()": FunctionFragment;
    "depositDai(uint256)": FunctionFragment;
    "helper(uint256)": FunctionFragment;
    "init()": FunctionFragment;
    "isCurveActive()": FunctionFragment;
    "mathMint(uint256,uint256)": FunctionFragment;
    "mint(uint256,uint256)": FunctionFragment;
    "mintTo(uint256,uint256,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "primitiveFunction(uint256)": FunctionFragment;
    "redeem(uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requiredCollateral(uint256)": FunctionFragment;
    "sellReward(uint256)": FunctionFragment;
    "shutDown()": FunctionFragment;
    "spotPrice(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bondedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burnBzz",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyBzz",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimDAI",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositDai",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "helper",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "init", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isCurveActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mathMint",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintTo",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "primitiveFunction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requiredCollateral",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sellReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "shutDown", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "spotPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "bondedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burnBzz", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyBzz", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimDAI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositDai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "helper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isCurveActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mathMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "primitiveFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requiredCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sellReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shutDown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spotPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "burnTokens(address,uint256,uint256,uint256)": EventFragment;
    "mintTokens(address,uint256,uint256,uint256)": EventFragment;
    "mintTokensTo(address,address,uint256,uint256,uint256)": EventFragment;
    "shutDownOccurred(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "burnTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "mintTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "mintTokensTo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "shutDownOccurred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type burnTokensEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    seller: string;
    amount: BigNumber;
    rewardReceived: BigNumber;
    minReward: BigNumber;
  }
>;

export type burnTokensEventFilter = TypedEventFilter<burnTokensEvent>;

export type mintTokensEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    buyer: string;
    amount: BigNumber;
    pricePaid: BigNumber;
    maxSpend: BigNumber;
  }
>;

export type mintTokensEventFilter = TypedEventFilter<mintTokensEvent>;

export type mintTokensToEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  {
    buyer: string;
    receiver: string;
    amount: BigNumber;
    pricePaid: BigNumber;
    maxSpend: BigNumber;
  }
>;

export type mintTokensToEventFilter = TypedEventFilter<mintTokensToEvent>;

export type shutDownOccurredEvent = TypedEvent<[string], { owner: string }>;

export type shutDownOccurredEventFilter =
  TypedEventFilter<shutDownOccurredEvent>;

export interface BondingCurve extends BaseContract {
  contractName: "BondingCurve";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BondingCurveInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bondedToken(overrides?: CallOverrides): Promise<[string]>;

    burnBzz(
      _bzzAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyBzz(
      daiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buyPrice(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { collateralRequired: BigNumber }>;

    claimDAI(
      _amount: BigNumberish,
      _minCollateralReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collateralToken(overrides?: CallOverrides): Promise<[string]>;

    depositDai(
      daiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    helper(_x: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isCurveActive(overrides?: CallOverrides): Promise<[boolean]>;

    mathMint(
      _amount: BigNumberish,
      _currentSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mint(
      _amount: BigNumberish,
      _maxCollateralSpend: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintTo(
      _amount: BigNumberish,
      _maxCollateralSpend: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    primitiveFunction(
      _s: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    redeem(
      _amount: BigNumberish,
      _minCollateralReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requiredCollateral(
      _initialSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    sellReward(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { collateralReward: BigNumber }>;

    shutDown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    spotPrice(
      _supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _amount: BigNumberish,
      _currentSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  bondedToken(overrides?: CallOverrides): Promise<string>;

  burnBzz(
    _bzzAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyBzz(
    daiAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buyPrice(
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimDAI(
    _amount: BigNumberish,
    _minCollateralReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collateralToken(overrides?: CallOverrides): Promise<string>;

  depositDai(
    daiAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  helper(_x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  init(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isCurveActive(overrides?: CallOverrides): Promise<boolean>;

  mathMint(
    _amount: BigNumberish,
    _currentSupply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mint(
    _amount: BigNumberish,
    _maxCollateralSpend: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintTo(
    _amount: BigNumberish,
    _maxCollateralSpend: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  primitiveFunction(
    _s: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  redeem(
    _amount: BigNumberish,
    _minCollateralReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requiredCollateral(
    _initialSupply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  sellReward(
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  shutDown(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  spotPrice(
    _supply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _amount: BigNumberish,
    _currentSupply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    bondedToken(overrides?: CallOverrides): Promise<string>;

    burnBzz(_bzzAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    buyBzz(
      daiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyPrice(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimDAI(
      _amount: BigNumberish,
      _minCollateralReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    collateralToken(overrides?: CallOverrides): Promise<string>;

    depositDai(
      daiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    helper(_x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    init(overrides?: CallOverrides): Promise<void>;

    isCurveActive(overrides?: CallOverrides): Promise<boolean>;

    mathMint(
      _amount: BigNumberish,
      _currentSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      _amount: BigNumberish,
      _maxCollateralSpend: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintTo(
      _amount: BigNumberish,
      _maxCollateralSpend: BigNumberish,
      _to: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    primitiveFunction(
      _s: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeem(
      _amount: BigNumberish,
      _minCollateralReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requiredCollateral(
      _initialSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sellReward(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shutDown(overrides?: CallOverrides): Promise<void>;

    spotPrice(
      _supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _amount: BigNumberish,
      _currentSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "burnTokens(address,uint256,uint256,uint256)"(
      seller?: string | null,
      amount?: null,
      rewardReceived?: null,
      minReward?: null
    ): burnTokensEventFilter;
    burnTokens(
      seller?: string | null,
      amount?: null,
      rewardReceived?: null,
      minReward?: null
    ): burnTokensEventFilter;

    "mintTokens(address,uint256,uint256,uint256)"(
      buyer?: string | null,
      amount?: null,
      pricePaid?: null,
      maxSpend?: null
    ): mintTokensEventFilter;
    mintTokens(
      buyer?: string | null,
      amount?: null,
      pricePaid?: null,
      maxSpend?: null
    ): mintTokensEventFilter;

    "mintTokensTo(address,address,uint256,uint256,uint256)"(
      buyer?: string | null,
      receiver?: string | null,
      amount?: null,
      pricePaid?: null,
      maxSpend?: null
    ): mintTokensToEventFilter;
    mintTokensTo(
      buyer?: string | null,
      receiver?: string | null,
      amount?: null,
      pricePaid?: null,
      maxSpend?: null
    ): mintTokensToEventFilter;

    "shutDownOccurred(address)"(
      owner?: string | null
    ): shutDownOccurredEventFilter;
    shutDownOccurred(owner?: string | null): shutDownOccurredEventFilter;
  };

  estimateGas: {
    bondedToken(overrides?: CallOverrides): Promise<BigNumber>;

    burnBzz(
      _bzzAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyBzz(
      daiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyPrice(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimDAI(
      _amount: BigNumberish,
      _minCollateralReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collateralToken(overrides?: CallOverrides): Promise<BigNumber>;

    depositDai(
      daiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    helper(_x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isCurveActive(overrides?: CallOverrides): Promise<BigNumber>;

    mathMint(
      _amount: BigNumberish,
      _currentSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      _amount: BigNumberish,
      _maxCollateralSpend: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintTo(
      _amount: BigNumberish,
      _maxCollateralSpend: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    primitiveFunction(
      _s: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeem(
      _amount: BigNumberish,
      _minCollateralReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requiredCollateral(
      _initialSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sellReward(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shutDown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    spotPrice(
      _supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      _currentSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bondedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnBzz(
      _bzzAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyBzz(
      daiAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyPrice(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimDAI(
      _amount: BigNumberish,
      _minCollateralReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collateralToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositDai(
      daiAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    helper(
      _x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isCurveActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mathMint(
      _amount: BigNumberish,
      _currentSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      _amount: BigNumberish,
      _maxCollateralSpend: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintTo(
      _amount: BigNumberish,
      _maxCollateralSpend: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    primitiveFunction(
      _s: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeem(
      _amount: BigNumberish,
      _minCollateralReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requiredCollateral(
      _initialSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sellReward(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shutDown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    spotPrice(
      _supply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      _currentSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}