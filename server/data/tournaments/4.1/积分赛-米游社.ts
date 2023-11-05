import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「燃斗无双」米游社",
  type: "全民积分赛",
  gameVersion: "4.1",
  stages: [
    {
      name: "8进4",
      rules: [
        "征服",
        "BO3",
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
      ],
      parts: [
        {
          name: "",
          date: "2023-11-04",
          matches: [
            {
              playerA: "猕迷糊糊",
              playerB: "梦影疏横",
              video: "",
              games: [
                {
                  playerACharacters: ["荒泷一斗", "诺艾尔", "迪希雅"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["荒泷一斗", "诺艾尔", "迪希雅"],
                  playerBCharacters: ["荒泷一斗", "诺艾尔", "迪希雅"],
                  starter: "",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "莉莉芭",
              playerB: "Tobby",
              video: "",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
                  playerBCharacters: ["申鹤", "雷电将军", "重云"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["荒泷一斗", "诺艾尔", "迪希雅"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "鹿小喵不吃鱼",
              playerB: "岚落尘 ",
              video: "",
              games: [
                {
                  playerACharacters: ["荒泷一斗", "诺艾尔", "迪希雅"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "取悦诗风吟",
              playerB: "阿楼Riricho",
              video: "",
              games: [
                {
                  playerACharacters: ["坎蒂丝", "菲谢尔", "达达利亚"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["荒泷一斗", "诺艾尔", "迪希雅"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["荒泷一斗", "诺艾尔", "迪希雅"],
                  playerBCharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "纳西妲"],
                  starter: "",
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
      rules: [
        "征服",
        "BO3",
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
      ],
      parts: [
        {
          name: "",
          date: "2023-11-05",
          matches: [
            {
              playerA: "阿楼Riricho",
              playerB: "鹿小喵不吃鱼 ",
              video: "",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["班尼特", "可莉", "刻晴"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["可莉", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["班尼特", "可莉", "刻晴"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "梦影疏横",
              playerB: "莉莉芭",
              video: "",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["莫娜", "优菈", "流浪者"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["神里绫华", "行秋", "重云"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["荒泷一斗", "诺艾尔", "迪希雅"],
                  playerBCharacters: ["神里绫华", "行秋", "重云"],
                  starter: "",
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
      rules: [
        "征服",
        "BO5",
        ["禁用阵容", "对阵双方各准备4套阵容，禁用对手一套阵容"],
      ],
      parts: [
        {
          name: "",
          date: "2023-11-05",
          matches: [
            {
              playerA: "阿楼Riricho",
              playerB: "莉莉芭",
              video: "",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["荒泷一斗", "诺艾尔", "迪希雅"],
                  starter: "",
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
