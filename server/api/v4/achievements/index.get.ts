import { getAchievementList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "成就列表查询",
    description: "查询成就（即金卡背）信息和对应选手。",
  },
});

export default defineEventHandler(async () => {
  return await getAchievementList();
});
