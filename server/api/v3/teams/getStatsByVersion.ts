import { getGameList, getGameVersionList, getMatchList } from "~/server/service";
import type { GameVersionId } from "~/types";
import type { TeamStatsInVersion } from "~/types/api/teams/GetTeamStatsByVersion";
import { ZGetTeamStatsByVersionParams } from "~/types/api/teams/GetTeamStatsByVersion";
import { getMirroredGame, getMirroredMatch } from "~/utils/match";

export default defineEventHandler(async (event) => {
  const { teamId } = await getValidatedQuery(event, ZGetTeamStatsByVersionParams.parse);

  const statsByVersionRecord: Record<GameVersionId, TeamStatsInVersion> = Object.fromEntries(
    getGameVersionList().map(gameVersion => [gameVersion.id, {
      gameVersion: gameVersion.id,
      numGames: 0,
      numGamesWin: 0,
      numBanned: 0,
    }]),
  );
  function getRecordItem(gameVersion: GameVersionId) {
    return statsByVersionRecord[gameVersion] ??= {
      gameVersion,
      numGames: 0,
      numGamesWin: 0,
      numBanned: 0,
    };
  }

  const games = getGameList()
    .flatMap(game => [game, getMirroredGame(game)])
    .filter(game => game.playerADeck.teamId === teamId);
  games.forEach((game) => {
    const gameVersion = game.gameVersion;
    const recordItem = getRecordItem(gameVersion);
    recordItem.numGames++;
    if (game.winner === "A") recordItem.numGamesWin++;
  });

  getMatchList()
    .flatMap(match => [match, getMirroredMatch(match)])
    .filter(match => match.bans?.some(ban => ban.banType === "team" && ban.playerATeamId === teamId))
    .forEach((match) => {
      const gameVersion = match.gameVersion;
      const recordItem = getRecordItem(gameVersion);
      recordItem.numBanned++;
    });

  const statsByVersion = Object.values(statsByVersionRecord)
    .sort((a, b) => a.gameVersion.localeCompare(b.gameVersion));

  return responseData({ statsByVersion });
});
