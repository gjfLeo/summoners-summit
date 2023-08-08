import type { CharacterCard } from "~/utils/types";

interface UseGameListOptions {
  gameVersion?: MaybeRef<string>;
  matchId?: MaybeRef<string>;
  deckId?: MaybeRef<string>;
  characters?: CharacterCard[];
  opponentCharacters?: CharacterCard[];
  mirror?: boolean;
}

function getMirrorParam(mirror?: boolean) {
  if (mirror === true) return "1";
  if (mirror === false) return "0";
}

export default async function useGameList(options?: UseGameListOptions) {
  const gameVersion = unref(options?.gameVersion);
  const matchId = unref(options?.matchId);
  const deckId = unref(options?.deckId);

  const query = {
    gameVersion: gameVersion === "all" ? undefined : options?.gameVersion,
    deckId,
    matchId,
    characters: options?.characters?.join(","),
    opponentCharacters: options?.opponentCharacters?.join(","),
    mirror: getMirrorParam(options?.mirror),
  };

  const { data } = await useFetch("/api/v1/games", { query });
  if (!data.value) throw createError("获取数据失败");
  const { gameList } = data.value;

  return { gameList };
}
