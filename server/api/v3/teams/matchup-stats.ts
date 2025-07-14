import { getTeamMatchupStats } from "~~/server/service";

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, ZGetAllTeamMatchupsParams.parse);
  const { teams, matchupStats } = getTeamMatchupStats(query);

  return responseData({ teams, matchupStats });
});
