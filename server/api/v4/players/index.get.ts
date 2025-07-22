import z from "zod";
import { getStoragePlayerList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "查询选手列表",
    description: "查询选手信息列表。<p>一些选手数据被标记为忽略（例如娱乐赛中的双人队伍等），默认清空下不返回。",
    parameters: [
      {
        name: "includeIgnored",
        in: "query",
        description: "是否包含忽略的选手，默认不包含",
        required: false,
        example: "1",
      },
    ],
  },
});

const ZQuery = z.object({
  includeIgnored: z.coerce.boolean().optional().default(false),
});

export default defineEventHandler(async (event) => {
  const { includeIgnored } = await getValidatedQuery(event, ZQuery.parse);

  let players = await getStoragePlayerList();

  if (!includeIgnored) {
    players = players.filter(player => !player.ignored);
  }

  return players;
});
