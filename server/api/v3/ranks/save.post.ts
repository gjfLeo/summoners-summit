import { z } from "zod";
import { ZRanks } from "~/types/data";

export default defineEventHandler(async (event) => {
  const { ranks } = await readValidatedBody(event, z.object({ ranks: ZRanks }).parse);
  saveRanks(ranks);

  ranks.ranks.forEach(({ uid, nickname }) => {
    const player = getPlayerByUid(uid);
    if (player) {
      if (player.uniqueName !== nickname && !player.aliases.includes(nickname)) {
        player.aliases = [...player.aliases, nickname];
        savePlayer(player);
      }
    }
    else {
      savePlayer({
        uniqueName: nickname,
        aliases: [],
        uids: [uid],
      });
    }
  });

  return responseOk();
});
