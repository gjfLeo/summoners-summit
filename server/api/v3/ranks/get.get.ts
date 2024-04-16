import { ZRanks } from "~/types/data";

const ZParams = ZRanks.pick({ id: true });

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZParams.parse);
  const { id } = params;

  const ranks = getRanks(id);
  return responseData({ ranks });
});
