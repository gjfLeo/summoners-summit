import { ZTournamentSaveParams } from "~/server/utils/tournament";

export default defineEventHandler(async (event) => {
  const params = await readValidatedBody(event, ZTournamentSaveParams.parse);
  const id = saveTournament(params);
  return responseData({ id });
});
