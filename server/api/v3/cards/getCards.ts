import { defineEventHandler } from "#imports";
import { getActionCards, getCharacterCards } from "~/server/service";
import { responseData } from "~/server/utils";

export default defineEventHandler(() => {
  return responseData({
    characterCards: getCharacterCards(),
    actionCards: getActionCards(),
  });
});
