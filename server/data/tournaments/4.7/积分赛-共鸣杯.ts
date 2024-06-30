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
        {
          name: "DAY2",
          date: "2024-06-24",
          matches: [
            {
              playerA: "小心海王",
              playerB: "偷摸零",
              video: "https://www.bilibili.com/video/BV1X4421S7sK",
              banned: [
                {
                  playerACharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["那维莱特", "无相之冰", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["芙宁娜", "莱欧斯利", "珊瑚宫心海"],
                  playerBCharacters: ["莱欧斯利", "芙宁娜", "深渊使徒·激流"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Sept",
              playerB: "一簇西语",
              video: "https://www.bilibili.com/video/BV191421C7Km",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "永恒di小N",
              playerB: "江洲蓑笠翁",
              video: "https://www.bilibili.com/video/BV1Sy411q7Yq",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["深渊使徒·激流", "莱欧斯利", "芙宁娜"],
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "星莹Sweet.Rain",
              playerB: "不浪浪浪",
              video: "https://www.bilibili.com/video/BV1eS411A7AB",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  playerBCharacters: ["深渊使徒·激流", "芙宁娜", "莱欧斯利"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["深渊使徒·激流", "芙宁娜", "莱欧斯利"],
                  playerBCharacters: ["深渊使徒·激流", "芙宁娜", "莱欧斯利"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["深渊使徒·激流", "芙宁娜", "莱欧斯利"],
                  playerBCharacters: ["夜兰", "魈", "申鹤"],
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
      name: "8进4",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2024-06-25",
          matches: [
            {
              playerA: "玖哀",
              playerB: "江洲蓑笠翁",
              video: "https://www.bilibili.com/video/BV1Rx4y147QY",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["宵宫", "雷音权现", "莱欧斯利"],
                  playerBCharacters: ["莫娜", "早柚", "重云"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["莫娜", "早柚", "重云"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["深渊使徒·激流", "早柚", "重云"],
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["深渊使徒·激流", "早柚", "重云"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "执笔",
              playerB: "晓夜blite",
              video: "https://www.bilibili.com/video/BV12y411z7mY",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["芙宁娜", "深渊使徒·激流", "莱欧斯利"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2024-06-26",
          matches: [
            {
              playerA: "小心海王",
              playerB: "Sept",
              video: "https://www.bilibili.com/video/BV1Km421G7o5",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莫娜", "早柚", "重云"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "早柚", "重云"],
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "星莹Sweet.Rain",
              playerB: "轮舞曲",
              video: "https://www.bilibili.com/video/BV1nw4m1e7ma",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["深渊使徒·激流", "芙宁娜", "莱欧斯利"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  starter: "B",
                  winner: "B",
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
        numDecks: 4,
        numDecksBanned: 1,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-06-27",
          matches: [
            {
              playerA: "玖哀",
              playerB: "晓夜blite",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["深渊使徒·激流", "早柚", "重云"],
                  playerBCharacters: ["芙宁娜", "深渊使徒·激流", "莱欧斯利"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["无相之冰", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "雷音权现", "「女士」"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "小心海王",
              playerB: "轮舞曲",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "早柚", "重云"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
                  playerBCharacters: ["莱依拉", "那维莱特", "若陀龙王"],
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
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numGames: 7,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-06-29",
          matches: [
            {
              playerA: "玖哀",
              playerB: "轮舞曲",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["深渊使徒·激流", "早柚", "重云"],
                  playerBCharacters: ["林尼", "珐露珊", "琳妮特"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["申鹤", "魈", "夜兰"],
                  playerBCharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  playerBCharacters: ["林尼", "珐露珊", "琳妮特"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["无相之冰", "雷音权现", "「女士」"],
                  playerBCharacters: ["莱依拉", "若陀龙王", "那维莱特"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["无相之冰", "雷音权现", "「女士」"],
                  playerBCharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
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
