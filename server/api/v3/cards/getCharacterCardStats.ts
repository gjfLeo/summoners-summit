import { z } from "zod";
import { getGameList, getMatchList } from "~/server/service";
import type { CardId, CharacterCardStats } from "~/types";
import { getMirroredGame } from "~/utils/match";
import { sorter } from "~/utils/statistics";
import { getCharacterCardsByTeamId } from "~/utils/team";

const ZParams = z.object({
  gameVersion: z.string(),
}).strip();

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZParams.parse);

  const record: Record<CardId, CharacterCardStats> = {};
  const getRecord = (cardId: CardId) => (record[cardId] ??= {
    cardId,
    numGames: 0,
    numGamesWin: 0,
    numMatches: 0,
    numBanned: 0,
  });

  const games = getGameList()
    .filter(game => game.gameVersion === gameVersion)
    .filter(game => !game.isPrePatch);
  games
    .flatMap(game => [game, getMirroredGame(game)])
    .forEach((game) => {
      game.playerADeck.characters.forEach((cardId) => {
        const stats = getRecord(cardId);
        stats.numGames++;
        if (game.winner === "A") stats.numGamesWin++;
      });
    });

  const matches = getMatchList()
    .filter(match => match.gameVersion === gameVersion)
    .filter(match => !match.isPrePatch);
  matches
    .forEach((match) => {
      const playerACharacters: Record<CardId, true> = {};
      const playerBCharacters: Record<CardId, true> = {};
      match.bans?.forEach((ban) => {
        if (ban.banType === "character") {
          // 角色禁用后双方均不可选择，算两边都上场
          playerACharacters[ban.playerACardId] = true;
          playerACharacters[ban.playerBCardId] = true;
          playerBCharacters[ban.playerACardId] = true;
          playerBCharacters[ban.playerBCardId] = true;
          getRecord(ban.playerACardId).numBanned++;
          getRecord(ban.playerBCardId).numBanned++;
        }
        else {
          getCharacterCardsByTeamId(ban.playerATeamId).forEach((cardId) => {
            playerACharacters[cardId] = true;
            getRecord(cardId).numBanned++;
          });
          getCharacterCardsByTeamId(ban.playerBTeamId).forEach((cardId) => {
            playerBCharacters[cardId] = true;
            getRecord(cardId).numBanned++;
          });
        }
      });
      match.gameIds.forEach((gameId) => {
        const game = games.find(game => game.id === gameId);
        game?.playerADeck.characters.forEach((cardId) => {
          playerACharacters[cardId] = true;
        });
        game?.playerBDeck.characters.forEach((cardId) => {
          playerBCharacters[cardId] = true;
        });
      });
      [...Object.keys(playerACharacters), ...Object.keys(playerBCharacters)]
        .forEach((cardId) => {
          getRecord(cardId).numMatches++;
        });
    });

  const numGames = games.length;
  const numMatches = matches.length;
  const characterCardStats = Object.values(record).sort(sorter("numGames")).reverse();

  return responseData({ characterCardStats, numGames, numMatches });
});
