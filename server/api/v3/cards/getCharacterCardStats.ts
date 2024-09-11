import { z } from "zod";
import { getGameList, getMatchList } from "~/server/service";
import { ZGameVersionId } from "~/types";
import type { CardId, CharacterCardStats } from "~/types";
import { getMirroredGame } from "~/utils/match";
import { sorter } from "~/utils/statistics";
import { getCharacterCardsByTeamId } from "~/utils/team";

const ZParams = z.object({
  gameVersion: ZGameVersionId.optional(),
  preferredGameVersion: ZGameVersionId.optional(),
}).strip();

export default defineEventHandler(async (event) => {
  const { gameVersion, preferredGameVersion } = await getValidatedQuery(event, ZParams.parse);

  const record: Record<CardId, CharacterCardStats> = {};
  const getRecord = (cardId: CardId) => (record[cardId] ??= {
    cardId,
    numGames: 0,
    numGamesWin: 0,
    numMatches: 0,
    numBanned: 0,
  });

  let games = getGameList()
    .filter(game => !game.isPrePatch);

  if (gameVersion) {
    games = games.filter(game => game.gameVersion === gameVersion);
  }

  games
    .flatMap(game => [game, getMirroredGame(game)])
    .forEach((game) => {
      game.playerADeck.characters.forEach((cardId) => {
        const gameVersionWeight = (preferredGameVersion && game.gameVersion !== preferredGameVersion) ? 0.1 : 1;
        const stats = getRecord(cardId);
        stats.numGames += gameVersionWeight;
        if (game.winner === "A") stats.numGamesWin += gameVersionWeight;
      });
    });

  let matches = getMatchList()
    .filter(match => !match.isPrePatch);
  if (gameVersion) {
    matches = matches.filter(match => match.gameVersion === gameVersion);
  }
  matches
    .forEach((match) => {
      const gameVersionWeight = (preferredGameVersion && match.gameVersion !== preferredGameVersion) ? 0.1 : 1;
      const playerACharacters: Record<CardId, true> = {};
      const playerBCharacters: Record<CardId, true> = {};
      match.bans?.forEach((ban) => {
        if (ban.banType === "character") {
          // 角色禁用后双方均不可选择，算两边都上场
          playerACharacters[ban.playerACardId] = true;
          playerACharacters[ban.playerBCardId] = true;
          playerBCharacters[ban.playerACardId] = true;
          playerBCharacters[ban.playerBCardId] = true;
          getRecord(ban.playerACardId).numBanned += gameVersionWeight;
          getRecord(ban.playerBCardId).numBanned += gameVersionWeight;
        }
        else {
          getCharacterCardsByTeamId(ban.playerATeamId).forEach((cardId) => {
            playerACharacters[cardId] = true;
            getRecord(cardId).numBanned += gameVersionWeight;
          });
          getCharacterCardsByTeamId(ban.playerBTeamId).forEach((cardId) => {
            playerBCharacters[cardId] = true;
            getRecord(cardId).numBanned += gameVersionWeight;
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
          getRecord(cardId).numMatches += gameVersionWeight;
        });
    });

  const numGames = games.length;
  const numMatches = matches.length;
  const characterCardStats = Object.values(record).sort(sorter("numGames")).reverse();

  return responseData({ characterCardStats, numGames, numMatches });
});
