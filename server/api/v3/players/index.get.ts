import { readDataList } from "~/server/utils/data";
import type { Player } from "~/types/data/player";

export default defineEventHandler(() => {
  return { data: readDataList<Player>("players") };
});
