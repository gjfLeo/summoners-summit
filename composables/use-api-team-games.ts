import type { ApiTeamGamesData } from "~/utils/types";

export default async function useApiTeamGames(teamId: string, gameVersion: string) {
  const query = { gameVersion };
  const { data, error } = await useFetch(`/api/v1/teams/${teamId}/games`, { query });
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiTeamGamesData;
}
