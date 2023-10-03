import type { R } from "~/utils/types";
import { deckById, gameById } from "~/server/data";

interface ActionStats {
  pick: number;
  winPick: number;
}

interface ActionStatsData {
  actionStatsMap: Record<string, ActionStats>;
  total: number;
}

const initActionStats = (): ActionStats => ({ pick: 0, winPick: 0 });

export default defineEventHandler<R & ActionStatsData>((event) => {
  const { gameVersion } = getQuery(event);

  let gameList = Object.values(gameById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  const actionStatsMap: Record<string, ActionStats> = {};
  let total = 0;
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      const deckId = game[`player${player}DeckId`];
      if (deckId) {
        total++;
        for (const [card, count] of Object.entries(deckById[deckId].actionCards)) {
          const actionStats = actionStatsMap[card] ?? (actionStatsMap[card] = initActionStats());
          actionStats.pick += count;
          if (game.winner === player) actionStats.winPick += count;
        }
      }
    }
  }

  return { statusCode: 200, actionStatsMap, total };
});
