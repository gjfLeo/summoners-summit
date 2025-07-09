import type { GameVersion, GameVersionId } from "~/types";
import { ZGameVersionData } from "~/types";

export async function getGameVersionList(): Promise<GameVersion[]> {
  const gameVersionStorage = await useStorage("assets:data").getItem("misc:game-versions.json");
  const gameVersionData = ZGameVersionData.parse(gameVersionStorage);
  return Object.values(gameVersionData).sort((a, b) => b.id.localeCompare(a.id));
}

export async function getLatestGameVersionId(): Promise<GameVersionId> {
  const gameVersionList = await getGameVersionList();
  return gameVersionList[0].id;
}
