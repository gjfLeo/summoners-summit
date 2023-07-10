import { add, divide, multiply } from "mathjs/number";
import { deckById, gameList } from "~/data";
import type { ActionCard, Deck, Game } from "~/utils/types";

interface CardUsage {
  total: number;
  win: number;
  totalAverage: number;
  winAverage: number;
}
type CardUsageRaw = Pick<CardUsage, "total" | "win">;

// 计算games中playerAActions的卡牌使用率
function getTotalCardUsages(games: Game[]): Partial<Record<ActionCard, CardUsage>> {
  const usages: Partial<Record<ActionCard, Pick<CardUsageRaw, "total" | "win">>> = {};
  games = games.filter(game => game.playerADeckId);
  games.forEach((game) => {
    const actions = deckById[game.playerADeckId!]?.actionCards ?? {};
    (Object.entries(actions) as [ActionCard, number][])
      .forEach(([card, count]) => {
        const usage = usages[card] ?? { total: 0, win: 0 };
        usage.total += count;
        usage.win += game.winner === "A" ? count : 0;
        usages[card] = usage;
      });
  });
  return Object.fromEntries(
    (Object.entries(usages) as [ActionCard, CardUsageRaw][])
      .map<[ActionCard, CardUsage]>(([card, usageRaw]) => {
        const usage = {
          ...usageRaw,
          totalAverage: divide(usageRaw.total, games.length),
          winAverage: divide(usageRaw.win, games.filter(game => game.winner === "A").length),
        };
        return [card, usage];
      }),
  );
}

const getTypicalActions = useMemoize((games: Game[], cardUsage: Partial<Record<ActionCard, CardUsage>>): Deck["actionCards"] => {
  const differences = Object.fromEntries(
    games
      .filter(game => game.playerADeckId)
      .map(game => game.playerADeckId!)
      .map((deckId) => {
        const actions = deckById[deckId]?.actionCards ?? {};
        const totalDiff = (Object.entries(cardUsage) as [ActionCard, CardUsage][])
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
  return deckById[minDiff.deckId]?.actionCards ?? {};
});

export default function useCardUsage(games?: MaybeRef<Game[] | undefined>) {
  const cardUsage = computed(() => {
    const gamesUnref = unref(games);
    return getTotalCardUsages(gamesUnref ?? gameList);
  });
  const typicalActions = computed(() => {
    const gamesUnref = unref(games);
    const cardUsageUnref = unref(cardUsage);
    return getTypicalActions(gamesUnref ?? gameList, cardUsageUnref);
  });
  const numGamesWithDeck = computed(() => (unref(games) ?? gameList).filter(game => game.playerADeckId).length);
  return { cardUsage, typicalActions, numGamesWithDeck };
}
