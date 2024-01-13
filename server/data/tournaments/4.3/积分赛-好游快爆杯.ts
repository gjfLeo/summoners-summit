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
        numCharactersBanned: 1,
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
                  playerACharacters: ["芭芭拉"],
                  playerBCharacters: ["雷音权现"],
                },
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
                  playerACharacters: ["纳西妲"],
                  playerBCharacters: ["夜兰"],
                },
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
        {
          name: "DAY2",
          date: "2024-01-12",
          matches: [
            {
              playerA: "叶叁伍",
              playerB: "零之启",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["夜兰"],
                  playerBCharacters: ["雷音权现"],
                },
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                },
              ],
              games: [
                {
                  playerACharacters: ["芭芭拉", "若陀龙王", "莱依拉"],
                  playerBCharacters: ["班尼特", "刻晴", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["芭芭拉", "诺艾尔", "行秋"],
                  playerBCharacters: ["班尼特", "刻晴", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "胡芙芙大魔王",
              playerB: "雪国Ink",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["班尼特"],
                  playerBCharacters: ["菲谢尔"],
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                },
              ],
              games: [
                {
                  playerACharacters: ["九条裟罗", "莫娜", "林尼"],
                  playerBCharacters: ["林尼", "雷音权现", "可莉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["九条裟罗", "莫娜", "林尼"],
                  playerBCharacters: ["莫娜", "流浪者", "优菈"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "半决赛",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numCharactersBanned: 1,
        numCharactersRequired: 7,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-01-13",
          matches: [
            {
              playerA: "小铭同学",
              playerB: "太一",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["班尼特"],
                  playerBCharacters: ["雷音权现"],
                },
                {
                  playerACharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["「女士」", "夜兰", "丽莎"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "可莉"],
                  playerBCharacters: ["纳西妲", "莫娜", "妮露"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "丽莎", "「女士」"],
                  playerBCharacters: ["纳西妲", "莫娜", "妮露"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "丽莎", "「女士」"],
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "叶叁伍",
              playerB: "雪国Ink",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["班尼特"],
                  playerBCharacters: ["夜兰"],
                },
                {
                  playerACharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["行秋", "凝光", "芭芭拉"],
                },
              ],
              games: [
                {
                  playerACharacters: ["迪希雅", "琴", "琳妮特"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["迪希雅", "琴", "琳妮特"],
                  playerBCharacters: ["雷电将军", "琴", "琳妮特"],
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
