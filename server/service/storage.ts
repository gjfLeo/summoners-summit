import type { ZodType } from "zod/v4";

export function defineGetRecordStorage<K extends string, V>(
  path: string,
  zodType: ZodType<V>,
): () => Promise<Record<K, V>> {
  return defineCachedFunction(
    async (): Promise<Record<K, V>> => {
      console.log(`Reading Storage: ${path}`);
      const storage = useStorage(`assets:data:${path}`);
      const keys = await storage.getKeys();
      return Object.fromEntries(
        await Promise.all(keys.map(async (key) => {
          const item = await storage.getItem(key);
          return [key.replace(/\.json$/, ""), zodType.parse(item)];
        })),
      );
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
      console.log(`Reading Storage: misc:${path}`);
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
