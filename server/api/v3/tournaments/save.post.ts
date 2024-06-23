import { ZTournamentSaveParams, saveTournament } from "~/server/service";

export default defineEventHandler(async (event) => {
  const params = await readValidatedBody(event, ZTournamentSaveParams.parse);
  const id = saveTournament(params);
  return responseData({ id });
});
