import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "共鸣杯",
  type: "全民积分赛",
  gameVersion: "4.2",
  stages: [
    {
      name: "16进8",
      rules: [
        "BO3",
        "征服",
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
      ],
      parts: [
        {
          name: "DAY1",
          date: "2023-11-27",
          matches: [
            {
              playerA: "全都是失误",
              playerB: "充钱了吗",
              video: "https://www.bilibili.com/video/BV1KC4y1N7VU",
              banned: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "愚人众·火之债务处理人", "菲谢尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["雷电将军", "重云", "申鹤"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "流浪者", "优菈"],
                  playerBCharacters: ["雷电将军", "重云", "申鹤"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "流浪者", "优菈"],
                  playerBCharacters: ["莫娜", "纳西妲", "妮露"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "明暗螺旋",
              playerB: "雪国Ink",
              video: "https://www.bilibili.com/video/BV1KC4y1N7VU",
              banned: [
                {
                  playerACharacters: ["班尼特", "重云", "无相之雷"],
                  playerBCharacters: ["行秋", "重云", "神里绫华"],
                },
              ],
              games: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["达达利亚", "宵宫", "神里绫人"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "玖哀",
              playerB: "冰红茶|荧",
              video: "https://www.bilibili.com/video/BV1KC4y1N7VU",
              banned: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["妮露", "纳西妲", "莫娜"],
                  playerBCharacters: ["班尼特", "宵宫", "无相之雷"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["雷电将军", "香菱", "刻晴"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-11-28",
          matches: [
            {
              playerA: "c",
              playerB: "镜莲华的葬送",
              video: "https://www.bilibili.com/video/BV1pC4y1A7sm",
              banned: [
                {
                  playerACharacters: ["重云", "雷泽", "北斗"],
                  playerBCharacters: ["行秋", "重云", "优菈"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "某七圣召唤选手",
              playerB: "莉莉芭",
              video: "https://www.bilibili.com/video/BV1G94y1E7nr",
              banned: [
                {
                  playerACharacters: ["北斗", "神里绫华", "重云"],
                  playerBCharacters: ["班尼特", "可莉", "刻晴"],
                },
              ],
              games: [
                {
                  playerACharacters: ["宵宫", "达达利亚", "神里绫人"],
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["宵宫", "达达利亚", "神里绫人"],
                  playerBCharacters: ["芭芭拉", "诺艾尔", "荒泷一斗"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "zhxx",
              playerB: "Haku",
              video: "https://www.bilibili.com/video/BV1Hj411j7Fv",
              banned: [
                {
                  playerACharacters: ["班尼特", "宵宫", "无相之雷"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["凝光", "芭芭拉", "诺艾尔"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["凝光", "芭芭拉", "诺艾尔"],
                  playerBCharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "终末我家",
              playerB: "古明地觉",
              video: "https://www.bilibili.com/video/BV1Gb4y1K7FT",
              banned: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["行秋", "诺艾尔", "芭芭拉"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
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
      name: "8进4",
      rules: [
        "BO5",
        "征服",
        ["禁用阵容", "对阵双方各准备4套阵容，禁用对手一套阵容"],
      ],
      parts: [
        {
          name: "DAY1",
          date: "2023-12-29",
          matches: [
            {
              playerA: "明暗螺旋",
              playerB: "莉莉芭",
              video: "https://www.bilibili.com/video/BV1hQ4y1x73c",
              banned: [
                {
                  playerACharacters: ["莫娜", "妮露", "纳西妲"],
                  playerBCharacters: ["行秋", "莫娜", "神里绫华"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "愚人众·火之债务处理人", "无相之雷"],
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "愚人众·火之债务处理人", "无相之雷"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "愚人众·火之债务处理人", "无相之雷"],
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["达达利亚", "宵宫", "神里绫人"],
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "玖哀",
              playerB: "古明地觉",
              video: "https://www.bilibili.com/video/BV1wC4y117e5",
              banned: [
                {
                  playerACharacters: ["班尼特", "宵宫", "无相之雷"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["妮露", "纳西妲", "莫娜"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷电将军", "香菱", "刻晴"],
                  playerBCharacters: ["行秋", "诺艾尔", "芭芭拉"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["妮露", "纳西妲", "莫娜"],
                  playerBCharacters: ["行秋", "诺艾尔", "芭芭拉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["行秋", "诺艾尔", "芭芭拉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["重云", "雷泽", "北斗"],
                  starter: "B",
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
