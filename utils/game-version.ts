import type { GameVersion, GameVersionId } from "~/types";

export function getGameVersionPath(gameVersion: GameVersionId | GameVersion): string {
  if (typeof gameVersion !== "string") {
    return getGameVersionPath(gameVersion.id);
  }
  return gameVersion.replace(".", "-");
}
