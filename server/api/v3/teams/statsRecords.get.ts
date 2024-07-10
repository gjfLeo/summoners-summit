import { getTeamStatsRecords } from "~/server/service/teams";
import { ZGetTeamStatsParams } from "~/types";

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, ZGetTeamStatsParams.parse);
  const records = getTeamStatsRecords(query);

  return responseData({ teamStatsRecords: records });
});
