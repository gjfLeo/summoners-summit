import { getActionCards, getCharacterCards } from "~/server/service";

export default defineEventHandler(() => {
  return responseData({
    characterCards: getCharacterCards(),
    actionCards: getActionCards(),
  });
});
