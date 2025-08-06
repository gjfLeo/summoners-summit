import z from "zod";
import { decodeDeck, getStorageGameList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Cards"],
    summary: "行动牌使用数据查询",
    description: "根据条件查询行动牌使用数据。",
    parameters: [
      {
        name: "teamId",
        in: "query",
        description: "阵容ID",
        required: false,
        example: "1306-1401-1703",
      },
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
  teamId: ZDeckTeamId.optional(),
  gameVersion: ZGameVersionId.optional(),
});

const getActionCardsUsages = defineCachedFunction(
  async ({ teamId, gameVersion }: {
    teamId?: DeckTeamId;
    gameVersion?: GameVersionId;
  }) => {
    let games: MaybeMirrored<Game>[] = await getStorageGameList();
    games = games.filter(g => !g.isPrePatch);
    if (gameVersion) {
      games = games.filter(g => g.gameVersion === gameVersion);
    }
    games = games.flatMap((g) => {
      const r: MaybeMirrored<Game>[] = [];
      if (g.playerADeck.deckCode) r.push(g);
      if (g.playerBDeck.deckCode) r.push(getMirroredGame(g));
      return r;
    });
    if (teamId) {
      games = games.filter(g => g.playerADeck.teamId === teamId);
    }

    const gameDecks = await Promise.all(
      games.map(async (game) => {
        const cards = await decodeDeck(game.playerADeck.deckCode!);
        return {
          deckCode: game.playerADeck.deckCode,
          cards: cards.actionCards,
          win: game.winner === "A",
        };
      }),
    );

    const record: Record<CardId, ActionCardUsages> = {};
    function getRecordItem(cardId: CardId) {
      return record[cardId] ?? (record[cardId] = {
        cardId,
        numGameDecks: 0,
        numGameDecksWin: 0,
        numUsages: 0,
        numUsagesWin: 0,
      });
    }

    gameDecks.forEach((gameDeck) => {
      const cardSet = new Set<CardId>();
      gameDeck.cards.forEach((card) => {
        cardSet.add(card);
        const recordItem = getRecordItem(card);
        recordItem.numUsages++;
        if (gameDeck.win) recordItem.numUsagesWin++;
      });
      Array.from(cardSet).forEach((card) => {
        const recordItem = getRecordItem(card);
        recordItem.numGameDecks++;
        if (gameDeck.win) recordItem.numGameDecksWin++;
      });
    });

    const list = Object.values(record);
    list.sort(sortBy(
      { field: "numUsages", order: "desc" },
      { field: "numGameDecks", order: "desc" },
      { field: "cardId" },
    ));
    return list;
  },
  {
    maxAge: serverMaxAge,
    name: "getActionCardsUsages",
    getKey: ({ teamId, gameVersion }) => getKey(teamId ?? "_", gameVersion),
  },
);

export default defineEventHandler(async (event) => {
  const { teamId, gameVersion } = await getValidatedQuery(event, ZQuery.parse);

  const actionCardStats = await getActionCardsUsages({ teamId, gameVersion });

  return actionCardStats;
});
