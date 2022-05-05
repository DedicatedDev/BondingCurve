//import * as fs from "fs";
export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// export const saveDeployedAddress = (connectionUrl: string, address: string) => {
//   fs.appendFileSync("./.env", `APP_ADDRESS=${address}`);
//   const settingInfo = {
//     contractAddress: address,
//     jsonRpcUrl: connectionUrl,
//   };
//   const json = JSON.stringify(settingInfo);
//   fs.writeFileSync("../web-sdk-ethers/src/settings.json", json, "utf-8");
// };

export function getEnumKeyByEnumValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string
): keyof T | null {
  let keys = Object.keys(myEnum).filter((x) => myEnum[x] === enumValue);
  return keys.length > 0 ? keys[0] : null;
}

export const Utils = {
  randomColor: () => {
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  },
  handlingError: (error: any) => {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      throw Error("Unexpected Error!");
    }
  },
};
