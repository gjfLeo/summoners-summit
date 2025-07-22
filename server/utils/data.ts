import fs from "node:fs";
import path from "node:path";
import fse from "fs-extra";

/** @deprecated */
const dataCache: Record<string, unknown> = {};

/** @deprecated */
export function readData<R, P extends string = string>(dataPath: P): R | undefined;
/** @deprecated */
export function readData<R, P extends string = string>(dataPath: P, defaultData: R): R;
/** @deprecated */
export function readData<R, P extends string = string>(dataPath: P, defaultData?: R): R | undefined {
  if (dataPath.startsWith("/")) {
    console.warn("Data path should not start with a slash. It will be treated as relative to the server/data directory.");
  }
  if (dataPath.endsWith(".json")) {
    console.warn("Data path should not end with a .json extension. It will be added automatically.");
  }

  if (!import.meta.dev) {
    if (dataPath in dataCache) {
      return dataCache[dataPath] as R;
    }
  }

  let data = defaultData;
  const filePath = path.resolve("server/data", `${dataPath}.json`);
  if (fse.existsSync(filePath)) {
    data = fse.readJsonSync(filePath) as R;
  }

  if (!import.meta.dev) {
    dataCache[dataPath] = data;
  }
  return data;
}

/** @deprecated */
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

/** @deprecated */
export function writeData<R, P extends string = string>(dataPath: P, data: R): void {
  if (dataPath.startsWith("/")) {
    console.warn("Data path should not start with a slash. It will be treated as relative to the server/data directory.");
  }
  if (dataPath.endsWith(".json")) {
    console.warn("Data path should not end with a .json extension. It will be added automatically.");
  }
  if (!import.meta.dev) {
    if (dataPath in dataCache) {
      delete dataCache[dataPath];
    }
  }
  const fullPath = path.resolve("server/data", `${dataPath}.json`);
  fse.ensureDirSync(path.dirname(fullPath));
  fse.writeJsonSync(fullPath, data, { spaces: 2 });
}

/** @deprecated */
export function deleteData<P extends string = string>(dataPath: P): void {
  if (dataPath.startsWith("/")) {
    console.warn("Data path should not start with a slash. It will be treated as relative to the server/data directory.");
  }
  if (dataPath.endsWith(".json")) {
    console.warn("Data path should not end with a .json extension. It will be added automatically.");
  }
  if (!import.meta.dev) {
    if (dataPath in dataCache) {
      delete dataCache[dataPath];
    }
  }
  const fullPath = path.resolve("server/data", `${dataPath}.json`);
  fse.removeSync(fullPath);
}

function useStorageByDataPath(dataPath: string) {
  if (!dataPath.endsWith(".json")) {
    dataPath = `${dataPath}.json`;
  }
  const key = ["assets:data", ...dataPath.split("/")].filter(Boolean).join(":");
  return useStorage(key);
}

export function readDataV2<R>(dataPath: string): Promise<R | undefined>;
export function readDataV2<R>(dataPath: string, defaultData: R): Promise<R>;
export async function readDataV2<R>(dataPath: string, defaultData?: R): Promise<R | undefined> {
  const storage = useStorageByDataPath(dataPath);
  const data = await storage.getItem("");
  return (data as R) ?? defaultData;
}

export async function writeDataV2<R>(dataPath: string, data: R): Promise<void> {
  const storage = useStorageByDataPath(dataPath);
  await storage.setItem("", `${JSON.stringify(data, null, 2)}\n`);
}

export async function deleteDataV2(dataPath: string): Promise<void> {
  const storage = useStorageByDataPath(dataPath);
  await storage.removeItem("");
}
