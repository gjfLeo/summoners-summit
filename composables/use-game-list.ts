import Qs from "qs";
import type { CharacterCard } from "~/utils/types";

interface UseGameListOptions {
  gameVersion?: string;
  deckId?: string;
  characters?: CharacterCard[];
  opponentCharacters?: CharacterCard[];
  mirror?: boolean;
}

function getMirrorParam(mirror?: boolean) {
  if (mirror === true) return "1";
  if (mirror === false) return "0";
}

export default async function useGameList(options?: UseGameListOptions) {
  const qs = Qs.stringify({
    gameVersion: options?.gameVersion === "all" ? undefined : options?.gameVersion,
    deckId: options?.deckId,
    characters: options?.characters?.join(","),
    opponentCharacters: options?.opponentCharacters?.join(","),
    mirror: getMirrorParam(options?.mirror),
  });

  const { data } = await useFetch(`/api/games?${qs}`);
  if (!data.value) throw createError("获取数据失败");
  const { gameList } = data.value;

  return { gameList };
}
