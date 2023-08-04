import { matchById } from "../../data";
import type { Match, R } from "~/utils/types";

export default defineEventHandler<R & { match?: Match }>((event) => {
  const matchId = event.context.params!.matchId;

  const match = matchById[matchId];
  if (!match) {
    return { statusCode: 204, message: "赛事不存在" };
  }

  return { statusCode: 200, match };
});
