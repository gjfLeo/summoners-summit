import z from "zod";
import { getRanks } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "更新积分榜",
    description: "根据ID更新积分榜。目前ID即游戏版本。",
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        description: "ID: 即游戏版本",
        example: "3.7",
      },
    ],
  },
});

const ZRouterParams = z.object({
  id: z.coerce.string(),
});

export default defineEventHandler(async (event) => {
  const { id } = await getValidatedRouterParams(event, ZRouterParams.parse);
  const ranks = await getRanks(id);
  return ranks;
});
