import Qs from "qs";

interface UseGameListOptions {
  deckId?: string;
}

export default async function useGameList(options?: UseGameListOptions) {
  const deckId = options?.deckId;

  const qs = Qs.stringify({
    deckId,
  });

  const { data } = await useFetch(`/api/games?${qs}`);
  if (!data.value) throw createError("获取数据失败");
  const { gameList } = data.value;

  return { gameList };
}
