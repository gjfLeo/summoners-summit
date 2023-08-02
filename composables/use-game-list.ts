import Qs from "qs";

interface UseGameListOptions {
  deckId?: string;
  mirror?: boolean;
}

export default async function useGameList(options?: UseGameListOptions) {
  const qs = Qs.stringify({
    deckId: options?.deckId,
    mirror: options?.mirror ? "1" : undefined,
  });

  const { data } = await useFetch(`/api/games?${qs}`);
  if (!data.value) throw createError("获取数据失败");
  const { gameList } = data.value;

  return { gameList };
}
