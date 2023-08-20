export function groupBy<T, K extends string | number | symbol>(array: T[], keyExtractor: (item: T) => K): Record<K, T[]> {
  return array.reduce<Record<K, T[]>>(
    (map, item) => {
      const key = keyExtractor(item);
      const subArray: T[] = map[key] ?? (map[key] = []);
      subArray.push(item);
      return map;
    },
    {} as Record<K, T[]>,
  );
}
