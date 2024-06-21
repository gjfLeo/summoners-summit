import { defineEventHandler, getValidatedQuery } from "#imports";
import { getRanks } from "~/server/service";
import { responseData } from "~/server/utils";
import { ZRanks } from "~/types";

const ZParams = ZRanks.pick({ id: true });

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZParams.parse);
  const { id } = params;

  const ranks = getRanks(id);
  return responseData({ ranks });
});
