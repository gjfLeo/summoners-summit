import { getTeamMatchupsRecords } from "~/server/service";
import { ZGetTeamMatchupsParams } from "~/types";

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, ZGetTeamMatchupsParams.parse);
  const records = getTeamMatchupsRecords(query);

  return responseData({ teamMatchupRecords: records });
});
