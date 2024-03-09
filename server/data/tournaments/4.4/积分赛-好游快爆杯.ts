import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "4.4",
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
          date: "2024-03-07",
          matches: [
            {
              playerA: "全都是失误",
              playerB: "周正福",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["菲谢尔"],
                  playerBCharacters: ["芭芭拉"],
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["夜兰", "「女士」", "雷音权现"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "守明枫叶",
              playerB: "Sakumi",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["千年珍珠骏麟"],
                  playerBCharacters: ["雷音权现"],
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["申鹤", "雷电将军", "「女士」"],
                  playerBCharacters: ["行秋", "重云", "托马"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["行秋", "重云", "托马"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2024-03-08",
          matches: [
            {
              playerA: "元",
              playerB: "Winsoon",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["芭芭拉"],
                  playerBCharacters: ["芭芭拉"],
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["莫娜", "「女士」", "雷音权现"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "你给我果赖",
              playerB: "雪国Ink",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["夜兰"],
                  playerBCharacters: ["芭芭拉"],
                },
                {
                  playerACharacters: ["雷泽", "行秋", "重云"],
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "无相之冰", "托马"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "神里绫华", "若陀龙王"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "神里绫华", "若陀龙王"],
                  playerBCharacters: ["班尼特", "雷音权现", "林尼"],
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
          date: "2024-03-09",
          matches: [
            {
              playerA: "全都是失误",
              playerB: "Winsoon",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["若陀龙王"],
                  playerBCharacters: ["芭芭拉"],
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["行秋", "重云", "琳妮特"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "守明枫叶",
              playerB: "你给我果赖",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["芭芭拉"],
                  playerBCharacters: ["雷音权现"],
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["林尼", "若陀龙王", "千年珍珠骏麟"],
                },
              ],
              games: [
                {
                  playerACharacters: ["申鹤", "雷电将军", "「女士」"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["行秋", "重云", "托马"],
                  starter: "B",
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
