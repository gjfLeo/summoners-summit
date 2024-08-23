import { z } from "zod";
import { ZAchievement, ZPlayerId } from "~/types";
import { getAchievementList, saveAchievementList } from "~/server/service";

const ZParams = z.object({
  achievementId: ZAchievement.shape.id,
  playerIds: z.array(ZPlayerId),
});

export default defineEventHandler(async (event) => {
  const { achievementId, playerIds } = await readValidatedBody(event, ZParams.parse);
  const achievementList = getAchievementList();
  const achievement = achievementList.find(a => a.id === achievementId);
  if (!achievement) {
    return responseErrorCode(errorCodes.ACHIEVEMENT_NOT_FOUND);
  }
  for (const playerId of playerIds) {
    if (!achievement.playerIds.includes(playerId)) {
      achievement.playerIds.push(playerId);
    }
  }
  saveAchievementList(achievementList);
  return responseOk();
});
