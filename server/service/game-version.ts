import { ZGameVersionData } from "~/types";
import type { GameVersion, GameVersionId } from "~/types";

export function getGameVersionList() {
  const gameVersionData = ZGameVersionData.parse(readData<Record<GameVersionId, GameVersion>>("misc/game-versions"));
  return Object.values(gameVersionData).toSorted((a, b) => b.id.localeCompare(a.id)).slice(0, 4);
}
