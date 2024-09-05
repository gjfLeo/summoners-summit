import path from "node:path";
import fs from "node:fs";
import fse from "fs-extra";

const dataCache: Record<string, unknown> = {};

export function readData<R, P extends string = string>(dataPath: P): R | undefined;
export function readData<R, P extends string = string>(dataPath: P, defaultData: R): R;
export function readData<R, P extends string = string>(dataPath: P, defaultData?: R): R | undefined {
  if (dataPath.startsWith("/")) {
    console.warn("Data path should not start with a slash. It will be treated as relative to the server/data directory.");
  }
  if (dataPath.endsWith(".json")) {
    console.warn("Data path should not end with a .json extension. It will be added automatically.");
  }
  if (dataPath in dataCache) {
    // if (dataPath === "tournaments/fb3439ba20a91434") console.log("cache hit", dataCache[dataPath].name);
    return dataCache[dataPath] as R;
  }

  let data = defaultData;
  const filePath = path.resolve("server/data", `${dataPath}.json`);
  if (fse.existsSync(filePath)) {
    data = fse.readJsonSync(filePath) as R;
  }
  dataCache[dataPath] = data;
  // if (dataPath === "tournaments/fb3439ba20a91434") console.log("cache miss", dataCache[dataPath].name);
  return data;
}

export function readDataList<R, P extends string = string>(dataPath: P): R[] {
  const dirPath = path.resolve("server/data", `${dataPath}`);
  return fs.readdirSync(dirPath, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.endsWith(".json"))
    .filter(file => !file.name.startsWith("_"))
    .map((file) => {
      const fileName = path.parse(file.name).name;
      return readData<R>(path.join(dataPath, fileName)) as R;
    });
}

export function writeData<R, P extends string = string>(dataPath: P, data: R): void {
  if (dataPath.startsWith("/")) {
    console.warn("Data path should not start with a slash. It will be treated as relative to the server/data directory.");
  }
  if (dataPath.endsWith(".json")) {
    console.warn("Data path should not end with a .json extension. It will be added automatically.");
  }
  if (dataPath in dataCache) {
    delete dataCache[dataPath];
  }
  const fullPath = path.resolve("server/data", `${dataPath}.json`);
  fse.ensureDirSync(path.dirname(fullPath));
  fse.writeJsonSync(fullPath, data, { spaces: 2 });
}

export function deleteData<P extends string = string>(dataPath: P): void {
  if (dataPath.startsWith("/")) {
    console.warn("Data path should not start with a slash. It will be treated as relative to the server/data directory.");
  }
  if (dataPath.endsWith(".json")) {
    console.warn("Data path should not end with a .json extension. It will be added automatically.");
  }
  if (dataPath in dataCache) {
    delete dataCache[dataPath];
  }
  const fullPath = path.resolve("server/data", `${dataPath}.json`);
  fse.removeSync(fullPath);
}
