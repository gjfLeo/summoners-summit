import { getGameDetail, getGameVersionList, getMatchDetail, getMatchList } from "~/server/service";
import { getMirroredGameDetail, getMirroredMatchDetail } from "~/utils/match";
import {
  ZApiPlayerRouterParams as ZRouterParams,
} from "~/types";
import type {
  GameDetail,
  GameVersionId,
  ApiGetPlayerStatsByVersionItem as Item,
  ApiGetPlayerStatsByVersionResponse as Response,
} from "~/types";

export default defineEventHandler(async (event) => {
  const { playerId } = await getValidatedRouterParams(event, ZRouterParams.parse);

  const record: Record<GameVersionId, Item>
    = Object.fromEntries(
      getGameVersionList().map(gameVersion => [gameVersion.id, {
        gameVersion: gameVersion.id,
        numMatches: 0,
        numMatchesWin: 0,
        numGames: 0,
        numGamesWin: 0,
      }]),
    );

  const games: GameDetail[] = [];

  getMatchList()
    .filter(match => !match.isPrePatch)
    .flatMap((match) => {
      if (match.playerA.playerId === playerId) return [getMatchDetail(match.id)!];
      if (match.playerB.playerId === playerId) return [getMirroredMatchDetail(getMatchDetail(match.id)!)];
      return [];
    })
    .forEach((match) => {
      record[match.gameVersion].numMatches++;
      if (match.winner === "A") record[match.gameVersion].numMatchesWin++;
      match.gameIds.forEach(gameId => games.push(getGameDetail(gameId)!));
    });

  games
    .filter(game => !game.isPrePatch)
    .flatMap((game) => {
      if (game.playerA.playerId === playerId) return [game];
      if (game.playerB.playerId === playerId) return [getMirroredGameDetail(game)];
      return [];
    })
    .forEach((game) => {
      record[game.gameVersion].numGames++;
      if (game.winner === "A") record[game.gameVersion].numGamesWin++;
    });

  const statsByVersion = Object.values(record)
    .sort((a, b) => a.gameVersion.localeCompare(b.gameVersion));
  while (statsByVersion.length >= 2 && statsByVersion[0].numMatches === 0 && statsByVersion.at(1)!.numGames === 0) {
    statsByVersion.shift();
  }
  while (statsByVersion.length >= 2 && statsByVersion.at(-1)!.numMatches === 0 && statsByVersion.at(-2)!.numGames === 0) {
    statsByVersion.pop();
  }

  return responseData<Response>({ statsByVersion });
});
