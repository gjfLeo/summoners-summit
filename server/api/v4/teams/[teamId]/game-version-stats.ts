import z from "zod";
import { getGameVersionList, getStorageGameList, getStorageMatchList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Teams"],
    summary: "查询阵容数据",
    description: "查询指定阵容的统计数据，根据游戏版本分组。<p>如果一场对局双方均为该阵容，这场对局会被视为两次。",
    parameters: [
      {
        name: "teamId",
        in: "path",
        required: true,
        description: "阵容ID：角色牌ID以`-`拼接。",
        example: "1306-1401-1703",
      },
    ],
  },
});

const ZRouteParams = z.object({
  teamId: ZDeckTeamId,
});

const getTeamGameVersionStats = defineCachedFunction(
  async ({ teamId }: {
    teamId: DeckTeamId;
  }) => {
    let games = await getStorageGameList();
    games = games.flatMap((g) => {
      const r: MaybeMirrored<Game>[] = [];
      if (g.playerADeck.teamId === teamId) {
        r.push(g);
      }
      if (g.playerBDeck.teamId === teamId) {
        r.push(getMirroredGame(g));
      }
      return r;
    });

    const record: Record<GameVersionId, {
      gameVersion: GameVersionId;
      numGames: number;
      numGamesWin: number;
      numGamesStarter: number;
      numGamesStarterWin: number;
      numBanned: number;
    }> = {};
    function getRecordItem(gameVersion: GameVersionId) {
      if (record[gameVersion]) {
        return record[gameVersion];
      }
      return record[gameVersion] = {
        gameVersion,
        numGames: 0,
        numGamesWin: 0,
        numGamesStarter: 0,
        numGamesStarterWin: 0,
        numBanned: 0,
      };
    }

    const matches = await getStorageMatchList();
    matches.forEach((m) => {
      m.bans?.filter(b => b.banType === "team")
        .forEach((ban) => {
          if (ban.playerATeamId === teamId) {
            getRecordItem(m.gameVersion).numBanned++;
          }
          if (ban.playerBTeamId === teamId) {
            getRecordItem(m.gameVersion).numBanned++;
          }
        });
    });

    games.forEach((g) => {
      const gameVersionId = g.gameVersion;
      const recordItem = getRecordItem(gameVersionId);
      recordItem.numGames++;
      if (g.winner === "A") {
        recordItem.numGamesWin++;
      }
      if (g.starter === "A") {
        recordItem.numGamesStarter++;
        if (g.winner === "A") {
          recordItem.numGamesStarterWin++;
        }
      }
    });

    const gameVersionList = await getGameVersionList();
    const list = gameVersionList
      .toSorted((a, b) => a.id.localeCompare(b.id))
      .map(v => getRecordItem(v.id));
    while (list.length > 0 && list.at(0)?.numGames === 0 && list.at(0)?.numBanned === 0) {
      list.shift();
    }
    while (list.length > 0 && list.at(-1)?.numGames === 0 && list.at(-1)?.numBanned === 0) {
      list.pop();
    }
    return list;
  },
  {
    maxAge: import.meta.dev ? 1 : 60 * 60 * 24 * 365,
    name: "getTeamGameVersionStats",
    getKey: ({ teamId }) => teamId,
  },
);

export default defineEventHandler(async (event) => {
  const { teamId } = await getValidatedRouterParams(event, ZRouteParams.parse);
  const gameVersionStats = await getTeamGameVersionStats({ teamId });
  return gameVersionStats;
});
