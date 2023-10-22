export type ApiPlayerDetails = Awaited<ReturnType<typeof useApiPlayer>>;

export default async function useApiPlayer(playerId: string) {
  const { data, error } = await useFetch(`/api/v1/players/${playerId}`);
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value;
}
