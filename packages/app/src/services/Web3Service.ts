import { BigNumber, ethers, Signer } from "ethers";
import Web3Modal from "web3modal";
import Moralis from "moralis";
import Axios from "axios";
import { TokenInfo } from "../interfaces/Nft";
import { AllTokens } from "../interfaces/AllTokens";
import { FTokenInfo } from "../interfaces/FTokenInfo";
import { Chain } from "../interfaces/service/chain";
import { CurveABI, DaiABI, BzzABI, Settings, BondingCurve, MockDAI, Bzz } from "@swarm/contracts-typechain";
import { Utils } from "../utils/Utils";

export class BzzWeb3Service {
  _provider: ethers.providers.Web3Provider;
  _curve: BondingCurve;
  _dai: MockDAI;
  _bzz: Bzz;
  _signer: ethers.providers.JsonRpcSigner;

  constructor() {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    this._signer = provider.getSigner();
  }
  async connectWallet() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    this._provider = new ethers.providers.Web3Provider(connection);

    this._signer = this._provider.getSigner();
    this._curve = new ethers.Contract(
      Settings.contracts.curve.toLowerCase(),
      CurveABI.abi,
      this._signer
    ) as BondingCurve;
    this._dai = new ethers.Contract(Settings.contracts.dai.toLowerCase(), DaiABI.abi, this._signer) as MockDAI;
    this._bzz = new ethers.Contract(Settings.contracts.bzz.toLowerCase(), BzzABI.abi, this._signer) as Bzz;
  }

  async getBzz(daiAmount: BigNumber) {
    try {
      const signer = this._provider.getSigner();
      const buyAmount = await this._curve.connect(signer).buyBzz(daiAmount);
      return buyAmount;
    } catch (error) {
      Utils.handlingError(error);
    }
  }

  async redeemBZZ(bzzAmount: BigNumber) {
    try {
      const signer = this._provider.getSigner();
      const reward = await this._curve.connect(signer).sellReward(bzzAmount);
      return reward;
    } catch (error) {
      Utils.handlingError(error);
    }
  }

  async burnBZZToken(bzzAmount: BigNumber) {
    try {
      const signer = this._provider.getSigner();
      await this._curve.connect(signer).burnBzz(bzzAmount);
    } catch (error) {
      Utils.handlingError(error);
    }
  }

  async getBZZTotalSupply() {
    try {
      const signer = this._provider.getSigner();
      return await this._bzz.connect(signer).totalSupply();
    } catch (error) {
      Utils.handlingError(error);
    }
  }
}
