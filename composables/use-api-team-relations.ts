import type { ApiTeamRelationsData } from "~/utils/types";

export default async function useApiTeamRelations(gameVersion: string) {
  const query = { gameVersion };
  const { data, error } = await useFetch("/api/v1/team-relations", { query });
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiTeamRelationsData;
}
