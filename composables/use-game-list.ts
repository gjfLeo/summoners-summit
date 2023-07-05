import { gameList } from "~/data";
import type { Game } from "~/utils/types";

interface UseGameListOptions {
  gameVersion?: string;
  teamId?: string;
  opponentTeamId?: string;
}

export default function useGameList(options?: UseGameListOptions) {
  const games = computed<Game[]>(() => {
    const gameVersion = unref(options?.gameVersion);
    const teamId = unref(options?.teamId);
    const opponentTeamId = unref(options?.opponentTeamId);

    let list = gameList;
    if (gameVersion) {
      list = list.filter(game => game.gameVersion === gameVersion);
    }
    list = list.flatMap(game => [game, invertGame(game)]);
    if (teamId) {
      list = list.filter(game => getTeamId(game.playerACharacters) === teamId);
    }
    if (opponentTeamId) {
      list = list.filter(game => getTeamId(game.playerBCharacters) === opponentTeamId);
    }
    return list;
  });

  return { games };
}
