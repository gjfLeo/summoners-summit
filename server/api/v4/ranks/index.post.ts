import { saveRanks, saveRanksPlayer } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "积分榜修改",
    description: "创建或修改积分榜",
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
