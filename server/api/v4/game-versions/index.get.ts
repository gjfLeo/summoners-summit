import { getGameVersionList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Misc"],
    summary: "获取游戏版本列表",
    description: "获取游戏版本信息列表，从新到旧排序。",
  },
});

export default defineEventHandler(async () => {
  return await getGameVersionList();
});
