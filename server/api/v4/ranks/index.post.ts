import { saveRanks, saveRanksPlayer } from "~~/server/service";

const ZBody = ZRanks;

export default defineEventHandler(async (event) => {
  const ranks = await readValidatedBody(event, ZBody.parse);

  await Promise.all([
    saveRanks(ranks),
    saveRanksPlayer(ranks),
  ]);

  return {};
});
