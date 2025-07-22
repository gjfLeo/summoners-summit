export async function getAchievementList(): Promise<Achievement[]> {
  const data = await readDataV2<Achievement[]>("misc/achievements", []);
  return ZAchievement.array().parse(data);
}

export async function saveAchievementList(achievements: Achievement[]) {
  const data = ZAchievement.array().parse(achievements);
  return await writeDataV2("misc/achievements", data);
}

export async function getPlayerAchievements(playerId: PlayerId): Promise<Achievement[]> {
  const achievementList = await getAchievementList();
  return achievementList.filter(achievement => achievement.playerIds.includes(playerId));
}
