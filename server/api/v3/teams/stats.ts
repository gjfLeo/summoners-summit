import { getTeamStatsRecords } from "~~/server/service";

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, ZGetAllTeamStatsParams.parse);
  const records = getTeamStatsRecords(query);

  return responseData({ teamStatsRecords: records });
});
