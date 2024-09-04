import { getGameList } from "~/server/service";
import type { DeckTeamId, GetTeamMatchupsResponse, GetTeamMatchupsResponseItem } from "~/types";
import { ZGetTeamMatchupsParams, ZRouterParamsTeamId } from "~/types";
import { getMirroredGame } from "~/utils/match";
import { sorter } from "~/utils/statistics";

export default defineEventHandler(async (event) => {
  const { teamId } = await getValidatedRouterParams(event, ZRouterParamsTeamId.parse);
  const { gameVersion } = await getValidatedQuery(event, ZGetTeamMatchupsParams.parse);

  const record: Record<DeckTeamId, GetTeamMatchupsResponseItem> = {};
  function getRecord(teamId: DeckTeamId) {
    return record[teamId] ??= {
      opponentTeamId: teamId,
      numGames: 0,
      numGamesWin: 0,
      numGamesStarter: 0,
      numGamesStarterWin: 0,
    };
  }

  getGameList()
    .filter(game => game.gameVersion === gameVersion)
    .flatMap(game => [game, getMirroredGame(game)])
    .filter(game => game.playerADeck.teamId === teamId)
    .forEach((game) => {
      const record = getRecord(game.playerBDeck.teamId);
      record.numGames++;
      if (game.winner === "A") {
        record.numGamesWin++;
      }
      if (game.starter === "A") {
        record.numGamesStarter++;
        if (game.winner === "A") {
          record.numGamesStarterWin++;
        }
      }
    });

  const matchups = Object.values(record).sort(sorter("numGames")).reverse();
  return responseData<GetTeamMatchupsResponse>({ matchups });
});
