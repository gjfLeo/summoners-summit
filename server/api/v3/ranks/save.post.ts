import { z } from "zod";

export default defineEventHandler(async (event) => {
  const { ranks } = await readValidatedBody(event, z.object({ ranks: ZRanks }).parse);
  saveRanks(ranks);

  ranks.ranks.forEach((rank) => {
    savePlayerNicknameByUid(rank);
  });

  return responseOk({});
});
