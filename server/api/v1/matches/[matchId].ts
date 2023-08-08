import type { Match, R } from "~/utils/types";
import { matchById } from "~/server/data";

interface MatchData {
  match: Match;
}

export default defineEventHandler<R & MatchData>((event) => {
  const matchId = event.context.params!.matchId;

  const match = matchById[matchId];
  if (!match) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  return { statusCode: 200, match };
});
