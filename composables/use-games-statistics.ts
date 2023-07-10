import { divide } from "mathjs/number";
import { gameList } from "~/data";
import type { Game } from "~/utils/types";

export default function useGamesStatistics(games?: MaybeRef<Game[]>) {
  const total = computed(() => unref(games ?? gameList).length);
  const win = computed(() => unref(games ?? gameList).filter(game => game.winner === "A").length);
  const winRate = computed(() => toPercentageString(divide(win.value, total.value)));
  const winDiff = computed(() => win.value - (total.value - win.value));

  const totalWithActions = computed(() => unref(games ?? gameList).filter(game => game.playerADeckId && game.playerBDeckId).length);

  const starterWin = computed(() => unref(games ?? gameList).filter(game => game.starter === game.winner).length);
  const followerWin = computed(() => unref(games ?? gameList).filter(game => game.starter !== game.winner).length);
  const starterWinRate = computed(() => toPercentageString(divide(starterWin.value, total.value)));
  const followerWinRate = computed(() => toPercentageString(divide(followerWin.value, total.value)));

  return {
    total,
    win,
    winRate,
    winDiff,
    totalWithActions,
    starterWin,
    followerWin,
    starterWinRate,
    followerWinRate,
  };
}
