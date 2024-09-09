import { getGameDetail, getGameList, getMatchDetail, getMatchList, getPlayer, getPlayerRank } from "~/server/service";
import type { PlayerId, PlayerStats } from "~/types";
import { ZGetPlayerStatsRecordParams } from "~/types";
import { getMirroredGameDetail, getMirroredMatchDetail } from "~/utils/match";

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZGetPlayerStatsRecordParams.parse);

  const record: Record<PlayerId, PlayerStats> = {};
  function getRecord(playerId: PlayerId) {
    const player = getPlayer(playerId);
    if (!player) {
      throw new Error(`Player ${playerId} not found`);
    }
    const { uniqueName, aliases } = player;
    const rank = getPlayerRank({ playerId, gameVersion });
    return record[playerId] ??= {
      playerId,
      uniqueName,
      aliases,
      numMatches: 0,
      numMatchesWin: 0,
      numGames: 0,
      numGamesWin: 0,
      rank: rank?.rank,
      score: rank?.score,
    };
  }

  const matches = getMatchList()
    .filter(match => match.gameVersion === gameVersion)
    .filter(match => !match.isPrePatch)
    .map(match => getMatchDetail(match.id)!)
    .flatMap(match => [match, getMirroredMatchDetail(match)]);
  matches.forEach((match) => {
    const player = match.playerA.playerId;
    const recordItem = getRecord(player);
    recordItem.numMatches++;
    if (match.winner === "A") {
      recordItem.numMatchesWin++;
    }
  });

  const games = getGameList()
    .filter(game => game.gameVersion === gameVersion)
    .filter(game => !game.isPrePatch)
    .map(game => getGameDetail(game.id)!)
    .flatMap(game => [game, getMirroredGameDetail(game)]);
  games.forEach((game) => {
    const player = game.playerA.playerId;
    const recordItem = getRecord(player);
    recordItem.numGames++;
    if (game.winner === "A") {
      recordItem.numGamesWin++;
    }
  });

  return responseData({ playerStatsRecord: record });
});
