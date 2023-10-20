import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "4.1",
  stages: [
    {
      name: "8进4",
      rules: [
        "BO3",
        ["禁用角色", "对阵双方各禁用一张角色牌"],
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
        ["可重复角色", "每名选手的3套阵容至少包含7张不同角色牌"],
      ],
      parts: [
        {
          name: "DAY1",
          date: "2023-10-19",
          matches: [
            {
              playerA: "亦然",
              playerB: "雪国Ink",
              video: "https://live.i3839.com/n/hykb/zhibo/m/index.php?comm_id=14",
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
              video: "https://live.i3839.com/n/hykb/zhibo/m/index.php?comm_id=14",
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
      ],
    },
  ],
});
