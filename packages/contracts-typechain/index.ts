export * from "./typechain";
import BondingCurveABIJson from "./abi/contracts/BondingCurve.sol/BondingCurve.json";
export const CurveABI = BondingCurveABIJson;
import DaiABIJson from "./abi/contracts/MockDAI.sol/MockDAI.json";
export const DaiABI = DaiABIJson;
import BzzABIJson from "./abi/contracts/Bzz.sol/Bzz.json";
export const BzzABI = BzzABIJson;

import * as contractSettings from "./settings/settings.json";
export const Settings = contractSettings;
