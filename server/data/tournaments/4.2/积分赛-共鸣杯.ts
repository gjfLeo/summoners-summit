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
          name: "day1",
          date: "2023-11-27",
          matches: [
            {
              playerA: "全都是失误",
              playerB: "充钱了吗",
              video: "https://www.bilibili.com/video/BV1KC4y1N7VU/?spm_id_from=333.999.0.0&vd_source=6eeecaca53f85be0ceaf331fd443b891",
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
              video: "",
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
              video: "",
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
      ],
    },
  ],
});
