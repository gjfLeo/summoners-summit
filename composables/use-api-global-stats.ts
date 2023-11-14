import type { ApiGlobalStatsMapData } from "~/utils/types";

export default async function useApiGlobelStats() {
  const { data } = await useFetch("/api/v1/global-stats");
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiGlobalStatsMapData;
}
