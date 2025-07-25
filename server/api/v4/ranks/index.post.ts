import { saveRanks, saveRanksPlayer } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    description: "创建或更新积分榜",
  },
});

const ZBody = ZRanks;

export default defineEventHandler(async (event) => {
  const ranks = await readValidatedBody(event, ZBody.parse);

  await Promise.all([
    saveRanks(ranks),
    saveRanksPlayer(ranks),
  ]);

  return {};
});
