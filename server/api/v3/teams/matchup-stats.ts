import { getTeamMatchupStats } from "~/server/service";
import { ZGetAllTeamMatchupsParams } from "~/types";

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, ZGetAllTeamMatchupsParams.parse);
  const { teams, matchupStats } = getTeamMatchupStats(query);

  return responseData({ teams, matchupStats });
});
