import type { ActionCard, ApiDeckSimilarData, ApiDeckSimilarItem, R } from "~/utils/types";
import { deckById, gameById, playerById } from "~/server/data";
import { getTeamId } from "~/composables/use-team";
import { getGameMirror } from "~/utils/games";
import { actionCardSorter } from "~/utils/cards";
import { sortObject } from "~/utils";

export default defineEventHandler<R & ApiDeckSimilarData>((event) => {
  const deckId = event.context.params!.deckId;
  const deck = deckById[deckId];
  if (!deck) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  const { actionCards, gameVersion } = deck;
  const teamId = getTeamId(deck.characterCards);

  const similarMap: Record<string, ApiDeckSimilarItem> = Object.fromEntries(
    Object.values(deckById)
      .filter(d => d.gameVersion = gameVersion)
      .filter(d => getTeamId(d.characterCards) === teamId)
      .map((d) => {
        const item: ApiDeckSimilarItem = {
          deckId: d.id,
          diffs: Object.assign({}, d.actionCards),
          pick: 0,
          win: 0,
          players: [],
        };
        (<[ActionCard, number][]>Object.entries(actionCards)).forEach(([card, count]) => {
          item.diffs[card] = (item.diffs[card] ?? 0) - count;
          if (item.diffs[card] === 0) {
            delete item.diffs[card];
          }
        });
        sortObject(item.diffs, actionCardSorter);
        return [d.id, item];
      }),
  );

  Object.values(gameById)
    .filter(g => g.gameVersion = deck.gameVersion)
    .flatMap(g => [g, getGameMirror(g)])
    .filter(g => g.playerADeckId && similarMap[g.playerADeckId])
    .forEach((g) => {
      if (!g.playerADeckId) return;
      const item = similarMap[g.playerADeckId];
      if (!item) return;
      item.pick++;
      item.win += g.winner === "A" ? 1 : 0;
      if (g.playerAId && !item.players.some(p => p.playerId === g.playerAId)) {
        item.players.push({ playerId: g.playerAId, uniqueName: playerById[g.playerAId].uniqueName });
      }
    });

  return { statusCode: 200, similarMap };
});
