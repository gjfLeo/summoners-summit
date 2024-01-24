import { add, divide, multiply } from "mathjs/number";
import type { ActionCard, ApiTeamStatsBasicStats, ApiTeamStatsCardUsageValue, ApiTeamStatsData, ApiTeamStatsVsTeamStatsValue, R, TeamId } from "~/utils/types";
import { deckById, gameById } from "~/server/data";
import { getTeamIdByCharacters } from "~/utils/cards";

const initCardUsageInfo = (): ApiTeamStatsCardUsageValue => ({ totalCount: 0, winCount: 0, totalAverage: 0, winAverage: 0, deckPick: 0 });
const initVsTeamStats = (): ApiTeamStatsVsTeamStatsValue => ({ total: 0, win: 0, starterWin: 0, starterTotal: 0, followerWin: 0, followerTotal: 0 });

export default defineEventHandler<R & ApiTeamStatsData>((event) => {
  const teamId = event.context.params!.teamId as TeamId;
  const { gameVersion } = getQuery(event);

  let gameList = Object.values(gameById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  const basicStats: ApiTeamStatsBasicStats = {
    total: 0,
    win: 0,
    totalWithDeck: 0,
    winWithDeck: 0,
  };
  const cardUsageMap: ApiTeamStatsData["cardUsageMap"] = {};
  const vsTeamStatsMap: ApiTeamStatsData["vsTeamStatsMap"] = {};
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      if (getTeamIdByCharacters(game[`player${player}Characters`]) !== teamId) continue;
      basicStats.total++;
      if (game.winner === player) basicStats.win++;

      const deckId = game[`player${player}DeckId`];
      if (deckId) {
        basicStats.totalWithDeck++;
        if (game.winner === player) basicStats.winWithDeck++;
        const deck = deckById[deckId];
        for (const [card, count] of Object.entries(deck.actionCards) as [ActionCard, number][]) {
          const cardUsage = cardUsageMap[card] ?? (cardUsageMap[card] = initCardUsageInfo());
          cardUsage.deckPick++;
          cardUsage.totalCount += count;
          if (game.winner === player) cardUsage.winCount += count;
        }
      }

      const opponent = player === "A" ? "B" : "A";
      const opponentTeamId = getTeamIdByCharacters(game[`player${opponent}Characters`]);
      const vsTeamStats = vsTeamStatsMap[opponentTeamId] ?? (vsTeamStatsMap[opponentTeamId] = initVsTeamStats());
      vsTeamStats.total++;
      if (game.winner === player) vsTeamStats.win++;
      if (game.starter === player) {
        vsTeamStats.starterTotal++;
        if (game.winner === player) vsTeamStats.starterWin++;
      }
      if (game.starter === opponent) {
        vsTeamStats.followerTotal++;
        if (game.winner === player) vsTeamStats.followerWin++;
      }
    }

    for (const cardUsage of Object.values(cardUsageMap)) {
      cardUsage.totalAverage = divide(cardUsage.totalCount, basicStats.totalWithDeck);
      cardUsage.winAverage = divide(cardUsage.winCount, basicStats.winWithDeck);
    }
  }

  let typicalDeckId: string | undefined;
  let minDiff = Number.POSITIVE_INFINITY;
  if (Object.keys(cardUsageMap).length > 0) {
    for (const game of gameList) {
      for (const player of (["A", "B"] as const)) {
        if (getTeamIdByCharacters(game[`player${player}Characters`]) !== teamId) continue;

        const deckId = game[`player${player}DeckId`];
        if (!deckId) continue;
        const deck = deckById[deckId];
        const diff = (Object.entries(cardUsageMap) as [ActionCard, ApiTeamStatsCardUsageValue][])
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

  return { statusCode: 200, basicStats, cardUsageMap, typicalDeckId, vsTeamStatsMap };
});
