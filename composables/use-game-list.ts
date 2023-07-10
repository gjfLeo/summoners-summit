import { gameList } from "~/data";
import type { CharacterCard, Game } from "~/utils/types";

interface UseGameListOptions {
  gameVersion?: MaybeRef<string>;
  teamId?: MaybeRef<string>;
  opponentTeamId?: MaybeRef<string>;
  characters?: MaybeRef<CharacterCard[]>;
  mirror?: MaybeRef<boolean>;
}

export default function useGameList(options?: UseGameListOptions) {
  const games = computed<Game[]>(() => {
    const gameVersion = unref(options?.gameVersion);
    const teamId = unref(options?.teamId);
    const opponentTeamId = unref(options?.opponentTeamId);
    const characters = unref(options?.characters);
    const mirror = unref(options?.mirror) ?? true;

    let list = gameList;
    if (gameVersion) {
      list = list.filter(game => game.gameVersion === gameVersion);
    }
    if (mirror) {
      list = list.flatMap(game => [game, invertGame(game)]);
    }
    if (teamId) {
      list = list.filter(game => getTeamId(game.playerACharacters) === teamId);
    }
    if (opponentTeamId) {
      list = list.filter(game => getTeamId(game.playerBCharacters) === opponentTeamId);
    }
    if (characters) {
      list = list.filter(game => characters.every(ch => game.playerACharacters.includes(ch)));
    }
    return list;
  });

  return { games };
}
