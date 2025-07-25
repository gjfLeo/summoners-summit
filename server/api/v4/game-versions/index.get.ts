import { getGameVersionList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Misc"],
    summary: "游戏版本列表查询",
    description: "查询游戏版本信息列表，从新到旧排序。",
  },
});

export default defineEventHandler(async () => {
  return await getGameVersionList();
});
