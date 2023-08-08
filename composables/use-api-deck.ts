export default async function useApiDeck(deckId: string) {
  const { data, error } = await useFetch(`/api/v1/decks/${deckId}`);
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value;
}
