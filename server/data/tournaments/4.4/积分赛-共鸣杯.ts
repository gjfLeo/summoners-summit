import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "共鸣杯",
  type: "全民积分赛",
  gameVersion: "4.4",
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
          date: "2024-02-18",
          matches: [
            {
              playerA: "Xxsan",
              playerB: "理塘牢桐",
              video: "https://www.bilibili.com/video/BV1vK42187qt",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["刻晴", "雷电将军", "香菱"],
                  playerBCharacters: ["班尼特", "刻晴", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerBCharacters: ["班尼特", "刻晴", "若陀龙王"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "叱咤月海鱼鱼猫",
              playerB: "吴意",
              video: "https://www.bilibili.com/video/BV13W421N7PT",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "暇月",
              playerB: "淡蓝色的瞳眸",
              video: "https://www.bilibili.com/video/BV1zZ421m7wj",
              banned: [
                {
                  playerACharacters: ["凝光", "芭芭拉", "珊瑚宫心海"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Elaina",
              playerB: "挽挽",
              video: "https://www.bilibili.com/video/BV1NW421N7DZ",
              banned: [
                {
                  playerACharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["林尼", "菲谢尔", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["雷音权现", "可莉", "班尼特"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["雷音权现", "可莉", "班尼特"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2024-02-19",
          matches: [
            {
              playerA: "贝尔格里",
              playerB: "爱吃喵的小鱼干",
              video: "https://www.bilibili.com/video/BV1yZ421m71f",
              banned: [
                {
                  playerACharacters: ["班尼特", "雷音权现", "可莉"],
                  playerBCharacters: ["林尼", "菲谢尔", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莫娜", "早柚", "雷音权现"],
                  playerBCharacters: ["班尼特", "可莉", "雷音权现"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["千年珍珠骏麟", "林尼", "若陀龙王"],
                  playerBCharacters: ["班尼特", "可莉", "雷音权现"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "小铭同学",
              playerB: "翁静",
              video: "https://www.bilibili.com/video/BV16x4y1y7Ng",
              banned: [
                {
                  playerACharacters: ["班尼特", "可莉", "雷音权现"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                },
              ],
              games: [
                {
                  playerACharacters: ["夜兰", "无相之雷", "「女士」"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Takey",
              playerB: "飞舞的流荧",
              video: "https://www.bilibili.com/video/BV11u4m1A7du",
              banned: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                },
              ],
              games: [
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["莫娜", "千年珍珠骏麟", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "千年珍珠骏麟", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "胡桃花开青雀鸣",
              playerB: "聿九音",
              video: "https://www.bilibili.com/video/BV1Lv421C7Bz",
              banned: [
                {
                  playerACharacters: ["「女士」", "莫娜", "雷音权现"],
                  playerBCharacters: ["林尼", "菲谢尔", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["雷电将军", "香菱", "刻晴"],
                  playerBCharacters: ["莫娜", "千年珍珠骏麟", "「女士」"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["班尼特", "可莉", "雷音权现"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["雷电将军", "香菱", "刻晴"],
                  playerBCharacters: ["班尼特", "可莉", "雷音权现"],
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
          date: "2024-02-20",
          matches: [
            {
              playerA: "理塘牢桐",
              playerB: "吴意",
              video: "https://www.bilibili.com/video/BV1cA4m1G7j6",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["凝光", "芭芭拉", "珊瑚宫心海"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "刻晴", "若陀龙王"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "琴", "琳妮特"],
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "刻晴", "若陀龙王"],
                  playerBCharacters: ["雷音权现", "「女士」", "夜兰"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "刻晴", "若陀龙王"],
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "暇月",
              playerB: "贝尔格里",
              video: "https://www.bilibili.com/video/BV1Uu4m1A7Ag",
              banned: [
                {
                  playerACharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["凝光", "芭芭拉", "珊瑚宫心海"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "莱依拉", "芭芭拉"],
                  playerBCharacters: ["班尼特", "雷音权现", "可莉"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "雷音权现", "可莉"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "雷音权现", "可莉"],
                  playerBCharacters: ["夜兰", "若陀龙王", "无相之冰"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "丽莎", "「女士」"],
                  playerBCharacters: ["班尼特", "雷音权现", "可莉"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "丽莎", "「女士」"],
                  playerBCharacters: ["夜兰", "若陀龙王", "无相之冰"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2024-02-21",
          matches: [
            {
              playerA: "挽挽",
              playerB: "小铭同学",
              video: "https://www.bilibili.com/video/BV1cH4y177Lv",
              banned: [
                {
                  playerACharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["珊瑚宫心海", "芭芭拉", "凝光"],
                },
              ],
              games: [
                {
                  playerACharacters: ["雷电将军", "香菱", "刻晴"],
                  playerBCharacters: ["林尼", "菲谢尔", "纳西妲"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷电将军", "香菱", "刻晴"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["芭芭拉", "凝光", "莱依拉"],
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["雷电将军", "香菱", "刻晴"],
                  playerBCharacters: ["迪希雅", "琴", "琳妮特"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "Takey",
              playerB: "胡桃花开青雀鸣",
              video: "https://www.bilibili.com/video/BV1zu4m1A7XM",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["莱依拉", "凝光", "芭芭拉"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["雷电将军", "香菱", "刻晴"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["可莉", "刻晴", "班尼特"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["可莉", "刻晴", "班尼特"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
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
        numDecks: 4,
        numDecksBanned: 1,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-02-23",
          matches: [
            {
              playerA: "理塘牢桐",
              playerB: "贝尔格里",
              video: "https://www.bilibili.com/video/BV1GJ4m1e7qd",
              banned: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["芭芭拉", "凝光", "莱依拉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["行秋", "若陀龙王", "无相之冰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "小铭同学",
              playerB: "胡桃花开青雀鸣",
              video: "https://www.bilibili.com/video/BV1a1421f7ZN",
              banned: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                },
              ],
              games: [
                {
                  playerACharacters: ["千年珍珠骏麟", "班尼特", "早柚"],
                  playerBCharacters: ["夜兰", "丽莎", "赛诺"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["莱依拉", "凝光", "芭芭拉"],
                  starter: "B",
                  winner: "D",
                },
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["千年珍珠骏麟", "班尼特", "早柚"],
                  playerBCharacters: ["莱依拉", "凝光", "芭芭拉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["莱依拉", "凝光", "芭芭拉"],
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
      name: "决赛",
      rules: {
        numDecks: 5,
        numDecksBanned: 1,
        numGames: 7,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-02-25",
          matches: [
            {
              playerA: "贝尔格里",
              playerB: "小铭同学",
              video: "https://www.bilibili.com/video/BV1EC411s72C",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["夜兰", "无相之雷", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["班尼特", "可莉", "雷音权现"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["刻晴", "雷电将军", "香菱"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "若陀龙王", "刻晴"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "若陀龙王", "刻晴"],
                  playerBCharacters: ["行秋", "若陀龙王", "无相之冰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "若陀龙王", "刻晴"],
                  playerBCharacters: ["班尼特", "可莉", "雷音权现"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "若陀龙王", "刻晴"],
                  playerBCharacters: ["刻晴", "雷电将军", "香菱"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["坎蒂丝", "千年珍珠骏麟", "优菈"],
                  playerBCharacters: ["刻晴", "雷电将军", "香菱"],
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
