import { getRanksIds } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "查询积分榜列表",
    description: "查询有记录的积分榜列表，按版本倒序排列。",
  },
});

export default defineEventHandler(async () => {
  const rankIds = await getRanksIds();
  return rankIds.toSorted((a, b) => b.localeCompare(a)).map(id => ({ id }));
});
