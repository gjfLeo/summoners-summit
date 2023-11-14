import type { ApiGameListData, CharacterCard } from "~/utils/types";

interface ApiGameListOptions {
  gameVersion?: string;
  playerId?: string;
  matchId?: string;
  deckId?: string;
  characters?: CharacterCard[];
  opponentCharacters?: CharacterCard[];
  mirror?: boolean;
}

function getMirrorParam(mirror?: boolean) {
  if (mirror === true) return "1";
  if (mirror === false) return "0";
}

export default async function useApiGameList(options?: ApiGameListOptions) {
  const query = {
    gameVersion: options?.gameVersion === "all" ? undefined : options?.gameVersion,
    playerId: options?.playerId,
    deckId: options?.deckId,
    matchId: options?.matchId,
    characters: options?.characters?.join(","),
    opponentCharacters: options?.opponentCharacters?.join(","),
    mirror: getMirrorParam(options?.mirror),
    limit: 0,
  };

  const { data } = await useFetch("/api/v1/games", { query });
  if (!data.value) throw createError("获取数据失败");
  return data.value as ApiGameListData;
}
