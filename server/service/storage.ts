import type { ZodType } from "zod";

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
      maxAge: import.meta.dev ? 2 : Infinity,
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
