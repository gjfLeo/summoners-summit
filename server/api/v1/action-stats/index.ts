import type { ApiActionStatsMapData, ApiActionStatsValue, R } from "~/utils/types";
import { deckById, gameById } from "~/server/data";

const initActionStats = (): ApiActionStatsValue => ({ game: 0, pick: 0, winGame: 0, winPick: 0 });

export default defineEventHandler<R & ApiActionStatsMapData>((event) => {
  const { gameVersion, preferredGameVersion, sort } = getQuery(event);

  let gameList = Object.values(gameById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  let actionStatsMap: Record<string, ApiActionStatsValue> = {};
  let totalGame = 0;
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      const deckId = game[`player${player}DeckId`];
      const weight = (preferredGameVersion && preferredGameVersion !== game.gameVersion) ? 0.1 : 1;
      if (deckId) {
        totalGame += weight;
        for (const [card, count] of Object.entries(deckById[deckId].actionCards)) {
          const actionStats = actionStatsMap[card] ?? (actionStatsMap[card] = initActionStats());
          actionStats.game += 1 * weight;
          actionStats.pick += count * weight;
          if (game.winner === player) {
            actionStats.winGame += 1 * weight;
            actionStats.winPick += count * weight;
          }
        }
      }
    }
  }
  if (sort) {
    actionStatsMap = Object.fromEntries(Object.entries(actionStatsMap).sort((a, b) => b[1].pick - a[1].pick));
  }

  return { statusCode: 200, actionStatsMap, totalGame };
});
