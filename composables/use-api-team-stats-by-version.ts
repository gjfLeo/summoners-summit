import type { ApiTeamStatsByVersionData } from "~/utils/types";

export default async function useApiTeamStatsByVersion(teamId: string) {
  const { data, error } = await useFetch(`/api/v1/teams/${teamId}/stats-by-version`);
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiTeamStatsByVersionData;
}
