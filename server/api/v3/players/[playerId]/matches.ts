import { getGame, getMatchDetail, getMatchList } from "~/server/service";
import type {
  Game,
  GameId,
  ApiGetPlayerMatchesResponse as Response,
} from "~/types";
import {
  ZApiPlayerRouterParams as ZRouterParams,
} from "~/types";

export default defineEventHandler(async (event) => {
  const { playerId } = await getValidatedRouterParams(event, ZRouterParams.parse);

  const matchList = getMatchList()
    .filter(match => match.playerA.playerId === playerId || match.playerB.playerId === playerId)
    .map(match => getMatchDetail(match.id)!)
    .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id))
    .slice(0, 10);

  const games: Record<GameId, Game> = {};
  matchList
    .flatMap(match => match.gameIds)
    .forEach(gameId => games[gameId] = getGame(gameId)!);

  return responseData<Response>({ matchList, games });
});
