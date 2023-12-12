import type { ApiPlayerMatchesData } from "~/utils/types";

export default async function useApiPlayerMatches(playerId: string) {
  const { data, error } = await useFetch(`/api/v1/players/${playerId}/matches`);
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as unknown as ApiPlayerMatchesData;
}
