import { z } from "zod";
import { ZPlayerId } from "~/types/data";

const ZParams = z.object({
  sourceId: ZPlayerId,
  targetId: ZPlayerId,
});

export default defineEventHandler(async (event) => {
  const { sourceId, targetId } = await readValidatedBody(event, ZParams.parse);
  const source = getPlayer(sourceId);
  const target = getPlayer(targetId);
  if (!source || !target) {
    return responseErrorCode("PLAYER_NOT_FOUND");
  }
  target.uids = target.uids.concat(source.uids);
  const existsNicknames = Object.fromEntries([target.uniqueName, ...target.aliases].map(n => [n, true]));
  target.aliases = target.aliases.concat([source.uniqueName, ...source.aliases].filter(n => !existsNicknames[n]));

  deletePlayer(sourceId);
  savePlayer(target);
  return responseOk();
});
