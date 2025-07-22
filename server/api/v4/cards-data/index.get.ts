import { getActionCards, getCharacterCards } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Cards"],
    summary: "查询卡牌数据",
    description: "查询所有可加入牌组的角色牌和行动牌的信息。",
  },
});

export default defineEventHandler(async () => {
  return {
    characterCards: await getCharacterCards(),
    actionCards: await getActionCards(),
  };
});
