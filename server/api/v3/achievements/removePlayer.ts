import { z } from "zod";
import { ZAchievement, ZPlayerId } from "~/types";
import { getAchievementList, saveAchievementList } from "~/server/service";

const ZParams = z.object({
  achievementId: ZAchievement.shape.id,
  playerId: ZPlayerId,
});

export default defineEventHandler(async (event) => {
  const { achievementId, playerId } = await readValidatedBody(event, ZParams.parse);
  const achievementList = getAchievementList();
  const achievement = achievementList.find(a => a.id === achievementId);
  if (!achievement) {
    return responseErrorCode(errorCodes.ACHIEVEMENT_NOT_FOUND);
  }
  if (achievement.playerIds.includes(playerId)) {
    achievement.playerIds = achievement.playerIds.filter(p => p !== playerId);
  }
  saveAchievementList(achievementList);
  return responseOk();
});
