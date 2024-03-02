import { deckById, gameById } from "~/server/data";
import { getTeamIdByCharacters } from "~/utils/cards";
import { getGameMirror } from "~/utils/games";
import type { ActionCard, ApiTeamActionCardUsageData, R } from "~/utils/types";

export default defineEventHandler<R & ApiTeamActionCardUsageData>((event) => {
  const teamId = event.context.params!.teamId;
  const { gameVersion } = getQuery(event);

  let gameList = Object.values(gameById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }
  gameList = gameList.flatMap(g => [
    ...g.playerADeckId && getTeamIdByCharacters(g.playerACharacters) === teamId ? [g] : [],
    ...g.playerBDeckId && getTeamIdByCharacters(g.playerBCharacters) === teamId ? [getGameMirror(g)] : [],
  ]);

  const totalNumDecks = gameList.length;
  const actionCardUsageMap: ApiTeamActionCardUsageData["actionCardUsageMap"] = {};
  for (const game of gameList) {
    if (!game.playerADeckId) throw new Error("unexpected");
    const deck = deckById[game.playerADeckId];
    for (const [card, count] of Object.entries(deck.actionCards) as [ActionCard, number][]) {
      const usage = actionCardUsageMap[card] ?? (actionCardUsageMap[card] = {
        numDecksWith1: 0,
        numDecksWith2: 0,
        numDecksWith1Win: 0,
        numDecksWith2Win: 0,
      });
      if (count === 1) {
        usage.numDecksWith1++;
        if (game.winner === "A") usage.numDecksWith1Win++;
      }
      if (count === 2) {
        usage.numDecksWith2++;
        if (game.winner === "A") usage.numDecksWith2Win++;
      }
    }
  }

  return { statusCode: 200, actionCardUsageMap, totalNumDecks };
});
