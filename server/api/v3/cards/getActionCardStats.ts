import { z } from "zod";
import { decodeDeck, getGameList } from "~/server/service";
import type { ActionCardStats, CardId } from "~/types";
import { getMirroredGame } from "~/utils/match";
import { sorter } from "~/utils/statistics";

const ZParams = z.object({
  gameVersion: z.string(),
}).strip();

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZParams.parse);

  const record: Record<CardId, ActionCardStats> = {};
  const getRecord = (cardId: CardId) => (record[cardId] ??= {
    cardId,
    numGameDecks: 0,
    numGameDecksWin: 0,
    numUsages: 0,
    numUsagesWin: 0,
  });

  const games = getGameList()
    .filter(game => game.gameVersion === gameVersion)
    .flatMap(game => [game, getMirroredGame(game)])
    .filter(game => game.playerADeck.deckCode);
  games
    .forEach((game) => {
      const deckCode = game.playerADeck.deckCode!;
      const cards = decodeDeck(deckCode).actionCards;
      const cardIncluded: Record<CardId, true> = {};
      cards.forEach((cardId) => {
        const recordItem = getRecord(cardId);
        if (!cardIncluded[cardId]) {
          cardIncluded[cardId] = true;
          recordItem.numGameDecks++;
          if (game.winner === "A") recordItem.numGameDecksWin++;
        }
        recordItem.numUsages++;
        if (game.winner === "A") recordItem.numUsagesWin++;
      });
    });

  const numGameDecks = games.length;
  const actionCardStats = Object.values(record).sort(sorter("numUsages")).reverse();

  return responseData({ actionCardStats, numGameDecks });
});
