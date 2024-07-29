import { getTeamDecks } from "~/server/service";
import { ZGetTeamExampleDeckParams } from "~/types";

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZGetTeamExampleDeckParams.parse);
  const decks = getTeamDecks(params);

  return responseData({ decks });
});
