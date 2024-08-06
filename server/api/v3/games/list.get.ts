import { fillGameDetail, getGameList, mirrorGame } from "~/server/service";
import { ZGetGameListParams } from "~/types";

export default defineEventHandler(async (event) => {
  const { gameVersion, deckCode, teamId } = await getValidatedQuery(event, ZGetGameListParams.parse);

  let games = getGameList();

  if (gameVersion) {
    games = games.filter(game => game.gameVersion === gameVersion);
  }

  games = games.flatMap(game => [game, mirrorGame(game)]);

  if (teamId) {
    games = games.filter(game => game.playerADeck.teamId === teamId);
  }
  if (deckCode) {
    games = games.filter(game => game.playerADeck.deckCode === deckCode);
  }

  games = games.slice(0, 30);

  const gameDetails = games.map(fillGameDetail);

  return responseData({ games: gameDetails });
});
