import { divide } from "mathjs/number";
import type { Game } from "~/utils/types";

export default function useGamesStatistics(games: Game[]) {
  const total = games.length;
  const win = games.filter(game => game.winner === "A").length;
  const winRate = toPercentageString(divide(win, total));
  const winDiff = win - (total - win);

  const totalWithActions = games.filter(game => game.playerADeckId && game.playerBDeckId).length;

  const starterWin = games.filter(game => game.starter === game.winner).length;
  const followerWin = games.filter(game => game.starter && game.starter !== game.winner).length;
  const starterWinRate = toPercentageString(divide(starterWin, total));
  const followerWinRate = toPercentageString(divide(followerWin, total));

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
