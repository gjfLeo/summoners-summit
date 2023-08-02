import { add, divide, multiply } from "mathjs/number";
import type { ActionCard, Game } from "~/utils/types";

interface CardUsageRaw {
  totalCount: number;
  winCount: number;
}

interface CardUsage extends CardUsageRaw {
  totalAverage: number;
  winAverage: number;
}

export default async function useCardUsage(games: Game[]) {
  const numGamesWithDeck = games.filter(game => game.playerADeckId).length;
  const numWinGamesWithDeck = games.filter(game => game.playerADeckId && game.winner === "A").length;

  games = games.filter(game => game.playerADeckId);

  const deckIds = games.map(game => game.playerADeckId).join(",");
  const { data } = await useFetch(`/api/decks/${deckIds}`);
  if (!data.value) throw createError("获取数据失败");
  const { decks } = data.value;

  const usagesRaw: Partial<Record<ActionCard, Pick<CardUsageRaw, "totalCount" | "winCount">>> = {};
  games.forEach((game) => {
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
          totalAverage: divide(usageRaw.totalCount, games.length),
          winAverage: divide(usageRaw.winCount, games.filter(game => game.winner === "A").length),
        };
        return [card, usage];
      }),
  );

  const differences = Object.fromEntries(
    games
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
