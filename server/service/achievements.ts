import { defineGetMiscStorage } from "./storage";

/** @deprecated */
export function getAchievementList(): Achievement[] {
  return ZAchievement.array().parse(readData<Achievement[]>("misc/achievements", []));
}

export const getStorageAchievementList: () => Promise<Achievement[]>
  = defineGetMiscStorage("achievements", ZAchievement.array());

export function saveAchievementList(achievementList: Achievement[]): void {
  writeData("misc/achievements", ZAchievement.array().parse(achievementList));
}

export async function getPlayerAchievements(playerId: PlayerId): Promise<Achievement[]> {
  const achievementList = await getStorageAchievementList();
  return achievementList.filter(achievement => achievement.playerIds.includes(playerId));
}
