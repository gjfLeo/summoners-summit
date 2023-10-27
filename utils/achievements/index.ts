interface AchievementInfo {
  cardBackName: string;
  cardBackImage: string;
}

function defineAchievementInfo(info: AchievementInfo) {
  return info;
}

export const ALL_ACHIEVEMENTS = {
  "season-1-crown": defineAchievementInfo({
    cardBackName: "龙脊雪山·冠冕",
    cardBackImage: "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Item_Dragonspine_Crown_Card_Back.png",
  }),
} as const;

export type PlayerAchievement = keyof typeof ALL_ACHIEVEMENTS;
