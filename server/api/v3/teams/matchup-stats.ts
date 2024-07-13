import { getTeamMatchupStats } from "~/server/service";
import { ZGetTeamMatchupsParams } from "~/types";

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, ZGetTeamMatchupsParams.parse);
  const { teams, matchupStats } = getTeamMatchupStats(query);

  return responseData({ teams, matchupStats });
});
