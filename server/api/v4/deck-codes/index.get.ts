import { z } from "zod";
import { getGameVersionList } from "~~/server/service";
import { getDeckCodes } from "~~/server/service/deck";

defineRouteMeta({
  openAPI: {
    tags: ["Decks"],
    summary: "查询热门牌组列表",
    description: "查询某个版本的牌组分享码列表，按使用次数排序。<br>如果不指定版本，自动取有数据的最新版本。",
    parameters: [
      {
        name: "gameVersion",
        in: "query",
        required: false,
        description: "游戏版本",
        example: "5.0",
      },
    ],
    responses: {
      200: {
        description: "成功",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: { type: "string", description: "牌组分享码" },
            },
            example: [
              "AZBR2RgNFrCw8lEPBUAQ9JcPCVBx9jEQEyERO1cTGbExDJMQDMFgDcYQDOGgEMoRDQAA",
              "AtLSN0AUFmHxxVoNF0EiymMNCpHB3p0PCkHR5Z4QGUEi9YMQGmHi958ZDKJhi7cSDBEB",
              "EaCRynENGOCx4yIOFzCg5IMOCUBw9JcPE0Ax9VcPFWBx9pMTC7FAirQYE6FRCzURDDAA",
            ],
          },
        },
      },
    },
  },
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
});

export default defineEventHandler(async (event): Promise<DeckCode[]> => {
  const query = await getValidatedQuery(event, ZQuery.parse);

  const gameVersion = query.gameVersion;
  if (gameVersion) {
    return await getDeckCodes({ gameVersion });
  }
  else {
    const gameVersionList = await getGameVersionList();
    gameVersionList.sort((a, b) => b.id.localeCompare(a.id));
    for (const gameVersion of gameVersionList) {
      const deckCodes = await getDeckCodes({ gameVersion: gameVersion.id });
      if (deckCodes.length > 0) {
        return deckCodes;
      }
    }
    return [];
  }
});
