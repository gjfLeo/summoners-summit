import type { ApiTournamentDetailsData } from "~/utils/types";

export default async function useApiTournamentDetails(tournamentId: string) {
  const { data, error } = await useFetch(`/api/v1/tournaments/${tournamentId}/details`);
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as unknown as ApiTournamentDetailsData;
}
