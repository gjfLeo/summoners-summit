import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "虎牙主播资格赛",
  type: "主播资格赛",
  gameVersion: "4.2",
  stages: [
    {
      name: "16进8",
      rules: [
        "BO3",
        "征服",
      ],
      parts: [
        {
          name: "DAY1",
          date: "2023-12-01",
          matches: [
            {
              playerA: "游迪亚斯",
              playerB: "子祺粨特",
              video: "",
              games: [
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "小瓜皮王",
              playerB: "小红帽的大兔子",
              video: "",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["达达利亚", "宵宫", "神里绫人"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "明暗螺旋",
              playerB: "菓茶",
              video: "",
              games: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "臭臭鸭",
              playerB: "曲误周郎",
              video: "",
              games: [
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["班尼特", "宵宫", "无相之雷"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  playerBCharacters: ["班尼特", "宵宫", "无相之雷"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "自古二楼",
              playerB: "雨中邮差",
              video: "",
              games: [
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
          ],
        },  
        {
          name: "DAY2",
          date: "2023-12-02",
          matches: [
            {
              playerA: "LL起翼夜鹰",
              playerB: "梦下",
              video: "",
              games: [
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  starter: "",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "一不小欣z",
              playerB: "今天不想吃苹果",
              video: "",
              games: [
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerBCharacters: ["达达利亚", "宵宫", "神里绫人"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "诺艾尔", "芭芭拉"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "道诡异仙李火旺",
              playerB: "柠柠七喵",
              video: "",
              games: [
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["班尼特", "宵宫", "无相之雷"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  playerBCharacters: ["班尼特", "宵宫", "无相之雷"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "明暗螺旋",
              playerB: "小瓜皮王",
              video: "",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["达达利亚", "宵宫", "神里绫人"],
                  playerBCharacters: ["行秋", "重云", "优菈"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "子祺粨特",
              playerB: "臭臭鸭",
              video: "",
              games: [
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY3",
          date: "2023-12-03",
          matches: [
            {
              playerA: "自古二楼",
              playerB: "梦下",
              video: "",
              games: [
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  starter: "",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "今天不想吃苹果",
              playerB: "道诡异仙李火旺",
              video: "",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "菓茶",
              playerB: "小红帽的大兔子",
              video: "",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "游迪亚斯",
              playerB: "曲误周郎",
              video: "",
              games: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
                  winner: "B",
                },
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  starter: "",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "雨中邮差",
              playerB: "LL起翼夜鹰",
              video: "",
              games: [
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  starter: "",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  starter: "",
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
