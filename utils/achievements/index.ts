interface AchievementInfo {
  cardBackName: string;
  cardBackImage: string;
  description: string;
}

function defineAchievementInfo(info: AchievementInfo) {
  return info;
}

export const ALL_ACHIEVEMENTS = {
  "season-1-crown": defineAchievementInfo({
    cardBackName: "龙脊雪山·冠冕",
    cardBackImage: "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Item_Dragonspine_Crown_Card_Back.png",
    description: "在全民赛事第一赛季的影幻杯中取得十六强。",
  }),
} as const;

export type PlayerAchievement = keyof typeof ALL_ACHIEVEMENTS;
