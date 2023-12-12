import type { ApiMatchData, MatchId, R } from "~/utils/types";
import { matchById } from "~/server/data";

export default defineEventHandler<R & ApiMatchData>((event) => {
  const matchId = event.context.params!.matchId as MatchId;

  const match = matchById[matchId];
  if (!match) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  return { statusCode: 200, match };
});
