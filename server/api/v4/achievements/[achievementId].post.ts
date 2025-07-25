import z from "zod";
import { getAchievementList, getStoragePlayerRecord, saveAchievementList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "成就修改",
    description: "操作指定成就的选手列表。",
    parameters: [
      {
        name: "achievementId",
        in: "path",
        required: true,
        example: "season1-dynamic",
      },
    ],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              action: {
                type: "string",
                enum: ["addPlayers", "removePlayers"],
                description: "操作类型：`addPlayers` - 添加选手；`removePlayers` - 移除选手",
              },
              playerIds: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "选手ID列表",
              },
            },
            required: ["action", "playerIds"],
          },
          examples: {
            addPlayers: {
              summary: "添加选手",
              value: {
                action: "addPlayers",
                playerIds: ["bdab981e63eaa280"],
              },
            },
            removePlayers: {
              summary: "移除选手",
              value: {
                action: "removePlayers",
                playerIds: ["bdab981e63eaa280"],
              },
            },
          },
        },
      },
    },
  },
});

const ZRouterParams = z.object({
  achievementId: ZAchievement.shape.id,
});
const ZBody = z.object({
  action: z.enum(["addPlayers", "removePlayers"], { error: "Invalid action" }),
  playerIds: ZPlayerId.array(),
});

export default defineEventHandler(async (event) => {
  const { achievementId } = await getValidatedRouterParams(event, ZRouterParams.parse);
  const { action, playerIds } = await readValidatedBody(event, ZBody.parse);

  const achievements = await getAchievementList();
  const achievement = achievements.find(a => a.id === achievementId);
  if (!achievement) {
    throw createError({ statusCode: 400, message: "Achievement not found" });
  }

  const players = await getStoragePlayerRecord(playerIds);
  const invalidPlayerId = playerIds.find(id => !players[id]);
  if (invalidPlayerId) {
    throw createError({ statusCode: 400, message: `Player ${invalidPlayerId} not found` });
  }

  switch (action) {
    case "addPlayers":
      achievement.playerIds = [...new Set([
        ...achievement.playerIds,
        ...playerIds,
      ])];
      break;
    case "removePlayers":
      achievement.playerIds = achievement.playerIds
        .filter(id => !playerIds.includes(id));
      break;
  }
  await saveAchievementList(achievements);

  return {};
});
