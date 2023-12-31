import type { ApiPlayerData } from "~/utils/types";

export default async function useApiPlayer(playerId: string) {
  const { data, error } = await useFetch(`/api/v1/players/${playerId}`);
  if (error.value) throw createError({ ...error.value });
  if (!data.value) throw createError("获取数据失败");
  return data.value as unknown as ApiPlayerData;
}
