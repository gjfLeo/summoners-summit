interface ApiMatchListOptions {
  gameVersion?: string;
  playerId?: string;
}

export default async function useApiMatchList(options?: ApiMatchListOptions) {
  const query = {
    gameVersion: options?.gameVersion === "all" ? undefined : options?.gameVersion,
    playerId: options?.playerId,
    limit: 0,
  };

  const { data } = await useFetch("/api/v1/matches", { query });
  if (!data.value) throw createError("获取数据失败");
  const { matchList } = data.value;

  return { matchList };
}
