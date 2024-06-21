import { defineEventHandler } from "#imports";
import { getRanksList } from "~/server/service";
import { responseData } from "~/server/utils";

export default defineEventHandler(async () => {
  const rankIds = getRanksList().map(rank => rank.id);
  return responseData({ rankIds });
});
