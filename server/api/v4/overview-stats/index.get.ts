import { getGameVersionList, getStorageGameList, getStorageMatchList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Misc"],
    summary: "总览数据查询",
    description: "查询网站统计的各游戏版本的总览数据",
  },
});

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
        numMatches: 0,
      };
      return [gameVersion.id, stats];
    }),
  );

  const games = await getStorageGameList();
  games
    .filter(g => !g.isPrePatch)
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

  const matches = await getStorageMatchList();
  matches
    .filter(m => !m.isPrePatch)
    .forEach((match) => {
      const recordItem = record[match.gameVersion];
      recordItem.numMatches++;
    });

  const overview = Object.values(record)
    .sort(sortBy({ desc: "gameVersion" }));
  return overview;
});
