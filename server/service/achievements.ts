import type { Achievement, PlayerId } from "~/types";
import { ZAchievement } from "~/types";

export function getAchievementList(): Achievement[] {
  return ZAchievement.array().parse(readData<Achievement[]>("misc/achievements", []));
}

export function saveAchievementList(achievementList: Achievement[]): void {
  writeData("misc/achievements", ZAchievement.array().parse(achievementList));
}

export function getPlayerAchievements(playerId: PlayerId): Achievement[] {
  const achievementList = getAchievementList();
  return achievementList.filter(achievement => achievement.playerIds.includes(playerId));
}
