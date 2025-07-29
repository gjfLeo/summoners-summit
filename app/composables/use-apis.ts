export async function useApiGetTeamMatchupStats(query: { gameVersion: GameVersionId }) {
  const { data } = await useFetch("/api/v3/teams/matchup-stats", { query });
  return {
    teams: computed(() => data.value?.teams ?? []),
    matchupStats: computed(() => data.value?.matchupStats ?? []),
  };
}

export async function useApiGetCharacterCardStats(query: { gameVersion: GameVersionId }) {
  const { data } = await useFetch("/api/v3/cards/getCharacterCardStats", { query });
  return {
    characterCardStats: computed(() => data.value?.characterCardStats ?? []),
    numGames: computed(() => data.value?.numGames ?? 0),
    numMatches: computed(() => data.value?.numMatches ?? 0),
  };
}
