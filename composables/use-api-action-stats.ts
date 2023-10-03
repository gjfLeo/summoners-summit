export async function useApiActionStats(gameVersion?: string) {
  const query = { gameVersion };
  const { data, error } = await useFetch("/api/v1/action-stats", { query });
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value;
}
