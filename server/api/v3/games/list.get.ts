import { fillGameDetail, getGameList } from "~/server/service";
import { ZGetGameListParams } from "~/types";
import { getMirroredGameDetail } from "~/utils/match";

export default defineEventHandler(async (event) => {
  const { gameVersion, deckCode, teamId } = await getValidatedQuery(event, ZGetGameListParams.parse);

  let games = getGameList();
  games = games.filter(game => !game.isPrePatch);

  if (gameVersion) {
    games = games.filter(game => game.gameVersion === gameVersion);
  }

  let gameDetails = games.map(fillGameDetail).flatMap(game => [game, getMirroredGameDetail(game)]);

  if (teamId) {
    gameDetails = gameDetails.filter(game => game.playerADeck.teamId === teamId);
  }
  if (deckCode) {
    gameDetails = gameDetails.filter(game => game.playerADeck.deckCode === deckCode);
  }

  gameDetails = gameDetails.slice(0, 30);

  return responseData({ games: gameDetails });
});
