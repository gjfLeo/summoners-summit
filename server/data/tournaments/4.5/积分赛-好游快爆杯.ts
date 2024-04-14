import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "4.5",
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
          date: "2024-04-10",
          matches: [
            {
              playerA: "胡桃桃大魔王",
              playerB: "Elaina",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["夜兰"],
                  playerBCharacters: ["「女士」"],
                },
                {
                  playerACharacters: ["千年珍珠骏麟", "若陀龙王", "林尼"],
                  playerBCharacters: ["林尼", "若陀龙王", "千年珍珠骏麟"],
                },
              ],
              games: [
                {
                  playerACharacters: ["绮良良", "千年珍珠骏麟", "镀金旅团·炽沙叙事人"],
                  playerBCharacters: ["绮良良", "千年珍珠骏麟", "林尼"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["绮良良", "千年珍珠骏麟", "镀金旅团·炽沙叙事人"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "神的微笑",
              playerB: "Smile",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["若陀龙王"],
                  playerBCharacters: ["「女士」"],
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "无相之冰"],
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBCharacters: ["愚人众·雷萤术士", "莫娜", "纳西妲"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["愚人众·雷萤术士", "莫娜", "纳西妲"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2024-04-11",
          matches: [
            {
              playerA: "雪国Ink",
              playerB: "兴",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["班尼特"],
                  playerBCharacters: ["芭芭拉"],
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["那维莱特", "莱依拉", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["那维莱特", "莱依拉", "若陀龙王"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["「女士」", "千年珍珠骏麟", "那维莱特"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "零之启",
              playerB: "Winsoon",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["纳西妲"],
                  playerBCharacters: ["若陀龙王"],
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["绮良良", "雷音权现", "林尼"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
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
          date: "2024-04-13",
          matches: [
            {
              playerA: "零之启",
              playerB: "雪国Ink",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["莫娜"],
                  playerBCharacters: ["绮良良"],
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Elaina",
              playerB: "Smile",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["莫娜"],
                  playerBCharacters: ["「女士」"],
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                },
              ],
              games: [
                {
                  playerACharacters: ["绮良良", "雷音权现", "林尼"],
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
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
      name: "决赛",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numCharactersBanned: 1,
        numCharactersRequired: 9,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-04-14",
          matches: [
            {
              playerA: "零之启",
              playerB: "Elaina",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["纳西妲"],
                  playerBCharacters: ["「女士」"],
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBCharacters: ["绮良良", "林尼", "雷音权现"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["绮良良", "雷音权现", "林尼"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["千年珍珠骏麟", "若陀龙王", "林尼"],
                  playerBCharacters: ["千年珍珠骏麟", "若陀龙王", "林尼"],
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
