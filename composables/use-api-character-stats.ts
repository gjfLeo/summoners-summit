interface Option {
  gameVersion?: string;
  preferredGameVersion?: string;
}

export async function useApiCharacterStats(options?: Option) {
  const { gameVersion, preferredGameVersion } = options ?? {};
  const query = { gameVersion, preferredGameVersion };
  const { data, error } = await useFetch("/api/v1/character-stats", { query });
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value;
}
