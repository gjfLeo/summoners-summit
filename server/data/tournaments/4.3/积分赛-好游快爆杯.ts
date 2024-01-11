import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "4.3",
  stages: [
    {
      name: "8进4",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numCharacterBanned: 1,
        numCharactersRequired: 7,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2024-01-11",
          matches: [
            {
              playerA: "小铭同学",
              playerB: "RedY",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["林尼", "菲谢尔", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "刻晴", "若陀龙王"],
                  playerBCharacters: ["夜兰", "丽莎", "「女士」"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "无相之雷", "若陀龙王"],
                  playerBCharacters: ["夜兰", "丽莎", "「女士」"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "无相之雷", "若陀龙王"],
                  playerBCharacters: ["夜兰", "八重神子", "「女士」"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "bagua",
              playerB: "太一",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["「女士」", "雷音权现", "达达利亚"],
                  playerBCharacters: ["「女士」", "雷音权现", "莫娜"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "雷音权现", "达达利亚"],
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["刻晴", "行秋", "神里绫华"],
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["刻晴", "行秋", "神里绫华"],
                  playerBCharacters: ["班尼特", "雷音权现", "若陀龙王"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
