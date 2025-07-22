import { getAchievementList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "查询成就列表",
    description: "查询成就（即金卡背）信息和对应选手。",
  },
});

export default defineEventHandler(async () => {
  return await getAchievementList();
});
