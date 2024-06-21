import { ZGameVersionData } from "~/types";
import type { GameVersion, GameVersionId } from "~/types";
import { readData } from "~/server/utils";

export function getGameVersionList() {
  const gameVersionData = ZGameVersionData.parse(readData<Record<GameVersionId, GameVersion>>("misc/game-versions"));
  return Object.values(gameVersionData);
}
