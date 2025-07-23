async function getGameVersionData() {
  const data = await readDataV2("misc/game-versions");
  return ZGameVersionData.parse(data);
}

export async function getGameVersionList(): Promise<GameVersion[]> {
  const gameVersionData = await getGameVersionData();
  return Object.values(gameVersionData).sort((a, b) => b.id.localeCompare(a.id));
}

export async function getLatestGameVersionId(): Promise<GameVersionId> {
  const gameVersionList = await getGameVersionList();
  return gameVersionList[0].id;
}
