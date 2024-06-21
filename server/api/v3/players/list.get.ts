import { defineEventHandler } from "#imports";
import { getPlayerList } from "~/server/service";
import { responseData } from "~/server/utils";

export default defineEventHandler(() => {
  const players = getPlayerList();
  return responseData({ players });
});
