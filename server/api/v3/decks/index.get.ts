import { getGameList } from "~/server/service";
import type { DeckCode, GetDeckListResponse, GetDeckListResponseItem } from "~/types";
import { ZGetDeckListParams } from "~/types";
import { sorter } from "~/utils/statistics";

export default defineEventHandler(async (event) => {
  const { teamId, offset = 0, limit = 100 } = await getValidatedQuery(event, ZGetDeckListParams.parse);

  const record: Record<DeckCode, GetDeckListResponseItem> = {};
  function getRecordItem(deckCode: DeckCode) {
    return record[deckCode] ??= {
      deckCode,
      numGames: 0,
      numGamesWin: 0,
    };
  }

  getGameList()
    .filter(game => !game.isPrePatch)
    .forEach((game) => {
      for (const p of ["A", "B"] as const) {
        const deckCode = game[`player${p}Deck`].deckCode;
        if (!deckCode) continue;
        if (teamId && game[`player${p}Deck`].teamId !== teamId) continue;
        const item = getRecordItem(deckCode);
        item.numGames++;
        if (game.winner === p) {
          item.numGamesWin++;
        };
      }
    });

  let deckList = Object.values(record).sort(sorter("numGames")).reverse();
  if (limit !== -1) {
    deckList = deckList.slice(offset, offset + limit);
  }

  return responseData<GetDeckListResponse>({ deckList });
});
