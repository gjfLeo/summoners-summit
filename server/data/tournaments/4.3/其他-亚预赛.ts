import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "亚洲邀请赛预选赛",
  gameVersion: "4.3",
  stages: [
    {
      name: "焦点桌",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2023-12-29",
          matches: [
            {
              playerA: "洛甄黎",
              playerB: "LL起翼夜鹰",
              video: "https://www.bilibili.com/video/BV1Aa4y1z7mj",
              games: [
                {
                  playerACharacters: ["莫娜", "优菈", "流浪者"],
                  playerBCharacters: ["夜兰", "「女士」", "无相之雷"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "琴", "琳妮特"],
                  playerBCharacters: ["夜兰", "「女士」", "无相之雷"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["迪希雅", "琴", "琳妮特"],
                  playerBCharacters: ["菲谢尔", "莫娜", "纳西妲"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "古明地觉",
              playerB: "子祺粨特",
              video: "https://www.bilibili.com/video/BV1Aa4y1z7mj",
              games: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "本吃包",
              playerB: "子祺粨特",
              video: "https://www.bilibili.com/video/BV1Aa4y1z7mj",
              games: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-12-30",
          matches: [
            {
              playerA: "曲误周郎",
              playerB: "古明地觉",
              video: "https://www.bilibili.com/video/BV1Re411q7Q3",
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["神里绫华", "夜兰", "莫娜"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["神里绫华", "夜兰", "莫娜"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "小王",
              playerB: "LL起翼夜鹰",
              video: "https://www.bilibili.com/video/BV1Re411q7Q3",
              games: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "若陀龙王"],
                  playerBCharacters: ["夜兰", "「女士」", "无相之雷"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "若陀龙王"],
                  playerBCharacters: ["林尼", "班尼特", "雷音权现"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "LL起翼夜鹰",
              playerB: "曲误周郎",
              video: "https://www.bilibili.com/video/BV11N4y1x7wS",
              games: [
                {
                  playerACharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "焦点桌",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY3",
          date: "2023-12-31",
          matches: [
            {
              playerA: "音尘",
              playerB: "皮皮猪",
              video: "https://www.bilibili.com/video/BV1sN4y1B7gt",
              games: [
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["琳妮特", "迪希雅", "琴"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "LL起翼夜鹰",
              playerB: "古明地觉",
              video: "https://www.bilibili.com/video/BV1sp4y1R7ye",
              games: [
                {
                  playerACharacters: ["迪希雅", "琳妮特", "琴"],
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["迪希雅", "琳妮特", "琴"],
                  playerBCharacters: ["莫娜", "流浪者", "优菈"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["莫娜", "流浪者", "优菈"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "流浪者", "优菈"],
                  playerBCharacters: ["莫娜", "流浪者", "优菈"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "流浪者", "优菈"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
