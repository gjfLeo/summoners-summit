import { getActionCards, getCharacterCards } from "~~/server/service";

export default defineEventHandler(async () => {
  return responseData({
    characterCards: await getCharacterCards(),
    actionCards: await getActionCards(),
  });
});
