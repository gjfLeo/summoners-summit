import type { ApiTeamActionCardUsageData, ApiTeamGamesData, ApiTeamStatsByVersionData, ApiTeamStatsData } from "~/utils/types";

async function useApiTeamStatsOld(teamId: string, gameVersion: string) {
  const query = { gameVersion };
  const { data: statsData, error } = await useFetch(`/api/v1/team-stats/${teamId}`, { query });
  if (error.value) throw createError({ ...error.value });
  if (!statsData.value) throw createError("获取数据失败");
  return statsData.value as ApiTeamStatsData;
}

async function useApiTeamStatsByVersion(teamId: string) {
  const { data, error } = await useFetch(`/api/v1/teams/${teamId}/stats-by-version`);
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiTeamStatsByVersionData;
}

async function useApiTeamGames(teamId: string, gameVersion: string) {
  const query = { gameVersion };
  const { data, error } = await useFetch(`/api/v1/teams/${teamId}/games`, { query });
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiTeamGamesData;
}

async function useApiTeamActionCardUsages(teamId: string, gameVersion: string) {
  const query = { gameVersion };
  const { data, error } = await useFetch(`/api/v1/teams/${teamId}/action-card-usages`, { query });
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiTeamActionCardUsageData;
}

export default async function useApiTeamStats(teamId: string, gameVersion: string) {
  try {
    const data = await Promise.all([
      useApiTeamStatsOld(teamId, gameVersion),
      useApiTeamStatsByVersion(teamId),
      useApiTeamGames(teamId, gameVersion),
      useApiTeamActionCardUsages(teamId, gameVersion),
    ]);
    return {
      ...data[0],
      ...data[1],
      ...data[2],
      ...data[3],
    };
  }
  catch (e: any) {
    console.error(e);
    throw new Error("获取数据失败1");
  }
}
