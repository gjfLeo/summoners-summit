import type { ApiActionStatsMapData } from "~/utils/types";

interface Option {
  gameVersion?: string;
  preferredGameVersion?: string;
}

export async function useApiActionStats(options?: Option) {
  const { gameVersion, preferredGameVersion } = options ?? {};
  const query = { gameVersion, preferredGameVersion };
  const { data, error } = await useFetch("/api/v1/action-stats", { query });
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiActionStatsMapData;
}
