import { getGame, getMatchDetail, getMatchList } from "~~/server/service";

export default defineEventHandler(async (event) => {
  const { playerId } = await getValidatedRouterParams(event, ZApiPlayerRouterParams.parse);

  const matchList = getMatchList()
    .filter(match => match.playerA.playerId === playerId || match.playerB.playerId === playerId)
    .map(match => getMatchDetail(match.id)!)
    .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id))
    .slice(0, 10);

  const games: Record<GameId, Game> = {};
  matchList
    .flatMap(match => match.gameIds)
    .forEach(gameId => games[gameId] = getGame(gameId)!);

  return responseData<ApiGetPlayerMatchesResponse>({ matchList, games });
});
