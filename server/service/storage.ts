import type { ZodType } from "zod/v4";
import { runParallel } from "../utils/parallel";

export function defineGetRecordStorage<K extends string, V>(
  path: string,
  zodType: ZodType<V>,
): () => Promise<Record<K, V>> {
  return defineCachedFunction(
    async (): Promise<Record<K, V>> => {
      const storage = useStorage(`assets:data:${path}`);
      const keys = await storage.getKeys();
      const record: Partial<Record<K, V>> = {};
      await runParallel(
        new Set(keys),
        async (key) => {
          const item = await storage.getItem(key);
          const id = key.split(".")[0] as K;
          record[id] = zodType.parse(item);
        },
        { concurrency: 10 },
      );
      return record as Record<K, V>;
    },
    {
      maxAge: import.meta.dev ? 1 : Infinity,
      group: "storage",
      name: path,
    },
  );
}

export function defineGetMiscStorage<T>(
  path: string,
  zodType: ZodType<T>,
): () => Promise<T> {
  return defineCachedFunction(
    async (): Promise<T> => {
      const storage = await useStorage("assets:data").getItem(`misc:${path}.json`);
      return zodType.parse(storage);
    },
    {
      maxAge: import.meta.dev ? 1 : Infinity,
      group: "storage",
      name: path,
    },
  );
}
