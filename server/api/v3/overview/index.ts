import { getGameList, getGameVersionList } from "~/server/service";
import type { GetOverviewResponse, GetOverviewResponseItem } from "~/types/api/stub/GetOverview";

export default defineEventHandler(async () => {
  const record = Object.fromEntries<GetOverviewResponseItem>(
    getGameVersionList().map(gameVersion => ([
      gameVersion.id,
      {
        gameVersion: gameVersion.id,
        numGames: 0,
        numGamesWithDeck: 0,
        numGamesWithStarter: 0,
        numGamesStarterWin: 0,
      },
    ]),
    ),
  );

  getGameList()
    .forEach((game) => {
      const recordItem = record[game.gameVersion];
      recordItem.numGames++;
      if (game.playerADeck.deckCode && game.playerBDeck.deckCode) {
        recordItem.numGamesWithDeck++;
      }
      if (game.starter) {
        recordItem.numGamesWithStarter++;
        if (game.winner === game.starter) {
          recordItem.numGamesStarterWin++;
        }
      }
    });

  const overview = Object.values(record).sort((a, b) => b.gameVersion.localeCompare(a.gameVersion));
  return responseData<GetOverviewResponse>({ overview });
});
