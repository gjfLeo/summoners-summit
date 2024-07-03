import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "4.7",
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
          name: "",
          date: "2024-06-29",
          matches: [
            {
              playerA: "吟风咏月",
              playerB: "王小雨",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇"],
                  playerBCharacters: ["深渊使徒·激流"],
                },
                {
                  playerACharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  playerBCharacters: ["夜兰", "申鹤", "魈"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "珐露珊", "琳妮特"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "魈", "申鹤"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "白飞飞",
              playerB: "爱酱单推人",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇"],
                  playerBCharacters: ["吞星之鲸"],
                },
                {
                  playerACharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  playerBCharacters: ["那维莱特", "若陀龙王", "无相之冰"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBCharacters: ["芙宁娜", "莱依拉", "芭芭拉"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBCharacters: ["芙宁娜", "七七", "芭芭拉"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "theRoy",
              playerB: "majikohanatan",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["申鹤"],
                  playerBCharacters: ["吞星之鲸"],
                },
                {
                  playerACharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "林尼"],
                  playerBCharacters: ["芙宁娜", "莱欧斯利", "芭芭拉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["芙宁娜", "深渊使徒·激流", "莱欧斯利"],
                  playerBCharacters: ["芙宁娜", "莱欧斯利", "芭芭拉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["芙宁娜", "深渊使徒·激流", "莱欧斯利"],
                  playerBCharacters: ["莱依拉", "那维莱特", "芭芭拉"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "胡桃花开青雀鸣",
              playerB: "祁音",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["早柚"],
                  playerBCharacters: ["圣骸飞蛇"],
                },
                {
                  playerACharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  playerBCharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莱欧斯利", "深渊使徒·激流", "芙宁娜"],
                  playerBCharacters: ["深渊使徒·激流", "流浪者", "莱欧斯利"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["莱欧斯利", "深渊使徒·激流", "芙宁娜"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "深渊使徒·激流", "绮良良"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
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
          date: "2024-07-03",
          matches: [
            {
              playerA: "胡桃花开青雀鸣",
              playerB: "majikohanatan",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["绮良良"],
                  playerBCharacters: ["吞星之鲸"],
                },
                {
                  playerACharacters: ["林尼", "久岐忍", "瑶瑶"],
                  playerBCharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "芙宁娜"],
                  playerBCharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "阿佩普的绿洲守望者"],
                  playerBCharacters: ["芙宁娜", "深渊使徒·激流", "莱欧斯利"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "芙宁娜"],
                  playerBCharacters: ["芙宁娜", "深渊使徒·激流", "莱欧斯利"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "吟风咏月",
              playerB: "爱酱单推人",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇"],
                  playerBCharacters: ["吞星之鲸"],
                },
                {
                  playerACharacters: ["深渊使徒·激流", "早柚", "重云"],
                  playerBCharacters: ["深渊使徒·激流", "早柚", "重云"],
                },
              ],
              games: [
                {
                  playerACharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
                  playerBCharacters: ["芙宁娜", "深渊使徒·激流", "莱欧斯利"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  playerBCharacters: ["若陀龙王", "无相之冰", "那维莱特"],
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
