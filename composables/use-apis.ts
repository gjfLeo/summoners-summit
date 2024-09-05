import type { Game, GameDetail, GameId, GameVersionId, GetActionCardStatsParams, GetDeckListParams, GetGameListParams, GetPlayerStatsRecordParams, GetTeamDecksParams, GetTeamStatsByVersionParams, Match, MatchId, PlayerId, Tournament, TournamentDetailBrief, TournamentId } from "~/types";

export async function useApiGetTournamentList() {
  const { data, refresh } = await useFetch("/api/v3/tournaments/list", {
    key: "tournamentList",
  });
  return {
    tournaments: computed<TournamentDetailBrief[]>(() => data.value?.tournaments ?? []),
    refresh,
  };
}

export async function useApiGetTournament(query: { id: TournamentId }) {
  const { data, refresh } = await useFetch("/api/v3/tournaments/get", { query });
  return {
    tournament: computed<Tournament>(() => data.value?.tournament as Tournament),
    matches: computed<Record<MatchId, Match>>(() => data.value?.matches ?? {}),
    games: computed<Record<GameId, Game>>(() => data.value?.games ?? {}),
    refresh,
  };
}

export async function useApiGetGameList(params: GetGameListParams) {
  const { data, refresh } = await useFetch("/api/v3/games/list", { params });
  return {
    games: computed<GameDetail[]>(() => data.value?.games ?? []),
    refresh,
  };
}

export async function useApiGetTeamStatsRecords(query: { gameVersion: GameVersionId }) {
  const { data } = await useFetch("/api/v3/teams/stats", { query });
  return {
    teamStatsRecords: computed(() => data.value?.teamStatsRecords ?? {}),
  };
}

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

export async function useApiGetActionCardStats(query: GetActionCardStatsParams) {
  const { data } = await useFetch("/api/v3/cards/getActionCardStats", { query });
  return {
    actionCardStats: computed(() => data.value?.actionCardStats ?? []),
    numGameDecks: computed(() => data.value?.numGameDecks ?? 0),
  };
}

export async function useApiGetTeamDecks(query: GetTeamDecksParams) {
  const { data } = await useFetch("/api/v3/teams/getDecks", { query });
  return {
    decks: computed(() => data.value?.decks ?? []),
  };
}

export async function useApiGetTeamStatsByVersion(query: GetTeamStatsByVersionParams) {
  const { data } = await useFetch("/api/v3/teams/getStatsByVersion", { query });
  return {
    statsByVersion: computed(() => data.value?.statsByVersion ?? []),
  };
}

export async function useApiGetPlayerStatsRecord(query: GetPlayerStatsRecordParams) {
  const { data } = await useFetch("/api/v3/players/getStatsRecord", { query });
  return {
    playerStatsRecord: computed(() => data.value?.playerStatsRecord ?? {}),
  };
}

export async function useApiGetPlayerDetail(playerId: PlayerId) {
  const { data } = await useFetch(`/api/v3/players/${playerId}/details`);
  return {
    player: computed(() => data.value?.player),
  };
}

export async function useApiGetPlayerStatsByVersion(playerId: PlayerId) {
  const { data } = await useFetch(`/api/v3/players/${playerId}/statsByVersion`);
  return {
    statsByVersion: computed(() => data.value?.success ? data.value.statsByVersion : []),
  };
}

export async function useApiGetPlayerMatches(playerId: PlayerId) {
  const { data } = await useFetch(`/api/v3/players/${playerId}/matches`);
  return {
    matchList: computed(() => data.value?.success ? data.value.matchList : []),
    games: computed(() => data.value?.success ? data.value.games : {}),
  };
}

export async function useApiGetOverviewStats() {
  const { data } = await useFetch("/api/v3/overview");
  return {
    overview: computed(() => data.value?.success ? data.value.overview : []),
  };
}

export async function useApiGetDeckList(query?: GetDeckListParams) {
  const { data } = await useFetch("/api/v3/decks", { query });
  return {
    deckList: computed(() => data.value?.success ? data.value.deckList : []),
  };
}
