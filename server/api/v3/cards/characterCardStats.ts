import { z } from "zod";
import { getGameList, getMatchList } from "~/server/service";
import type { CardId, CharacterCardStats } from "~/types";
import { getMirroredGame } from "~/utils/match";
import { getCharacterCardsByTeamId } from "~/utils/team";

const ZParams = z.object({
  gameVersion: z.string(),
}).strip();

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZParams.parse);

  const record: Record<CardId, CharacterCardStats> = {};
  const getRecord = (cardId: CardId) => (record[cardId] ??= {
    numGames: 0,
    numGamesWin: 0,
    numBanned: 0,
  });

  getGameList()
    .filter(game => game.gameVersion === gameVersion)
    .flatMap(game => [game, getMirroredGame(game)])
    .forEach((game) => {
      game.playerADeck.characters.forEach((cardId) => {
        const stats = getRecord(cardId);
        stats.numGames++;
        if (game.winner === "A") stats.numGamesWin++;
      });
    });

  getMatchList()
    .filter(match => match.gameVersion === gameVersion)
    .forEach((match) => {
      match.bans?.forEach((ban) => {
        if (ban.banType === "character") {
          getRecord(ban.playerACardId).numBanned++;
          getRecord(ban.playerBCardId).numBanned++;
        }
        else {
          getCharacterCardsByTeamId(ban.playerATeamId).forEach(cardId => getRecord(cardId).numBanned++);
          getCharacterCardsByTeamId(ban.playerBTeamId).forEach(cardId => getRecord(cardId).numBanned++);
        }
      });
    });

  return record;
});
