import type { TournamentId } from "~/types/data";

export async function useApiGetTournamentList() {
  const { data, refresh } = await useFetch("/api/v3/tournaments/list");
  return {
    tournaments: computed(() => data.value?.tournaments ?? []),
    refresh,
  };
}

export async function useApiGetTournament(query: { id: TournamentId }) {
  const { data, refresh } = await useFetch("/api/v3/tournaments/get", {
    query,
  });
  return {
    tournament: computed(() => data.value?.tournament),
    refresh,
  };
}
