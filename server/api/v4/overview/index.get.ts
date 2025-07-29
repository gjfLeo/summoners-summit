import { getGameVersionList, getStorageGameList } from "~~/server/service";

export default defineEventHandler(async () => {
  const gameVersionList = await getGameVersionList();
  const record = Object.fromEntries(
    gameVersionList.map((gameVersion) => {
      const stats = {
        gameVersion: gameVersion.id as GameVersionId,
        numGames: 0,
        numGamesWithDeck: 0,
        numGamesWithStarter: 0,
        numGamesStarterWin: 0,
      };
      return [gameVersion.id, stats];
    }),
  );

  const games = await getStorageGameList();

  games
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

  const overview = Object.values(record)
    .sort(sortBy({ desc: "gameVersion" }));
  return overview;
});
