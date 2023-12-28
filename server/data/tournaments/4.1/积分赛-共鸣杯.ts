import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "共鸣杯",
  type: "全民积分赛",
  gameVersion: "4.1",
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
          date: "2023-10-15",
          matches: [
            {
              playerA: "皮皮猪",
              playerB: "皮皮鸭",
              video: "https://www.bilibili.com/video/BV1h34y1g7LH",
              banned: [
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["重云", "北斗", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBCharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBCharacters: ["班尼特", "愚人众·火之债务处理人", "赛诺"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "xhx",
              playerB: "明暗螺旋",
              video: "https://www.bilibili.com/video/BV1h34y1g7LH",
              banned: [
                {
                  playerACharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  playerBCharacters: ["荒泷一斗", "芭芭拉", "诺艾尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "周正福",
              playerB: "螳螂虾",
              video: "https://www.bilibili.com/video/BV1h34y1g7LH",
              banned: [
                {
                  playerACharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBCharacters: ["申鹤", "雷电将军", "重云"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["优菈", "流浪者", "莫娜"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "音尘",
              playerB: "轩谙",
              video: "https://www.bilibili.com/video/BV1h34y1g7LH",
              banned: [
                {
                  playerACharacters: ["班尼特", "可莉", "赛诺"],
                  playerBCharacters: ["雷电将军", "申鹤", "重云"],
                },
              ],
              games: [
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-10-16",
          matches: [
            {
              playerA: "majikohanatan",
              playerB: "陈某某老师",
              video: "https://www.bilibili.com/video/BV12j411x75F",
              banned: [
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBCharacters: ["优菈", "流浪者", "莫娜"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["愚人众·火之债务处理人", "胡桃", "行秋"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "今天不想吃苹果",
              playerB: "人子歌于途",
              video: "https://www.bilibili.com/video/BV12j411x75F",
              banned: [
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBCharacters: ["雷泽", "重云", "北斗"],
                },
              ],
              games: [
                {
                  playerACharacters: ["神里绫华", "宵宫", "申鹤"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "柠柠七喵",
              playerB: "Tonbo",
              video: "https://www.bilibili.com/video/BV12j411x75F",
              banned: [
                {
                  playerACharacters: ["班尼特", "宵宫", "无相之雷"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                },
              ],
              games: [
                {
                  playerACharacters: ["雷电将军", "申鹤", "迪奥娜"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷电将军", "申鹤", "迪奥娜"],
                  playerBCharacters: ["莫娜", "凝光", "芭芭拉"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "胡桃桃大魔王",
              playerB: "雨夜",
              video: "https://www.bilibili.com/video/BV12j411x75F",
              banned: [
                {
                  playerACharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBCharacters: ["重云", "雷泽", "北斗"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
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
          date: "2023-10-17",
          matches: [
            {
              playerA: "明暗螺旋",
              playerB: "皮皮鸭",
              video: "https://www.bilibili.com/video/BV1484y1d7hU",
              banned: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["重云", "北斗", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["神里绫华", "宵宫", "申鹤"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["优菈", "菲谢尔", "申鹤"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "周正福",
              playerB: "Tonbo",
              video: "https://www.bilibili.com/video/BV1484y1d7hU",
              banned: [
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                },
              ],
              games: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "可莉", "赛诺"],
                  playerBCharacters: ["纳西妲", "菲谢尔", "莫娜"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["神里绫华", "宵宫", "申鹤"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "可莉", "赛诺"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-10-18",
          matches: [
            {
              playerA: "今天不想吃苹果",
              playerB: "雨夜",
              video: "https://www.bilibili.com/video/BV1B34y1g7Zv",
              banned: [
                {
                  playerACharacters: ["重云", "北斗", "雷泽"],
                  playerBCharacters: ["重云", "雷泽", "北斗"],
                },
              ],
              games: [
                {
                  playerACharacters: ["神里绫华", "宵宫", "申鹤"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "愚人众·火之债务处理人"],
                  playerBCharacters: ["班尼特", "可莉", "赛诺"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBCharacters: ["班尼特", "可莉", "赛诺"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "音尘",
              playerB: "majikohanatan",
              video: "https://www.bilibili.com/video/BV1B34y1g7Zv",
              banned: [
                {
                  playerACharacters: ["莫娜", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
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
      name: "半决赛",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2023-10-19",
          matches: [
            {
              playerA: "周正福",
              playerB: "皮皮鸭",
              video: "https://www.bilibili.com/video/BV1zj411v7L1",
              banned: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["重云", "北斗", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["神里绫华", "宵宫", "申鹤"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["神里绫华", "宵宫", "申鹤"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "音尘",
              playerB: "今天不想吃苹果",
              video: "https://www.bilibili.com/video/BV1zj411v7L1",
              banned: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "可莉", "赛诺"],
                  playerBCharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["神里绫华", "宵宫", "申鹤"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
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
        numCharactersRequired: 11,
        numGames: 7,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-10-21",
          matches: [
            {
              playerA: "音尘",
              playerB: "皮皮鸭",
              video: "https://www.bilibili.com/video/BV1TH4y197KD",
              banned: [
                {
                  playerACharacters: ["班尼特", "可莉", "赛诺"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "北斗", "雷泽"],
                  playerBCharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "莫娜", "纳西妲"],
                  playerBCharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "八重神子"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "八重神子"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "迪奥娜"],
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
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
