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
        ["可重复角色", "每名选手的3套阵容至少包含7张不同角色牌"],
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
        {
          name: "DAY2",
          date: "2023-12-30",
          matches: [
            {
              playerA: "半仙豆腐",
              playerB: "梦影疏横",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莫娜", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["妮露", "白术", "莫娜"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "遗尘音序",
              playerB: "芙桃桃大魔王",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["莫娜", "纳西妲", "妮露"],
                  playerBCharacters: ["重云", "北斗", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["芭芭拉", "诺艾尔", "岩盔丘丘王"],
                  playerBCharacters: ["神里绫华", "宵宫", "申鹤"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "诺艾尔", "芭芭拉"],
                  playerBCharacters: ["神里绫华", "宵宫", "申鹤"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "诺艾尔", "芭芭拉"],
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
    {
      name: "半决赛",
      rules: [
        "BO5",
        "征服",
        ["可重复角色", "每名选手的3套阵容至少包含7张不同角色牌"],
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
        ["禁用角色", "对阵双方各禁用一张角色牌"],
      ],
      parts: [
        {
          name: "",
          date: "2023-12-02",
          matches: [
            {
              playerA: "翩翩萤火",
              playerB: "氺水",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["行秋", "优菈", "重云"],
                  playerBCharacters: ["班尼特", "无相之雷", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["班尼特", "可莉", "无相之雷"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["达达利亚", "宵宫", "神里绫人"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "遗尘音序",
              playerB: "半仙豆腐",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["北斗", "雷泽", "重云"],
                  playerBCharacters: ["芭芭拉", "行秋", "迪奥娜"],
                },
              ],
              games: [
                {
                  playerACharacters: ["神里绫华", "宵宫", "重云"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["达达利亚", "宵宫", "神里绫人"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["达达利亚", "宵宫", "神里绫人"],
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
    {
      name: "决赛",
      rules: [
        "BO5",
        "征服",
        ["禁用角色", "对阵双方各禁用一张角色牌"],
        ["禁用阵容", "对阵双方各准备4套阵容，禁用对手一套阵容"],
        ["可重复角色", "每名选手的4套阵容至少包含9张不同角色牌"],
      ],
      parts: [
        {
          name: "",
          date: "2023-12-03",
          matches: [
            {
              playerA: "半仙豆腐",
              playerB: "氺水",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              games: [
                {
                  playerACharacters: ["神里绫华", "甘雨", "行秋"],
                  playerBCharacters: ["班尼特", "愚人众·火之债务处理人", "无相之雷"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["神里绫华", "甘雨", "行秋"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
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
