import { getAchievementList } from "~/server/service";

export default defineEventHandler(async () => {
  const achievementList = getAchievementList();
  return responseData({ achievementList });
});
