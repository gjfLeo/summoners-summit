import { cleanUpPlayers } from "~/server/utils/players";

export default defineEventHandler(async () => {
  cleanUpPlayers();

  return responseOk();
});
