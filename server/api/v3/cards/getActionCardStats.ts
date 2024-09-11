import { decodeDeck, getGameList } from "~/server/service";
import { ZGetActionCardStatsParams } from "~/types";
import type { ActionCardStats, CardId } from "~/types";
import { getMirroredGame } from "~/utils/match";
import { sorter } from "~/utils/statistics";

export default defineEventHandler(async (event) => {
  const { gameVersion, teamId, preferredGameVersion } = await getValidatedQuery(event, ZGetActionCardStatsParams.parse);

  let games = getGameList()
    .filter(game => !game.isPrePatch);

  if (gameVersion) {
    games = games.filter(game => game.gameVersion === gameVersion);
  }

  games = games
    .flatMap(game => [game, getMirroredGame(game)])
    .filter(game => game.playerADeck.deckCode);

  if (teamId) {
    games = games.filter(game => game.playerADeck.teamId === teamId);
  }

  const record: Record<CardId, ActionCardStats> = {};
  const getRecord = (cardId: CardId) => (record[cardId] ??= {
    cardId,
    numGameDecks: 0,
    numGameDecksWin: 0,
    numUsages: 0,
    numUsagesWin: 0,
  });

  games
    .forEach((game) => {
      const gameVersionWeight = (preferredGameVersion && game.gameVersion !== preferredGameVersion) ? 0.1 : 1;
      const deckCode = game.playerADeck.deckCode!;
      const cards = decodeDeck(deckCode).actionCards;
      const cardIncluded: Record<CardId, true> = {};
      cards.forEach((cardId) => {
        const recordItem = getRecord(cardId);
        if (!cardIncluded[cardId]) {
          cardIncluded[cardId] = true;
          recordItem.numGameDecks += gameVersionWeight;
          if (game.winner === "A") recordItem.numGameDecksWin += gameVersionWeight;
        }
        recordItem.numUsages += gameVersionWeight;
        if (game.winner === "A") recordItem.numUsagesWin += gameVersionWeight;
      });
    });

  const numGameDecks = games.length;
  const actionCardStats = Object.values(record).sort(sorter("numUsages")).reverse();

  return responseData({ actionCardStats, numGameDecks });
});
