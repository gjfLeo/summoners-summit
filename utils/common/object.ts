export function sortObject<K extends string | number | symbol, V>(object: Partial<Record<K, V>>, sorter: (k1: K, k2: K) => number) {
  const backup = Object.assign({}, object);
  Object.keys(object).forEach(k => delete object[<K>k]);

  (<[K, V][]>Object.entries(backup))
    .sort(([k1], [k2]) => sorter(k1, k2))
    .forEach(([k, v]) => object[k] = v);
}
