import { getGameList } from "~/server/service";
import type { DeckCode } from "~/types";
import { ZGetDeckListParams } from "~/types";

export default defineEventHandler(async (event) => {
  const { teamId, offset, limit } = await getValidatedQuery(event, ZGetDeckListParams.parse);

  const deckCodeSet = new Set<DeckCode>();

  getGameList()
    .forEach((game) => {
      for (const p of ["A", "B"] as const) {
        const deckCode = game[`player${p}Deck`].deckCode;
        if (!deckCode) continue;
        if (teamId && game[`player${p}Deck`].teamId !== teamId) continue;
        deckCodeSet.add(deckCode);
      }
    });

  let decks = Array.from(deckCodeSet).sort();
  if (limit === -1) {
    decks = decks.slice(offset, offset + limit);
  }

  return responseData({ decks });
});
