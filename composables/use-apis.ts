import type { Game, GameDetail, GameId, GetGameListParams, Match, MatchId, Tournament, TournamentDetailBrief, TournamentId } from "~/types";

export async function useApiGetTournamentList() {
  const { data, refresh } = await useFetch("/api/v3/tournaments/list");
  return {
    tournaments: computed<TournamentDetailBrief[]>(() => data.value?.tournaments ?? []),
    refresh,
  };
}

export async function useApiGetTournament(query: { id: TournamentId }) {
  const { data, refresh } = await useFetch("/api/v3/tournaments/get", { query });
  return {
    tournament: computed<Tournament | undefined>(() => data.value?.tournament),
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
