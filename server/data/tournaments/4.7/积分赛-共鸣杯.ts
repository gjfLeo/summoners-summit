import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "共鸣杯",
  type: "全民积分赛",
  gameVersion: "4.7",
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
          date: "2024-06-23",
          matches: [
            {
              playerA: "Reaper",
              playerB: "玖哀",
              video: "https://www.bilibili.com/video/BV1CS421d7W5",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  playerBCharacters: ["宵宫", "雷音权现", "莱欧斯利"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["深渊使徒·激流", "莱欧斯利", "芙宁娜"],
                  playerBCharacters: ["宵宫", "雷音权现", "莱欧斯利"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "晓夜blite",
              playerB: "胖丁",
              video: "https://www.bilibili.com/video/BV1XM4m1m7K1",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["若陀龙王", "无相之冰", "那维莱特"],
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["芙宁娜", "深渊使徒·激流", "莱欧斯利"],
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["芙宁娜", "深渊使徒·激流", "莱欧斯利"],
                  playerBCharacters: ["若陀龙王", "那维莱特", "莱依拉"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "轮舞曲",
              playerB: "零露Meo",
              video: "https://www.bilibili.com/video/BV1Ux4y147AK",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  playerBCharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
                  playerBCharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "执笔",
              playerB: "科研大神三番手",
              video: "https://www.bilibili.com/video/BV1Pb421p7r7",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
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
  ],
});
