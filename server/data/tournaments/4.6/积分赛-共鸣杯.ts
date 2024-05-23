import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "共鸣杯",
  type: "全民积分赛",
  gameVersion: "4.6",
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
          name: "",
          date: "2024-05-13",
          matches: [
            {
              playerA: "喵帕斯",
              playerB: "铃紫",
              video: "https://www.bilibili.com/video/BV1us421P7TD",
              banned: [
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["莫娜", "早柚", "优菈"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["瑶瑶", "深渊使徒·激流", "久岐忍"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "唐傀",
              playerB: "WinSoon",
              video: "https://www.bilibili.com/video/BV1aD421A7pC",
              banned: [
                {
                  playerACharacters: ["莫娜", "「女士」", "雷音权现"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["林尼", "珐露珊", "琳妮特"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "帷幕帷幕帷幕",
              playerB: "打牌哥",
              video: "https://www.bilibili.com/video/BV17U411f7zy",
              banned: [
                {
                  playerACharacters: ["班尼特", "可莉", "雷音权现"],
                  playerBCharacters: ["久岐忍", "林尼", "瑶瑶"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "珐露珊", "琳妮特"],
                  playerBCharacters: ["托马", "铁甲熔火帝皇", "雷音权现"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["林尼", "珐露珊", "琳妮特"],
                  playerBCharacters: ["莱依拉", "芭芭拉", "那维莱特"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "卡密sama",
              playerB: "雪国",
              video: "https://www.bilibili.com/video/BV1Gz42127kY",
              banned: [
                {
                  playerACharacters: ["芭芭拉", "莱依拉", "那维莱特"],
                  playerBCharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                },
              ],
              games: [
                {
                  playerACharacters: ["夜兰", "重云", "雷泽"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "重云", "雷泽"],
                  playerBCharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
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
      name: "8进4",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2024-05-14",
          matches: [
            {
              playerA: "雪国",
              playerB: "Tobby",
              video: "https://www.bilibili.com/video/BV1sw4m1X7ix",
              banned: [
                {
                  playerACharacters: ["莫娜", "「女士」", "雷音权现"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["班尼特", "雷音权现", "林尼"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "深渊使徒·激流", "瑶瑶"],
                  playerBCharacters: ["班尼特", "雷音权现", "林尼"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "喵帕斯",
              playerB: "明彰先生",
              video: "https://www.bilibili.com/video/BV1wE421G77s",
              banned: [
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["莱依拉", "芭芭拉", "那维莱特"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["林尼", "琳妮特", "珐露珊"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "重云", "雷泽"],
                  playerBCharacters: ["林尼", "琳妮特", "珐露珊"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["久岐忍", "深渊使徒·激流", "若陀龙王"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "早柚", "优菈"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["林尼", "琳妮特", "珐露珊"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2024-05-15",
          matches: [
            {
              playerA: "桔梗",
              playerB: "WinSoon",
              video: "https://www.bilibili.com/video/BV1UJ4m1N76k",
              banned: [
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["深渊使徒·激流", "班尼特", "千年珍珠骏麟"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["深渊使徒·激流", "班尼特", "千年珍珠骏麟"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["深渊使徒·激流", "班尼特", "千年珍珠骏麟"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["林尼", "珐露珊", "琳妮特"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "打牌哥",
              playerB: "不更鸟",
              video: "https://www.bilibili.com/video/BV1w1421B7yd",
              banned: [
                {
                  playerACharacters: ["莫娜", "早柚", "优菈"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "林尼", "瑶瑶"],
                  playerBCharacters: ["班尼特", "雷音权现", "可莉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["托马", "铁甲熔火帝皇", "雷音权现"],
                  playerBCharacters: ["班尼特", "雷音权现", "可莉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["班尼特", "雷音权现", "可莉"],
                  starter: "A",
                  winner: "A",
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
        numDecks: 4,
        numDecksBanned: 1,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-05-18",
          matches: [
            {
              playerA: "桔梗",
              playerB: "打牌哥",
              video: "https://www.bilibili.com/video/BV1cJ4m1P7BR",
              banned: [
                {
                  playerACharacters: ["夜兰", "重云", "雷泽"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["久岐忍", "林尼", "瑶瑶"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["托马", "铁甲熔火帝皇", "雷音权现"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["托马", "铁甲熔火帝皇", "雷音权现"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Tobby",
              playerB: "明彰先生",
              video: "https://www.bilibili.com/video/BV15U411Z7H1",
              banned: [
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["莫娜", "早柚", "优菈"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "雷音权现", "林尼"],
                  playerBCharacters: ["久岐忍", "深渊使徒·激流", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["久岐忍", "深渊使徒·激流", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["莱依拉", "那维莱特", "芭芭拉"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["林尼", "琳妮特", "珐露珊"],
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
      name: "决赛",
      rules: {
        numDecks: 5,
        numDecksBanned: 1,
        numGames: 7,
        mode: "Conquest",
      },
      parts: [
        {
          name: "https://www.bilibili.com/video/BV1di421D7pq",
          date: "2024-05-19",
          matches: [
            {
              playerA: "Tobby",
              playerB: "桔梗",
              banned: [
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["莫娜", "「女士」", "雷音权现"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莫娜", "早柚", "优菈"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "早柚", "优菈"],
                  playerBCharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "雷音权现", "林尼"],
                  playerBCharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["林尼", "珐露珊", "琳妮特"],
                  starter: "B",
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
