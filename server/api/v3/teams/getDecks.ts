import { getTeamDecks } from "~/server/service";
import { ZGetTeamDecksParams } from "~/types";

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZGetTeamDecksParams.parse);
  const decks = getTeamDecks(params);

  return responseData({ decks });
});
