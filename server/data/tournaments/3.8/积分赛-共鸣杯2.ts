import { Amber, AratakiItto, Barbara, Beidou, Bennett, Chongyun, Diona, ElectroHypostasis, Eula, FatuiPyroAgent, Fischl, Ganyu, Jean, KamisatoAyaka, Keqing, Klee, Mona, Nahida, Ningguang, Noelle, RaidenShogun, Razor, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, Sucrose, Xingqiu, YaeMiko, Yanfei, Yoimiya, Zhongli, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「月映」共鸣杯",
  type: "全民积分赛",
  gameVersion: "3.8",
  stages: [
    {
      name: "16进8淘汰赛",
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
          date: "2023-08-07",
          matches: [
            {
              playerA: "云野空悠",
              playerB: "老伯",
              video: "https://www.bilibili.com/video/BV1eh4y1F7Bu",
              games: [
                {
                  playerACharacters: [Beidou, Chongyun, Razor],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "一只禹",
              playerB: "seraphine",
              video: "https://www.bilibili.com/video/BV1eh4y1F7Bu",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "夭九",
              playerB: "冰之沧月",
              video: "https://www.bilibili.com/video/BV1eh4y1F7Bu",
              games: [
                {
                  playerACharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "小果核",
              playerB: "水果鲨啦",
              video: "https://www.bilibili.com/video/BV1eh4y1F7Bu",
              games: [
                {
                  playerACharacters: [Bennett, Yoimiya, ElectroHypostasis],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Bennett, Yoimiya, ElectroHypostasis],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-08-08",
          matches: [
            {
              playerA: "宇宙蓝色闪光",
              playerB: "神的微笑",
              video: "https://www.bilibili.com/video/BV1AF411Z7TL",
              games: [
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [Beidou, Chongyun, Razor],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "六更雨",
              playerB: "雏鹤爱",
              video: "https://www.bilibili.com/video/BV1AF411Z7TL",
              games: [
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [RhodeiaOfLoch, Amber, YaeMiko],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Diona, Ganyu, FatuiPyroAgent],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Sherlock",
              playerB: "鲶鱼精",
              video: "https://www.bilibili.com/video/BV1AF411Z7TL",
              games: [
                {
                  playerACharacters: [Shenhe, RaidenShogun, Chongyun],
                  playerBCharacters: [Mona, Sucrose, Jean],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Mona, Ningguang, Barbara],
                  playerBCharacters: [Mona, Sucrose, Jean],
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
      name: "8进4淘汰赛",
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
          name: "DAY1",
          date: "2023-08-09",
          matches: [
            {
              playerA: "多肉",
              playerB: "水果鲨啦",
              video: "https://www.bilibili.com/video/BV1HX4y1j71H",
              games: [
                {
                  playerACharacters: [Barbara, AratakiItto, Noelle],
                  playerBCharacters: [Amber, AratakiItto, Noelle],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [SangonomiyaKokomi, AratakiItto, Noelle],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Zhongli, RaidenShogun, AratakiItto],
                  playerBCharacters: [Amber, AratakiItto, Noelle],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Zhongli, RaidenShogun, AratakiItto],
                  playerBCharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [SangonomiyaKokomi, AratakiItto, Noelle],
                  playerBCharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "云野空悠",
              playerB: "seraphine",
              video: "https://www.bilibili.com/video/BV1HX4y1j71H",
              games: [
                {
                  playerACharacters: [Fischl, Nahida, Mona],
                  playerBCharacters: [Fischl, Nahida, Klee],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Fischl, Nahida, Klee],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Beidou, Chongyun, Razor],
                  playerBCharacters: [Fischl, Mona, Nahida],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-08-10",
          matches: [
            {
              playerA: "宇宙蓝色闪光",
              playerB: "夭九",
              video: "https://www.bilibili.com/video/BV1P14y1q7Wj",
              games: [
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Beidou, Chongyun, Razor],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Nahida, Klee],
                  playerBCharacters: [Beidou, Chongyun, Razor],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Beidou, Chongyun, Razor],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "Sherlock",
              playerB: "六更雨",
              video: "https://www.bilibili.com/video/BV1P14y1q7Wj",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Zhongli, YaeMiko],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [SangonomiyaKokomi, Ningguang, Barbara],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Mona, Ningguang, Barbara],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Mona, Ningguang, Barbara],
                  playerBCharacters: [Fischl, Mona, Nahida],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Mona, Ningguang, Barbara],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
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
      name: "半决赛",
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
          date: "2023-08-11",
          matches: [
            {
              playerA: "seraphine",
              playerB: "水果鲨啦",
              video: "https://www.bilibili.com/video/BV1k14y1q75i",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Klee, Mona, Yanfei],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Xingqiu, Ganyu, KamisatoAyaka],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Xingqiu, Ganyu, KamisatoAyaka],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [YaeMiko, Mona, Mona],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "宇宙蓝色闪光",
              playerB: "六更雨",
              video: "https://www.bilibili.com/video/BV1k14y1q75i",
              games: [
                {
                  playerACharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  playerBCharacters: [Eula, Fischl, Shenhe],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Xingqiu, KamisatoAyaka, Ganyu],
                  playerBCharacters: [Eula, Fischl, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Xingqiu, KamisatoAyaka, Ganyu],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Fischl, RhodeiaOfLoch, Nahida],
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
          date: "2023-08-12",
          matches: [
            {
              playerA: "六更雨",
              playerB: "水果鲨啦",
              video: "https://www.bilibili.com/video/BV1Ph4y1Q7gR",
              games: [
                {
                  playerACharacters: [Fischl, RhodeiaOfLoch, Nahida],
                  playerBCharacters: [Beidou, Chongyun, Razor],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, RhodeiaOfLoch, Nahida],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Klee, Mona, Yanfei],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, YaeMiko],
                  playerBCharacters: [Klee, Mona, Yanfei],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, YaeMiko],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
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
