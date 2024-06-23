import { fillGameDetail, getGameList, mirrorGame } from "~/server/service";
import { ZGetGameListParams } from "~/types";

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZGetGameListParams.parse);

  let games = getGameList().flatMap(game => [game, mirrorGame(game)]);

  if (params.deckCode) {
    games = games.filter(game => game.playerADeck.deckCode === params.deckCode);
  }

  games = games.slice(0, 30);

  const gameDetails = games.map(fillGameDetail);

  return responseData({ games: gameDetails });
});
