/** @deprecated */
export function getAchievementList(): Achievement[] {
  return ZAchievement.array().parse(readData<Achievement[]>("misc/achievements", []));
}

export async function getStorageAchievementList(): Promise<Achievement[]> {
  const data = await readDataV2("misc/achievements", []);
  return ZAchievement.array().parse(data);
}

export function saveAchievementList(achievementList: Achievement[]): void {
  writeData("misc/achievements", ZAchievement.array().parse(achievementList));
}

export async function getPlayerAchievements(playerId: PlayerId): Promise<Achievement[]> {
  const achievementList = await getStorageAchievementList();
  return achievementList.filter(achievement => achievement.playerIds.includes(playerId));
}
