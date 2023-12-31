import { matchById } from "~/server/data";
import { getMatchMirror } from "~/utils/games";
import type { ApiMatchListData, R } from "~/utils/types";

const mirrorOverrideMap: Record<string, boolean> = {
  1: true,
  0: false,
};
export default defineEventHandler<R & ApiMatchListData>((event) => {
  const {
    gameVersion,
    playerId,
    mirror: mirrorOverride,
    limit: limitOverride,
    offset: offsetOverride,
  } = getQuery(event);

  let list = Object.values(matchById);
  if (gameVersion) {
    list = list.filter(match => match.gameVersion === gameVersion);
  }

  const mirror = mirrorOverrideMap[mirrorOverride as string] ?? (playerId);
  if (mirror) {
    list = list.flatMap(match => [match, getMatchMirror(match)]);
  }

  if (playerId) {
    list = list.filter(match => match.playerAId === playerId);
  }

  const limit = limitOverride ? Number(limitOverride) : 50;
  const offset = offsetOverride ? Number(offsetOverride) : 0;
  if (limit) {
    list = list.slice(offset, offset + limit);
  }
  return { statusCode: 200, matchList: list };
});
