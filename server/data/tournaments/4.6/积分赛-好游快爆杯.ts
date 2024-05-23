import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "4.6",
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
          date: "2024-05-18",
          matches: [
            {
              playerA: "十一.",
              playerB: "人子歌于途",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["莫娜"],
                  playerBCharacters: ["那维莱特"],
                },
                {
                  playerACharacters: ["莱依拉", "深渊使徒·激流", "若陀龙王"],
                  playerBCharacters: ["久岐忍", "深渊使徒·激流", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "瑶瑶", "深渊使徒·激流"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "浪火花",
              playerB: "木瓜豆腐",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["那维莱特"],
                  playerBCharacters: ["深渊使徒·激流"],
                },
                {
                  playerACharacters: ["莫娜", "优菈", "流浪者"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "纳西妲", "林尼"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "纳西妲", "林尼"],
                  playerBCharacters: ["夜兰", "重云", "雷泽"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "雪国Ink",
              playerB: "空寻的小迷妹",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["重云"],
                  playerBCharacters: ["莱依拉"],
                },
                {
                  playerACharacters: ["林尼", "那维莱特", "若陀龙王"],
                  playerBCharacters: ["久岐忍", "那维莱特", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "深渊使徒·激流", "瑶瑶"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "深渊使徒·激流", "瑶瑶"],
                  playerBCharacters: ["若陀龙王", "千年珍珠骏麟", "那维莱特"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "祁音",
              playerB: "LL起翼夜鹰",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["瑶瑶"],
                  playerBCharacters: ["林尼"],
                },
                {
                  playerACharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBCharacters: ["久岐忍", "那维莱特", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "夏洛蒂", "深渊使徒·激流"],
                  playerBCharacters: ["久岐忍", "那维莱特", "若陀龙王"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "夏洛蒂", "深渊使徒·激流"],
                  playerBCharacters: ["深渊使徒·激流", "雷音权现", "「女士」"],
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
        numCharactersBanned: 11,
        numCharactersRequired: 7,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-05-23",
          matches: [
            {
              playerA: "空寻的小迷妹",
              playerB: "木瓜豆腐",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["重云"],
                  playerBCharacters: ["那维莱特"],
                },
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "深渊使徒·激流"],
                  playerBCharacters: ["林尼", "若陀龙王", "深渊使徒·激流"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "优菈"],
                  playerBCharacters: ["千年珍珠骏麟", "深渊使徒·激流", "班尼特"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "优菈"],
                  playerBCharacters: ["久岐忍", "深渊使徒·激流", "绮良良"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["久岐忍", "深渊使徒·激流", "绮良良"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "祁音",
              playerB: "人子歌于途",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["重云"],
                  playerBCharacters: ["那维莱特"],
                },
                {
                  playerACharacters: ["莱依拉", "行秋", "芭芭拉"],
                  playerBCharacters: ["久岐忍", "若陀龙王", "那维莱特"],
                },
              ],
              games: [
                {
                  playerACharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBCharacters: ["莱依拉", "深渊使徒·激流", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "深渊使徒·激流", "若陀龙王"],
                  playerBCharacters: ["莫娜", "早柚", "优菈"],
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
