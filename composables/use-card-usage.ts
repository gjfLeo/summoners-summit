import { add, divide, multiply } from "mathjs/number";
import type { ActionCard, Deck, Game } from "~/utils/types";

interface CardUsageRaw {
  totalCount: number;
  winCount: number;
}

interface CardUsage extends CardUsageRaw {
  totalAverage: number;
  winAverage: number;
}

export default function useCardUsage(gameList: Game[], decks: Record<string, Deck>) {
  const numGamesWithDeck = gameList.filter(game => game.playerADeckId).length;
  const numWinGamesWithDeck = gameList.filter(game => game.playerADeckId && game.winner === "A").length;

  gameList = gameList.filter(game => game.playerADeckId);

  const usagesRaw: Partial<Record<ActionCard, Pick<CardUsageRaw, "totalCount" | "winCount">>> = {};
  gameList.forEach((game) => {
    const actions = decks[game.playerADeckId!]?.actionCards ?? {};
    (Object.entries(actions) as [ActionCard, number][])
      .forEach(([card, count]) => {
        const usage = usagesRaw[card] ?? { totalCount: 0, winCount: 0 };
        usage.totalCount += count;
        usage.winCount += game.winner === "A" ? count : 0;
        usagesRaw[card] = usage;
      });
  });
  const cardUsages = Object.fromEntries(
    (Object.entries(usagesRaw) as [ActionCard, CardUsageRaw][])
      .map<[ActionCard, CardUsage]>(([card, usageRaw]) => {
        const usage = {
          ...usageRaw,
          totalAverage: divide(usageRaw.totalCount, gameList.length),
          winAverage: divide(usageRaw.winCount, gameList.filter(game => game.winner === "A").length),
        };
        return [card, usage];
      }),
  );

  const differences = Object.fromEntries(
    gameList
      .filter(game => game.playerADeckId)
      .map(game => game.playerADeckId!)
      .map((deckId) => {
        const actions = decks[deckId]?.actionCards ?? {};
        const totalDiff = (Object.entries(cardUsages) as [ActionCard, CardUsage][])
          .reduce(
            (totalDiff, [card, usage]) => {
              const diff = (actions[card] ?? 0) - usage.winAverage;
              return add(totalDiff, multiply(diff, diff));
            },
            0,
          );
        return [deckId, totalDiff];
      }),
  );
  const minDiff = Object.entries(differences).reduce(
    (min, [deckId, diff]) => {
      if (diff < min.diff) {
        return { deckId, diff };
      }
      return min;
    },
    { deckId: "", diff: Number.POSITIVE_INFINITY },
  );

  const typicalActions = decks[minDiff.deckId]?.actionCards ?? {};

  return { cardUsages, typicalActions, numGamesWithDeck, numWinGamesWithDeck };
}
