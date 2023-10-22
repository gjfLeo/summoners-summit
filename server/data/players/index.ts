const playerNicknameMapRaw: Record<string, string> = {
  /*
    在这里添加玩家名称映射：
    "比赛中昵称": "玩家统一昵称",
  */

  "夜莺": "LL起翼夜鹰",
  "RR夜莺": "LL起翼夜鹰",
  "RR抒情夜莺": "LL起翼夜鹰",
  "夜鹰": "LL起翼夜鹰",
  
  "卡密sama42": "卡密sama",
};

export const playerNicknameMap = Object.fromEntries(
  Object.entries(playerNicknameMapRaw)
    .map(([alias, nickname]) => {
      while (playerNicknameMapRaw[nickname]) {
        nickname = playerNicknameMapRaw[nickname];
      }
      return [alias, nickname];
    }),
);
