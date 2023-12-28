import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "4.1",
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
          date: "2023-10-19",
          matches: [
            {
              playerA: "亦然",
              playerB: "雪国Ink",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "刻晴", "可莉"],
                  playerBCharacters: ["优菈", "菲谢尔", "申鹤"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["神里绫华", "八重神子", "申鹤"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "喵帕斯",
              playerB: "柚柚恩",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["神里绫华", "雷电将军", "申鹤"],
                  playerBCharacters: ["莫娜", "凝光", "芭芭拉"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["神里绫华", "八重神子", "申鹤"],
                  playerBCharacters: ["莫娜", "凝光", "芭芭拉"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-10-20",
          matches: [
            {
              playerA: "Dr.666",
              playerB: "坤扬",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBCharacters: ["甘雨", "行秋", "神里绫华"],
                },
              ],
              games: [
                {
                  playerACharacters: ["雷电将军", "申鹤", "迪奥娜"],
                  playerBCharacters: ["申鹤", "雷电将军", "重云"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷电将军", "申鹤", "迪奥娜"],
                  playerBCharacters: ["申鹤", "雷电将军", "优菈"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerBCharacters: ["申鹤", "雷电将军", "优菈"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "帝降北渚",
              playerB: "LL起翼夜鹰",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["雷电将军", "申鹤", "重云"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                },
              ],
              games: [
                {
                  playerACharacters: ["流浪者", "莫娜", "优菈"],
                  playerBCharacters: ["北斗", "雷泽", "重云"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷电将军", "香菱", "纳西妲"],
                  playerBCharacters: ["宵宫", "申鹤", "神里绫华"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["流浪者", "莫娜", "优菈"],
                  playerBCharacters: ["宵宫", "申鹤", "神里绫华"],
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
          date: "2023-10-21",
          matches: [
            {
              playerA: "喵帕斯",
              playerB: "坤扬",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["刻晴", "班尼特", "可莉"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBCharacters: ["班尼特", "可莉", "刻晴"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "八重神子"],
                  playerBCharacters: ["班尼特", "可莉", "刻晴"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "八重神子"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "帝降北渚",
              playerB: "雪国Ink",
              video: "",
              banned: [
                {
                  playerACharacters: ["莫娜", "芭芭拉", "凝光"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                },
              ],
              games: [
                {
                  playerACharacters: ["雷电将军", "香菱", "纳西妲"],
                  playerBCharacters: ["凝光", "迪希雅", "钟离"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["八重神子", "申鹤", "神里绫华"],
                  playerBCharacters: ["珊瑚宫心海", "芭芭拉", "诺艾尔"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["雷电将军", "香菱", "纳西妲"],
                  playerBCharacters: ["珊瑚宫心海", "芭芭拉", "诺艾尔"],
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
      name: "决赛",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numCharactersBanned: 1,
        numCharactersRequired: 9,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-10-22",
          matches: [
            {
              playerA: "喵帕斯",
              playerB: "雪国Ink",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "八重神子"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "凝光"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "凝光"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["荒泷一斗", "珊瑚宫心海", "诺艾尔"],
                  playerBCharacters: ["雷泽", "宵宫", "赛诺"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["荒泷一斗", "珊瑚宫心海", "诺艾尔"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
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
