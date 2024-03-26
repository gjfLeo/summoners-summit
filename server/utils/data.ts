import path from "node:path";
import fse from "fs-extra";
import fg from "fast-glob";

export function readData<R, P extends string = string>(dataPath: P): R | undefined {
  const fullPath = path.resolve("server/data", `${dataPath}.json`);
  if (!fse.existsSync(fullPath)) {
    return undefined;
  }
  return fse.readJsonSync(fullPath) as R;
}

export function readDataList<R, P extends string = string>(dataPath: P): R[] {
  const fullPath = path.resolve("server/data", `${dataPath}/*.json`);
  return fg.sync(fullPath)
    .map((file) => {
      return fse.readJsonSync(file) as R;
    });
}

export function writeData<R, P extends string = string>(dataPath: P, data: R): void {
  const fullPath = path.resolve("server/data", `${dataPath}.json`);
  fse.writeJsonSync(fullPath, data);
}
