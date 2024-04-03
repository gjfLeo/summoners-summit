import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "共鸣杯",
  type: "全民积分赛",
  gameVersion: "4.5",
  stages: [
    {
      name: "16进8",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2024-03-31",
          matches: [
            {
              playerA: "今天我不吃牛肉",
              playerB: "今天不想吃苹果",
              video: "https://www.bilibili.com/video/BV1Cm421E7tm",
              banned: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "胡桃桃大魔王",
              playerB: "柚柚恩",
              video: "https://www.bilibili.com/video/BV1WH4y1n7tk",
              banned: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莫娜", "枫原万叶", "「女士」"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "唯此一心",
              playerB: "Chaos",
              video: "https://www.bilibili.com/video/BV1gC411j7vU",
              banned: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "和大名",
              playerB: "舒",
              video: "https://www.bilibili.com/video/BV1nE421g7cS",
              banned: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2024-04-01",
          matches: [
            {
              playerA: "雪国Ink",
              playerB: "叶雨kana",
              video: "https://www.bilibili.com/video/BV1YK421Y7Qe",
              banned: [
                {
                  playerACharacters: ["莱依拉", "那维莱特", "芭芭拉"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Dr.666",
              playerB: "审判长",
              video: "https://www.bilibili.com/video/BV1Yx421U7kZ",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["愚人众·雷萤术士", "莫娜", "纳西妲"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "弦聆aeon",
              playerB: "长岛原来没有雪",
              video: "https://www.bilibili.com/video/BV1hf421o7FF",
              banned: [
                {
                  playerACharacters: ["莫娜", "枫原万叶", "「女士」"],
                  playerBCharacters: ["愚人众·雷萤术士", "莫娜", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBCharacters: ["雷电将军", "申鹤", "重云"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["雷电将军", "申鹤", "重云"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "忘归草",
              playerB: "冰红茶心甘晴愿",
              video: "https://www.bilibili.com/video/BV1ZA4m1c764",
              banned: [
                {
                  playerACharacters: ["「女士」", "雷音权现", "莫娜"],
                  playerBCharacters: ["「女士」", "雷音权现", "莫娜"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "可莉", "提纳里"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "可莉", "提纳里"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
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
