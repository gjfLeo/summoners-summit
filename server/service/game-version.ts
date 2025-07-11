import type { GameVersion, GameVersionId } from "~/types";
import { ZGameVersionData } from "~/types";
import { defineGetMiscStorage } from "./storage";

const getGameVersionData = defineGetMiscStorage("game-versions", ZGameVersionData);

export async function getGameVersionList(): Promise<GameVersion[]> {
  const gameVersionData = await getGameVersionData();
  return Object.values(gameVersionData).sort((a, b) => b.id.localeCompare(a.id));
}

export async function getLatestGameVersionId(): Promise<GameVersionId> {
  const gameVersionList = await getGameVersionList();
  return gameVersionList[0].id;
}
