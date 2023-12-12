import type { ActionCard, ApiDeckSimilarData, ApiDeckSimilarItem, DeckId, R } from "~/utils/types";
import { deckById, gameById, playerById } from "~/server/data";
import { getGameMirror } from "~/utils/games";
import { actionCardSorter, getTeamIdByCharacters } from "~/utils/cards";
import { sortObject } from "~/utils";

export default defineEventHandler<R & ApiDeckSimilarData>((event) => {
  const { maxDiffCount: maxDiffCountRaw } = getQuery(event);
  const maxDiffCount = maxDiffCountRaw ? Number(maxDiffCountRaw) : 8;

  const deckId = event.context.params!.deckId as DeckId;
  const deck = deckById[deckId];
  if (!deck) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  const { actionCards, gameVersion } = deck;
  const teamId = getTeamIdByCharacters(deck.characterCards);

  const similarMap: ApiDeckSimilarData["similarMap"] = Object.fromEntries(
    Object.values(deckById)
      .filter(d => d.gameVersion === gameVersion)
      .filter(d => getTeamIdByCharacters(d.characterCards) === teamId)
      .map<[DeckId, ApiDeckSimilarItem]>((d) => {
        const item: ApiDeckSimilarItem = {
          deckId: d.id,
          diffs: Object.assign({}, d.actionCards),
          diffCount: 0,
          pick: 0,
          win: 0,
          players: [],
        };
        (<[ActionCard, number][]>Object.entries(actionCards)).forEach(([card, count]) => {
          const diff = (item.diffs[card] ?? 0) - count;
          if (diff === 0) {
            delete item.diffs[card];
          }
          else {
            item.diffs[card] = diff;
          }
        });
        sortObject(item.diffs, actionCardSorter);
        item.diffCount = Object.values(item.diffs).filter(d => d > 0).reduce((a, b) => a + b, 0);
        return [d.id, item];
      })
      .filter(([, item]) => maxDiffCount > 0 && item.diffCount <= maxDiffCount)
      .sort((a, b) => a[1].diffCount - b[1].diffCount),
  );

  Object.values(gameById)
    .filter(g => g.gameVersion === deck.gameVersion)
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
