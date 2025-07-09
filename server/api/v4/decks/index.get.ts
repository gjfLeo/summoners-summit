import type { DeckCode } from "~/types";
import { z } from "zod";
import { getGameVersionList } from "~/server/service";
import { getDeckCodes } from "~/server/service/deck";
import { ZGameVersionId } from "~/types";

const ZParams = z.object({
  gameVersion: ZGameVersionId.optional(),
});

export default defineEventHandler(async (event): Promise<DeckCode[]> => {
  const query = await getValidatedQuery(event, ZParams.parse);

  const gameVersion = query.gameVersion;
  if (gameVersion) {
    return await getDeckCodes({ gameVersion });
  }
  else {
    const gameVersionList = await getGameVersionList();
    for (const gameVersion of gameVersionList) {
      const deckCodes = await getDeckCodes({ gameVersion: gameVersion.id });
      if (deckCodes.length > 0) {
        return deckCodes;
      }
    }
    return [];
  }
});
