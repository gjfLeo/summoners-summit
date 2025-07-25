import z from "zod";
import { changePlayerUniqueName, getStoragePlayer } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "选手信息修改",
    parameters: [
      {
        name: "playerId",
        in: "path",
        description: "选手ID",
        required: true,
      },
      {
        name: "action",
        in: "query",
        description: "操作",
        required: true,
        schema: {
          type: "string",
          enum: ["changeUniqueName"],
        },
      },
      {
        name: "uniqueName",
        in: "query",
        description: "新的选手昵称",
        required: false,
      },
    ],
  },
});

const ZRouterParams = z.object({
  playerId: ZPlayerId,
});

const ZQuery = z.object({
  action: z.enum(["changeUniqueName"]),
  uniqueName: ZPlayerNickname.optional(),
});

export default defineEventHandler(async (event) => {
  const { playerId } = await getValidatedRouterParams(event, ZRouterParams.parse);
  const { action, uniqueName } = await getValidatedQuery(event, ZQuery.parse);

  const player = await getStoragePlayer(playerId);
  if (!player) {
    throw createError({ statusCode: 400, message: "player not found" });
  }

  if (action === "changeUniqueName") {
    if (!uniqueName) {
      throw createError({ statusCode: 400, message: "uniqueName is required" });
    }
    await changePlayerUniqueName(player, uniqueName);
    return {};
  }

  throw createError({ statusCode: 400, message: "invalid action" });
});
