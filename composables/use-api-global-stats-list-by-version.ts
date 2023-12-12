import type { ApiGlobalStatsListByVersionData } from "~/utils/types";

export default async function useApiGlobelStatsListByVersion() {
  const { data } = await useFetch("/api/v1/global-stats");
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiGlobalStatsListByVersionData;
}
