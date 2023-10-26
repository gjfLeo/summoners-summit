import type { R } from "~/utils/types";
import { gameById, matchById, playerById } from "~/server/data";

interface PlayerBasicStats {
  playerId: string;
  uniqueName: string;
  matchTotal: number;
  matchWin: number;
  gameTotal: number;
  gameWin: number;
}

interface PlayerBasicStatsData {
  playerStatsMap: Record<string, PlayerBasicStats>;
}

function initPlayerStats(playerId: string): PlayerBasicStats {
  return {
    playerId,
    uniqueName: playerById[playerId].uniqueName,
    matchTotal: 0,
    matchWin: 0,
    gameTotal: 0,
    gameWin: 0,
  };
}

export default defineEventHandler<R & PlayerBasicStatsData>((event) => {
  const { gameVersion } = getQuery(event);

  let matchList = Object.values(matchById);
  let gameList = Object.values(gameById);

  if (gameVersion) {
    matchList = matchList.filter(match => match.gameVersion === gameVersion);
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  const playerStatsMap: Record<string, PlayerBasicStats> = {};
  for (const match of matchList) {
    for (const player of (["A", "B"] as const)) {
      const playerId = match[`player${player}Id`];
      const playerStats = playerStatsMap[playerId] ?? (playerStatsMap[playerId] = initPlayerStats(playerId));
      playerStats.matchTotal++;
      if (match.winner === player) playerStats.matchWin++;
    }
  }
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      const playerId = game[`player${player}Id`];
      const playerStats = playerStatsMap[playerId] ?? (playerStatsMap[playerId] = initPlayerStats(playerId));
      playerStats.gameTotal++;
      if (game.winner === player) playerStats.gameWin++;
    }
  }

  return { statusCode: 200, playerStatsMap };
});
