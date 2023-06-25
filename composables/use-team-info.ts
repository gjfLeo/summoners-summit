import { add, divide, multiply } from "mathjs/number";
import type { MaybeRef } from "vue";
import { deckById, gameList } from "~/data";
import type { ActionCard, Deck, Game } from "~/utils/types";

// 阵容的对局列表

const getTeamGameList = useMemoize((teamId: string) => gameList.flatMap((game) => {
  const { playerA, playerB, playerACharacters, playerBCharacters, playerADeckId, playerBDeckId, starter, winner } = game;
  const playerATeamId = getTeamId(playerACharacters);
  const playerBTeamId = getTeamId(playerBCharacters);
  const teamGames = new Array<Game>();
  if (playerATeamId === teamId) {
    teamGames.push(game);
  }
  if (playerBTeamId === teamId) {
    teamGames.push({
      ...game,
      playerA: playerB,
      playerB: playerA,
      playerACharacters: playerBCharacters,
      playerBCharacters: playerACharacters,
      playerADeckId: playerBDeckId,
      playerBDeckId: playerADeckId,
      starter: starter === "A" ? "B" : "A",
      winner: winner === "A" ? "B" : "A",
    });
  }
  return teamGames;
}));

// 阵容的单卡使用

interface CardUsage {
  total: number;
  win: number;
  totalAverage: number;
  winAverage: number;
}
type CardUsageRaw = Pick<CardUsage, "total" | "win">;
const getTeamCardUsages = useMemoize((teamId: string): Partial<Record<ActionCard, CardUsage>> => {
  const usages: Partial<Record<ActionCard, Pick<CardUsageRaw, "total" | "win">>> = {};
  const teamGameList = getTeamGameList(teamId).filter(game => game.playerADeckId);
  teamGameList.forEach((game) => {
    const actions = deckById[game.playerADeckId!].actionCards;
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
          totalAverage: divide(usageRaw.total, teamGameList.length),
          winAverage: divide(usageRaw.win, teamGameList.filter(game => game.winner === "A").length),
        };
        return [card, usage];
      }),
  );
});

// 阵容的典型卡组

const getTeamTypicalActions = useMemoize((teamId: string): Deck["actionCards"] => {
  const teamGameList = getTeamGameList(teamId);
  const teamCardUsages = getTeamCardUsages(teamId);
  const differences = Object.fromEntries(
    teamGameList
      .filter(game => game.playerADeckId)
      .map(game => game.playerADeckId!)
      .map((deckId) => {
        const actions = deckById[deckId].actionCards;
        const totalDiff = (Object.entries(teamCardUsages) as [ActionCard, CardUsage][])
          .reduce(
            (totalDiff, [card, usage]) => {
              const diff = (actions[card] ?? 0) - usage.totalAverage;
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
    { deckId: "", diff: Infinity },
  );
  return deckById[minDiff.deckId].actionCards;
});

export default function useTeamInfo(teamId: MaybeRef<string>) {
  const teamIdUnref = unref(teamId);
  const teamGameList = computed(() => getTeamGameList(teamIdUnref));
  const teamCardUsages = computed(() => getTeamCardUsages(teamIdUnref));
  const teamTypicalActions = computed(() => getTeamTypicalActions(teamIdUnref));
  return { teamGameList, teamCardUsages, teamTypicalActions };
}
