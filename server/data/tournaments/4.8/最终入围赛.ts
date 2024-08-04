import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "最终入围赛",
  gameVersion: "4.8",
  stages: [
    {
      name: "32进16",
      rules: {
        numDecks: 2,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "火星转播流",
          date: "2024-08-02",
          matches: [
            {
              playerA: "小白一只",
              playerB: "路西法师",
              video: "https://www.bilibili.com/video/BV1LuvQeHEkn",
              games: [
                {
                  playerACharacters: ["无相之雷", "深渊使徒·激流", "班尼特"],
                  playerBCharacters: ["吞星之鲸", "莱依拉", "圣骸毒蝎"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["刻晴", "莱依拉", "吞星之鲸"],
                  playerBCharacters: ["吞星之鲸", "莱依拉", "圣骸毒蝎"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["刻晴", "莱依拉", "吞星之鲸"],
                  playerBCharacters: ["班尼特", "无相之雷", "深渊使徒·激流"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "信凛",
              playerB: "四月的新翼",
              video: "https://www.bilibili.com/video/BV15GvQenEes",
              games: [
                {
                  playerACharacters: ["刻晴", "无相之冰", "吞星之鲸"],
                  playerBCharacters: ["深渊使徒·激流", "早柚", "优菈"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["胡桃", "行秋", "重云"],
                  playerBCharacters: ["深渊使徒·激流", "早柚", "优菈"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "屹立大地之上",
              playerB: "夜墨梓瞳",
              video: "https://www.bilibili.com/video/BV1FcvQeZEnn",
              games: [
                {
                  playerACharacters: ["莱依拉", "刻晴", "吞星之鲸"],
                  playerBCharacters: ["班尼特", "深渊使徒·激流", "无相之雷"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["「女士」", "无相之冰", "雷音权现"],
                  playerBCharacters: ["班尼特", "深渊使徒·激流", "无相之雷"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["「女士」", "无相之冰", "雷音权现"],
                  playerBCharacters: ["吞星之鲸", "莱依拉", "刻晴"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "屹立大地之上",
              playerB: "隼龙",
              video: "https://www.bilibili.com/video/BV1ZQv9ehEV9",
              games: [
                {
                  playerACharacters: ["「女士」", "无相之冰", "雷音权现"],
                  playerBCharacters: ["莱依拉", "刻晴", "吞星之鲸"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["「女士」", "无相之冰", "雷音权现"],
                  playerBCharacters: ["无相之冰", "那维莱特", "雷音权现"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "空白",
              playerB: "安中的夏",
              video: "https://www.bilibili.com/video/BV19fv9eREQy",
              games: [
                {
                  playerACharacters: ["莱依拉", "吞星之鲸", "刻晴"],
                  playerBCharacters: ["吞星之鲸", "刻晴", "莱依拉"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夏沃蕾", "赛诺", "迪希雅"],
                  playerBCharacters: ["吞星之鲸", "刻晴", "莱依拉"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "深渊使徒·激流", "无相之雷"],
                  playerBCharacters: ["夏沃蕾", "赛诺", "迪希雅"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "寒天转播流",
          date: "2024-08-02",
          matches: [
            {
              playerA: "九方羽幻",
              playerB: "信凛",
              video: "https://www.bilibili.com/video/BV1SwiVeiEEg",
              games: [
                {
                  playerACharacters: ["莱依拉", "刻晴", "吞星之鲸"],
                  playerBCharacters: ["刻晴", "无相之冰", "吞星之鲸"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "赛诺", "夏沃蕾"],
                  playerBCharacters: ["刻晴", "无相之冰", "吞星之鲸"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["迪希雅", "赛诺", "夏沃蕾"],
                  playerBCharacters: ["胡桃", "行秋", "重云"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "屹立于大地之上",
              playerB: "木瓜星灵二号机",
              video: "https://www.bilibili.com/video/BV1SwiVeiEEg",
              games: [
                {
                  playerACharacters: ["莱依拉", "刻晴", "吞星之鲸"],
                  playerBCharacters: ["刻晴", "吞星之鲸", "无相之冰"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["「女士」", "无相之冰", "雷音权现"],
                  playerBCharacters: ["刻晴", "吞星之鲸", "无相之冰"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["「女士」", "无相之冰", "雷音权现"],
                  playerBCharacters: ["无相之雷", "深渊使徒·激流", "班尼特"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "伊天汐",
              playerB: "安中的夏",
              video: "https://www.bilibili.com/video/BV1Gf421B77g",
              games: [
                {
                  playerACharacters: ["莫娜", "早柚", "优菈"],
                  playerBCharacters: ["吞星之鲸", "刻晴", "莱依拉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["刻晴", "莱依拉", "吞星之鲸"],
                  playerBCharacters: ["夏沃蕾", "赛诺", "迪希雅"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "早柚", "优菈"],
                  playerBCharacters: ["夏沃蕾", "赛诺", "迪希雅"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "卡卡",
              playerB: "胡胡胡胡胡小兰",
              video: "https://www.bilibili.com/video/BV1yi421h7Bw",
              games: [
                {
                  playerACharacters: ["刻晴", "无相之冰", "吞星之鲸"],
                  playerBCharacters: ["吞星之鲸", "刻晴", "莱依拉"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["刻晴", "无相之冰", "吞星之鲸"],
                  playerBCharacters: ["班尼特", "深渊使徒·激流", "无相之雷"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "小白一只",
              playerB: "星辰",
              video: "https://www.bilibili.com/video/BV1Zx4y1x79F",
              games: [
                {
                  playerACharacters: ["无相之雷", "深渊使徒·激流", "班尼特"],
                  playerBCharacters: ["深渊使徒·激流", "早柚", "重云"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["刻晴", "莱依拉", "吞星之鲸"],
                  playerBCharacters: ["吞星之鲸", "莱依拉", "刻晴"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["无相之雷", "深渊使徒·激流", "班尼特"],
                  playerBCharacters: ["吞星之鲸", "莱依拉", "刻晴"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "共鸣转播流",
          date: "2024-08-02",
          matches: [
            {
              playerA: "旅者相随",
              playerB: "胡胡胡胡胡小兰",
              video: "https://www.bilibili.com/video/BV1Agi3epEGQ",
              games: [
                {
                  playerACharacters: ["刻晴", "莱依拉", "吞星之鲸"],
                  playerBCharacters: ["吞星之鲸", "刻晴", "莱依拉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["雷音权现", "无相之冰", "「女士」"],
                  playerBCharacters: ["吞星之鲸", "刻晴", "莱依拉"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷音权现", "无相之冰", "「女士」"],
                  playerBCharacters: ["班尼特", "深渊使徒·激流", "无相之雷"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "九方羽幻",
              playerB: "Seniorious",
              video: "https://www.bilibili.com/video/BV18LigeFE4n",
              games: [
                {
                  playerACharacters: ["莱依拉", "刻晴", "吞星之鲸"],
                  playerBCharacters: ["吞星之鲸", "刻晴", "莱依拉"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "赛诺", "夏沃蕾"],
                  playerBCharacters: ["吞星之鲸", "刻晴", "莱依拉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["迪希雅", "赛诺", "夏沃蕾"],
                  playerBCharacters: ["夏沃蕾", "迪希雅", "赛诺"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Lava没睡醒",
              playerB: "onlysky",
              video: "https://www.bilibili.com/video/BV1ES42197cN",
              games: [
                {
                  playerACharacters: ["刻晴", "无相之冰", "吞星之鲸"],
                  playerBCharacters: ["刻晴", "莱依拉", "吞星之鲸"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "赛诺", "夏沃蕾"],
                  playerBCharacters: ["刻晴", "莱依拉", "吞星之鲸"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "信凛",
              playerB: "安中的夏",
              video: "https://www.bilibili.com/video/BV15T421r72r",
              games: [
                {
                  playerACharacters: ["刻晴", "无相之冰", "吞星之鲸"],
                  playerBCharacters: ["吞星之鲸", "刻晴", "莱依拉"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["刻晴", "无相之冰", "吞星之鲸"],
                  playerBCharacters: ["夏沃蕾", "赛诺", "迪希雅"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "旅者相随",
              playerB: "溪灵",
              video: "https://www.bilibili.com/video/BV15T421r72r",
              games: [
                {
                  playerACharacters: ["雷音权现", "无相之冰", "「女士」"],
                  playerBCharacters: ["迪希雅", "赛诺", "夏沃蕾"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷音权现", "无相之冰", "「女士」"],
                  playerBCharacters: ["刻晴", "无相之冰", "吞星之鲸"],
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
