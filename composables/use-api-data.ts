export default async function useApiData<R>(route: string) {
  const { data: cachedData } = useNuxtData(route);
  if (cachedData) {
    return cachedData;
  }
  const { data: fetchedData } = await useFetch<R>(`/api${route}`, { key: route });
  return fetchedData;
}
