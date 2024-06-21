import { defineEventHandler, readValidatedBody } from "#imports";
import { ZTournamentSaveParams, saveTournament } from "~/server/service";
import { responseData } from "~/server/utils";

export default defineEventHandler(async (event) => {
  const params = await readValidatedBody(event, ZTournamentSaveParams.parse);
  const id = saveTournament(params);
  return responseData({ id });
});
