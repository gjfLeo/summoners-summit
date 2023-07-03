import { divide } from "mathjs/number";
import { deckById, gameList } from "~/data";
import type { ActionCard, Game } from "~/utils/types";

interface CardUsage {
  total: number;
  win: number;
  totalAverage: number;
  winAverage: number;
}
  type CardUsageRaw = Pick<CardUsage, "total" | "win">;
function getTotalCardUsages(games: Game[]): Partial<Record<ActionCard, CardUsage>> {
  const usages: Partial<Record<ActionCard, Pick<CardUsageRaw, "total" | "win">>> = {};
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

export default function useCardUsage(games?: MaybeRef<Game[] | undefined>) {
  const cardUsage = computed(() => {
    const gamesUnref = unref(games);
    return getTotalCardUsages(gamesUnref ?? gameList);
  });
  return { cardUsage };
}
