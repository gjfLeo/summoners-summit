import type { ZodType } from "zod";

interface RecordStorage<K extends string, V> {
  get: (key: K) => Promise<V> | undefined;
  getList: (keys?: Iterable<K>) => Promise<V[]>;
  getRecord: (keys?: Iterable<K>) => Promise<Record<K, V>>;
  clearCache: (keys?: Iterable<K>) => Promise<void>;
}

const groupCharacters = "0123456789abcdefghijklmnopqrstuvwxyz" as const;

export function defineRecordStorage<K extends string, V>(
  path: string,
  zodType: ZodType<V>,
): RecordStorage<K, V> {
  type Params = [{ group: string; shouldInvalidateCache?: boolean }];
  const getCachedRecord = defineCachedFunction<Promise<Record<K, V>>, Params>(
    async ({ group }): Promise<Record<K, V>> => {
      // const time = Date.now();
      const storage = useStorage(`assets:data:${path}`);
      const keys = await storage.getKeys();
      const groupKeys = keys.filter(key => key.startsWith(group));
      const record: Partial<Record<K, V>> = {};
      await runParallel(
        new Set(groupKeys),
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
      // console.log(`[Storage] ${path}:${group} loaded: ${groupKeys.length} keys in ${Date.now() - time}ms`);
      return Object.fromEntries(
        Object.entries(record).sort((a, b) => a[0].localeCompare(b[0])),
      ) as Record<K, V>;
    },
    {
      maxAge: 60 * 60 * 24 * 365,
      group: "storage",
      name: path,
      getKey: ({ group }) => group,
      shouldInvalidateCache: ({ shouldInvalidateCache = false }) => shouldInvalidateCache,
    },
  );
  async function get(key: K) {
    const cache = await getCachedRecord({ group: key.at(0)! });
    return cache[key];
  }
  async function getCacheFromKeys(keys: K[]) {
    const groupKeys = keys.length > 0
      ? [...new Set(keys.filter(Boolean).map(key => key.at(0)!))].join("")
      : groupCharacters;
    const cache: Partial<Record<K, V>> = {};
    for (const group of groupKeys) {
      Object.assign(cache, await getCachedRecord({ group }));
    }
    return cache;
  }
  async function getList(keys?: Iterable<K>) {
    const keysArray = Array.from(keys ?? []);
    const cache = await getCacheFromKeys(keysArray);
    return keysArray.length > 0
      ? keysArray.map<V>(k => cache[k]!)
      : Object.values(cache) as V[];
  }
  async function getRecord(keys?: Iterable<K>) {
    const keysArray = Array.from(keys ?? []);
    const cache = await getCacheFromKeys(keysArray);
    return keysArray.length > 0
      ? Object.fromEntries<V>(keysArray.map(key => [key, cache[key]!])) as Record<K, V>
      : cache as Record<K, V>;
  }
  async function clearCache(keys?: Iterable<K>) {
    const keysArray = Array.from(keys ?? []);
    const groupKeys = keysArray.length > 0
      ? [...new Set(keysArray.filter(Boolean).map(key => key.at(0)!))].join("")
      : groupCharacters;
    for (const group of groupKeys) {
      await getCachedRecord({ group, shouldInvalidateCache: true });
    }
  }
  return {
    get,
    getList,
    getRecord,
    clearCache,
  };
}
