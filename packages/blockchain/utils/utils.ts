import { appendFileSync, existsSync, mkdirSync, writeFileSync} from "fs";

export const saveDeployedAddress = async (obj:Object) => {

  const settingsPath = "../contracts-typechain/settings";
  if (!existsSync(settingsPath)) {
     mkdirSync(settingsPath,{recursive: true});
  } 
  const json = JSON.stringify(obj);
  writeFileSync(`${settingsPath}/settings.json`, json, "utf-8");
};
