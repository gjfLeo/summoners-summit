import type { InternalApi } from "nitropack";

export default async function useApiData<RetT>(route: Exclude<keyof InternalApi, `/_${string}` | `/api/_${string}`>): Promise<RetT> {
  const { data: cachedData } = useNuxtData<RetT>(route);
  if (cachedData.value) {
    console.log("data from cache");
    return cachedData.value;
  }
  else {
    const { data: fetchedData } = await useFetch<RetT>(route, { key: route });
    console.log("data from fetch");
    return fetchedData.value as RetT;
  }
}
