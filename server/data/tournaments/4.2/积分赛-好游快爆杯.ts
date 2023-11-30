import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "4.2",
  stages: [
    {
      name: "8进4",
      rules: [
        "BO3",
        "征服",
        ["禁用角色", "对阵双方各禁用一张角色牌"],
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
      ],
      parts: [
        {
          name: "DAY1",
          date: "2023-12-29",
          matches: [
            {
              playerA: "史珍香",
              playerB: "氺水",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["北斗", "雷泽", "重云"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
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
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["雷电将军", "申鹤", "重云"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "翩翩萤火",
              playerB: "菜鸟荡秋千",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["行秋", "优菈", "重云"],
                  playerBCharacters: ["莫娜", "妮露", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["迪希雅", "安柏", "琴"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
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
