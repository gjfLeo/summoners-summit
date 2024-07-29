import { getTeamStatsRecords } from "~/server/service";
import { ZGetAllTeamStatsParams } from "~/types";

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, ZGetAllTeamStatsParams.parse);
  const records = getTeamStatsRecords(query);

  return responseData({ teamStatsRecords: records });
});
