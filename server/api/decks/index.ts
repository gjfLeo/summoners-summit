import { deckById } from "../../data";

export default defineEventHandler((event) => {
  return { code: 0, deckList: Object.values(deckById) };
});
