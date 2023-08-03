import { deckById } from "../../data";

export default defineEventHandler(() => {
  return { code: 0, deckList: Object.values(deckById) };
});
