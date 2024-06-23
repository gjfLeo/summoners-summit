import { getPlayerList } from "~/server/service";

export default defineEventHandler(() => {
  const players = getPlayerList();
  return responseData({ players });
});
