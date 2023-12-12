import type { ApiPlayerStatsMapData, ApiPlayerStatsValue, PlayerId, R } from "~/utils/types";
import { gameById, matchById, playerById } from "~/server/data";

function initPlayerStats(playerId: PlayerId): ApiPlayerStatsValue {
  return {
    playerId,
    uniqueName: playerById[playerId].uniqueName,
    aliases: playerById[playerId].aliases,
    matchTotal: 0,
    matchWin: 0,
    gameTotal: 0,
    gameWin: 0,
  };
}

export default defineEventHandler<R & ApiPlayerStatsMapData>((event) => {
  const { gameVersion } = getQuery(event);

  let matchList = Object.values(matchById);
  let gameList = Object.values(gameById);

  if (gameVersion) {
    matchList = matchList.filter(match => match.gameVersion === gameVersion);
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  const playerStatsMap: Record<string, ApiPlayerStatsValue> = {};
  for (const match of matchList) {
    for (const player of (["A", "B"] as const)) {
      const playerId = match[`player${player}Id`];
      if (!playerId) continue;
      const playerStats = playerStatsMap[playerId] ?? (playerStatsMap[playerId] = initPlayerStats(playerId));
      playerStats.matchTotal++;
      if (match.winner === player) playerStats.matchWin++;
    }
  }
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      const playerId = game[`player${player}Id`];
      if (!playerId) continue;
      const playerStats = playerStatsMap[playerId] ?? (playerStatsMap[playerId] = initPlayerStats(playerId));
      playerStats.gameTotal++;
      if (game.winner === player) playerStats.gameWin++;
    }
  }

  return { statusCode: 200, playerStatsMap };
});
