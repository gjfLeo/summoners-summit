import type { ApiDeckSimilarData } from "~/utils/types";

export default async function useApiDeckSimilar(deckId: string) {
  const { data, error } = await useFetch(`/api/v1/decks/${deckId}/similar`);
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as unknown as ApiDeckSimilarData;
}
