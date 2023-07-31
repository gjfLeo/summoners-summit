import type { Deck, Tournament } from "~/server/data/utils/types";

export default async function useApiData<RetT>(route: Parameters<typeof useFetch>[0]): Promise<RetT> {
  const dataKey = route as string;
  const { data: cachedData } = useNuxtData<RetT>(dataKey);
  console.log(`cached data: [${dataKey}]`);
  console.log(JSON.stringify(cachedData.value));
  if (cachedData.value) {
    return cachedData.value;
  }
  else {
    const { data: fetchedData } = await useFetch<RetT>(route, { key: dataKey });
    console.log("use fetched data: ", JSON.stringify(fetchedData.value));
    return fetchedData.value as RetT;
  }
}

export function useApiTournamentList() {
  return useApiData<{ tournamentList: Tournament[] }>("/api/tournament/list");
}

export function useApiDeck(deckId: string) {
  return useApiData<{ deck: Deck }>(`/api/deck/${deckId}`);
}
