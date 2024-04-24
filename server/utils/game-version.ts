import { ZGameVersionData } from "~/types/data";
import type { GameVersion, GameVersionId } from "~/types/data";

export function getGameVersionList() {
  const gameVersionData = ZGameVersionData.parse(readData<Record<GameVersionId, GameVersion>>("misc/game-versions"));
  return Object.values(gameVersionData);
}
