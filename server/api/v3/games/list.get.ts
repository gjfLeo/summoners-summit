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

  if (teamId) {
    games = games.filter(game => game.playerADeck.teamId === teamId || game.playerBDeck.teamId === teamId);
  }
  if (deckCode) {
    games = games.filter(game => game.playerADeck.deckCode === deckCode || game.playerBDeck.deckCode === deckCode);
  }

  let gameDetails = games
    .flatMap((game) => {
      if ((teamId && game.playerADeck.teamId === teamId)
        || (deckCode && game.playerADeck.deckCode === deckCode)) {
        return [fillGameDetail(game)];
      }
      if ((teamId && game.playerBDeck.teamId === teamId)
        || (deckCode && game.playerBDeck.deckCode === deckCode)) {
        return [getMirroredGameDetail(fillGameDetail(game))];
      }
      return [fillGameDetail(game)];
    });

  gameDetails = gameDetails.slice(0, 30);

  return responseData({ games: gameDetails });
});
