import z from "zod";
import { getStorageGameList, getStorageMatchList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Cards"],
    summary: "角色牌使用数据查询",
    description: "根据条件查询角色牌使用数据。",
    parameters: [
      {
        name: "gameVersion",
        in: "query",
        description: "游戏版本",
        required: false,
        example: "3.8",
      },
    ],
  },
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
});

const getCharacterCardsUsages = defineCachedFunction(
  async ({ gameVersion }: {
    gameVersion?: GameVersionId;
  }) => {
    let games = await getStorageGameList();
    games = games.filter(g => !g.isPrePatch);
    if (gameVersion) {
      games = games.filter(g => g.gameVersion === gameVersion);
    }

    const record: Record<CardId, CharacterCardUsages> = {};
    function getRecordItem(cardId: CardId) {
      return record[cardId] ?? (record[cardId] = {
        cardId,
        numGames: 0,
        numGamesWin: 0,
        numMatches: 0,
        numBanned: 0,
      });
    }

    const matchIdsByCardId: Record<CardId, Set<`${MatchId}${"A" | "B"}`>> = {};
    function addMatchId(cardId: CardId, matchId: MatchId, player: "A" | "B") {
      matchIdsByCardId[cardId] ??= new Set();
      matchIdsByCardId[cardId].add(`${matchId}${player}`);
    }

    games.forEach((game) => {
      for (const p of ["A", "B"] as const) {
        const cardIds = game[`player${p}Deck`].characters;
        cardIds.forEach((card) => {
          addMatchId(card, game.matchId, p);
          const recordItem = getRecordItem(card);
          recordItem.numGames++;
          if (game.winner === p) recordItem.numGamesWin++;
        });
      }
    });

    let matches = await getStorageMatchList();
    matches = matches.filter(m => !m.isPrePatch);
    if (gameVersion) {
      matches = matches.filter(m => m.gameVersion === gameVersion);
    }
    matches.forEach((match) => {
      match.bans?.forEach((ban) => {
        if (ban.banType === "character") {
          addMatchId(ban.playerACardId, match.id, "A");
          addMatchId(ban.playerACardId, match.id, "B");
          addMatchId(ban.playerBCardId, match.id, "A");
          addMatchId(ban.playerBCardId, match.id, "B");
          getRecordItem(ban.playerACardId).numBanned++;
          getRecordItem(ban.playerBCardId).numBanned++;
        }
        else {
          for (const p of ["A", "B"] as const) {
            const cardIds = getCharacterCardsByTeamId(ban[`player${p}TeamId`]);
            cardIds.forEach((card) => {
              const recordItem = getRecordItem(card);
              recordItem.numBanned++;
              addMatchId(card, match.id, p);
            });
          }
        }
      });
    });
    Object.entries(matchIdsByCardId)
      .forEach(([cardId, matchIds]) => {
        getRecordItem(cardId).numMatches = matchIds.size;
      });

    const list = Object.values(record);
    list.sort(sortBy(
      { field: "numGames", order: "desc" },
      { field: "numBanned", order: "desc" },
      { field: "cardId" },
    ));
    return list;
  },
  {
    maxAge: serverMaxAge,
    name: "getCharacterCardsUsages",
    getKey: ({ gameVersion }) => getKey(gameVersion),
  },
);

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZQuery.parse);

  const characterCardsUsages = await getCharacterCardsUsages({ gameVersion });

  return characterCardsUsages;
});
