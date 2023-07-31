import type { InternalApi } from "nitropack";
import type { Tournament } from "server/data/utils/types";

export default async function useApiData<RetT>(route: Exclude<keyof InternalApi, `/_${string}` | `/api/_${string}`>): Promise<RetT> {
  const { data: cachedData } = useNuxtData<RetT>(route);
  if (cachedData.value) {
    // console.log("use cached data: ", JSON.stringify(cachedData.value));
    return cachedData.value;
  }
  else {
    const { data: fetchedData } = await useFetch<RetT>(route, { key: route });
    // console.log("use fetched data: ", JSON.stringify(fetchedData.value));
    return fetchedData.value as RetT;
  }
}

export function useApiTournamentList() {
  return useApiData<{ tournamentList: Tournament[] }>("/api/tournament/list");
}
