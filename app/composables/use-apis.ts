export async function useApiGetTeamMatchupStats(query: { gameVersion: GameVersionId }) {
  const { data } = await useFetch("/api/v3/teams/matchup-stats", { query });
  return {
    teams: computed(() => data.value?.teams ?? []),
    matchupStats: computed(() => data.value?.matchupStats ?? []),
  };
}
