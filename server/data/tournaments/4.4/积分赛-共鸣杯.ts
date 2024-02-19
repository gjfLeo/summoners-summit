import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "共鸣杯",
  type: "全民积分赛",
  gameVersion: "4.3",
  stages: [
    {
      name: "16进8",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2024-02-18",
          matches: [
            {
              playerA: "Xxsan",
              playerB: "理塘牢桐",
              video: "https://www.bilibili.com/video/BV1vK42187qt",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["刻晴", "雷电将军", "香菱"],
                  playerBCharacters: ["班尼特", "刻晴", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerBCharacters: ["班尼特", "刻晴", "若陀龙王"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "叱咤月海鱼鱼猫",
              playerB: "吴意",
              video: "https://www.bilibili.com/video/BV13W421N7PT",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "暇月",
              playerB: "淡蓝色的瞳眸",
              video: "https://www.bilibili.com/video/BV1zZ421m7wj",
              banned: [
                {
                  playerACharacters: ["凝光", "芭芭拉", "珊瑚宫心海"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Elaina",
              playerB: "挽挽",
              video: "https://www.bilibili.com/video/BV1NW421N7DZ",
              banned: [
                {
                  playerACharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerBCharacters: ["林尼", "菲谢尔", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerBCharacters: ["雷音权现", "可莉", "班尼特"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["雷音权现", "可莉", "班尼特"],
                  starter: "A",
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

