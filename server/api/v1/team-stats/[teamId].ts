import { add, divide, multiply } from "mathjs/number";
import type { ActionCard, R } from "~/utils/types";
import { deckById, gameById } from "~/server/data";
import { getTeamId } from "~/composables/use-team";

interface TeamStats {
  total: number;
  win: number;
  totalWithDeck: number;
  winWithDeck: number;
}

interface CardUsageInfo {
  totalCount: number;
  winCount: number;
  totalAverage: number;
  winAverage: number;
}

interface VsTeamStats {
  total: number;
  win: number;
}

interface TeamStatsData {
  stats: TeamStats;
  cardUsages: Partial<Record<ActionCard, CardUsageInfo>>;
  typicalDeckId?: string;
  vs: Record<string, VsTeamStats>;
}

const initCardUsageInfo = (): CardUsageInfo => ({ totalCount: 0, winCount: 0, totalAverage: 0, winAverage: 0 });
const initVsTeamStats = (): VsTeamStats => ({ total: 0, win: 0 });

export default defineEventHandler<R & TeamStatsData>((event) => {
  const teamId = event.context.params!.teamId as string;
  const { gameVersion } = getQuery(event);

  let gameList = Object.values(gameById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  const stats: TeamStats = {
    total: 0,
    win: 0,
    totalWithDeck: 0,
    winWithDeck: 0,
  };
  const cardUsages: Partial<Record<ActionCard, CardUsageInfo>> = {};
  const vs: Record<string, VsTeamStats> = {};
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      if (getTeamId(game[`player${player}Characters`]) !== teamId) continue;
      stats.total++;
      if (game.winner === player) stats.win++;

      const deckId = game[`player${player}DeckId`];
      if (deckId) {
        stats.totalWithDeck++;
        if (game.winner === player) stats.winWithDeck++;
        const deck = deckById[deckId];
        for (const [card, count] of Object.entries(deck.actionCards) as [ActionCard, number][]) {
          const cardUsage = cardUsages[card] ?? (cardUsages[card] = initCardUsageInfo());
          cardUsage.totalCount += count;
          if (game.winner === player) cardUsage.winCount += count;
        }
      }

      const opponent = player === "A" ? "B" : "A";
      const opponentTeamId = getTeamId(game[`player${opponent}Characters`]);
      const vsTeamStats = vs[opponentTeamId] ?? (vs[opponentTeamId] = initVsTeamStats());
      vsTeamStats.total++;
      if (game.winner === player) vsTeamStats.win++;
    }

    for (const cardUsage of Object.values(cardUsages)) {
      cardUsage.totalAverage = divide(cardUsage.totalCount, stats.totalWithDeck);
      cardUsage.winAverage = divide(cardUsage.winCount, stats.winWithDeck);
    }
  }

  let typicalDeckId: string | undefined;
  let minDiff = Number.POSITIVE_INFINITY;
  if (Object.keys(cardUsages).length > 0) {
    for (const game of gameList) {
      for (const player of (["A", "B"] as const)) {
        if (getTeamId(game[`player${player}Characters`]) !== teamId) continue;

        const deckId = game[`player${player}DeckId`];
        if (!deckId) continue;
        const deck = deckById[deckId];
        const diff = (Object.entries(cardUsages) as [ActionCard, CardUsageInfo][])
          .reduce(
            (totalDiff, [card, usage]) => {
              const diff = (deck.actionCards[card] ?? 0) - usage.winAverage;
              return add(totalDiff, multiply(diff, diff));
            },
            0,
          );
        if (diff < minDiff) {
          typicalDeckId = deckId;
          minDiff = diff;
        }
      }
    }
  }

  return { statusCode: 200, stats, cardUsages, typicalDeckId, vs };
});
