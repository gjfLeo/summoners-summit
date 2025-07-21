import type { ZodType } from "zod";

interface RecordStorage<K extends string, V> {
  get: (key: K) => Promise<V> | undefined;
  getList: (keys?: K[]) => Promise<V[]>;
  getRecord: (keys?: K[]) => Promise<Record<K, V>>;
  clearCache: () => Promise<void>;
}

export function defineRecordStorage<K extends string, V>(
  path: string,
  zodType: ZodType<V>,
): RecordStorage<K, V> {
  type Params = [{ shouldInvalidateCache?: boolean }?];
  const getFullRecord = defineCachedFunction<Promise<Record<K, V>>, Params>(
    async (): Promise<Record<K, V>> => {
      const storage = useStorage(`assets:data:${path}`);
      const keys = await storage.getKeys();
      const record: Partial<Record<K, V>> = {};
      await runParallel(
        new Set(keys.filter(key => !key.startsWith("_"))),
        async (key) => {
          const item = await storage.getItem(key);
          const id = key.split(".")[0] as K;
          try {
            record[id] = zodType.parse(item);
          }
          catch (e) {
            console.error(`Failed to parse ${path} ${key}: ${e}`);
          }
        },
        { concurrency: import.meta.dev ? 100 : 10 },
      );
      return Object.fromEntries(
        Object.entries(record)
          .sort((a, b) => a[0].localeCompare(b[0])),
      ) as Record<K, V>;
    },
    {
      maxAge: 0,
      group: "storage",
      name: path,
      getKey: () => "default",
      shouldInvalidateCache: ({ shouldInvalidateCache = false } = {}) => shouldInvalidateCache,
    },
  );
  async function get(key: K) {
    const cache = await getFullRecord();
    return cache[key];
  }
  async function getList(keys?: K[]) {
    const cache = await getFullRecord();
    if (!keys) {
      return Object.values(cache) as V[];
    }
    return keys.map(key => cache[key]);
  }
  async function getRecord(keys?: K[]) {
    const cache = await getFullRecord();
    if (!keys) {
      return cache;
    }
    return Object.fromEntries(keys.map(key => [key, cache[key]])) as Record<K, V>;
  }
  async function clearCache() {
    await getFullRecord({ shouldInvalidateCache: true });
  }
  return {
    get,
    getList,
    getRecord,
    clearCache,
  };
}

/** @deprecated */
export function defineGetRecordStorage<K extends string, V>(
  path: string,
  zodType: ZodType<V>,
): () => Promise<Record<K, V>> {
  return defineCachedFunction(
    async (): Promise<Record<K, V>> => {
      console.log(`Loading storage ${path}`);
      console.time(`Loading storage ${path}`);

      const storage = useStorage(`assets:data:${path}`);
      const keys = await storage.getKeys();
      const record: Partial<Record<K, V>> = {};
      await runParallel(
        new Set(keys.filter(key => !key.startsWith("_"))),
        async (key) => {
          const item = await storage.getItem(key);
          const id = key.split(".")[0] as K;
          try {
            record[id] = zodType.parse(item);
          }
          catch (e) {
            console.error(`Failed to parse ${path} ${key}: ${e}`);
          }
        },
        { concurrency: 10 },
      );

      console.timeEnd(`Loading storage ${path}`);
      console.log(`Loaded storage ${path} with ${Object.keys(record).length} items`);

      return Object.fromEntries(
        Object.entries(record)
          .sort((a, b) => a[0].localeCompare(b[0])),
      ) as Record<K, V>;
    },
    {
      maxAge: import.meta.dev ? 0 : 60 * 60 * 24 * 365,
      group: "storage",
      name: path,
      getKey: () => "default",
      // validate: () => {
      //   if (!import.meta.dev) {
      //     console.log(`Caching storage ${path}`);
      //     return true;
      //   }
      //   else {
      //     console.log("On dev, not caching");
      //     return false;
      //   }
      // },
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
      maxAge: import.meta.dev ? 0 : 60 * 60 * 24 * 365,
      group: "storage",
      name: path,
      getKey: () => "default",
      // validate: () => {
      //   if (!import.meta.dev) {
      //     console.log(`Caching storage ${path}`);
      //     return true;
      //   }
      //   else {
      //     console.log("On dev, not caching");
      //     return false;
      //   }
      // },
    },
  );
}

export async function clearStorageCache(path: string) {
  const storage = useStorage(`cache:storage:${path}`);
  return await storage.clear();
}
