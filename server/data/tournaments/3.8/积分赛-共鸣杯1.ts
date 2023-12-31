import { Amber, AratakiItto, Barbara, Beidou, Bennett, Candace, Chongyun, Cyno, Diluc, ElectroHypostasis, Eula, FatuiPyroAgent, Fischl, Ganyu, KamisatoAyaka, Keqing, Klee, KujouSara, Mona, Nahida, Ningguang, Noelle, RaidenShogun, Razor, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, Venti, Xingqiu, YaeMiko, Yanfei, Yoimiya, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「日耀」共鸣杯",
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
          date: "2023-07-25",
          matches: [
            {
              playerA: "曦雨",
              playerB: "郑明行",
              video: "https://www.bilibili.com/video/BV1uV411j7TD",
              games: [
                {
                  playerACharacters: [Barbara, AratakiItto, Noelle],
                  playerBCharacters: [Fischl, Mona, Klee],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [KujouSara, Shenhe, KamisatoAyaka],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "浅冽",
              playerB: "雪国Ink",
              video: "https://www.bilibili.com/video/BV1uV411j7TD",
              games: [
                {
                  playerACharacters: [Barbara, Noelle, AratakiItto],
                  playerBCharacters: [Mona, AratakiItto, Noelle],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Barbara, Noelle, AratakiItto],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "铃紫",
              playerB: "诛仙还怡文",
              video: "https://www.bilibili.com/video/BV1uV411j7TD",
              games: [
                {
                  playerACharacters: [Barbara, Ningguang, SangonomiyaKokomi],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [YaeMiko, FatuiPyroAgent, RhodeiaOfLoch],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "式微",
              playerB: "音尘",
              video: "https://www.bilibili.com/video/BV1uV411j7TD",
              games: [
                {
                  playerACharacters: [RaidenShogun, Candace, Razor],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [RaidenShogun, Candace, Razor],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Noelle, Amber, AratakiItto],
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
          date: "2023-07-26",
          matches: [
            {
              playerA: "薄学",
              playerB: "寂风",
              video: "https://www.bilibili.com/video/BV1qM4y1p7MP",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Venti, KamisatoAyaka],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "SY不歪",
              playerB: "牛马牛牛马",
              video: "https://www.bilibili.com/video/BV1qM4y1p7MP",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, FatuiPyroAgent, Fischl],
                  playerBCharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, FatuiPyroAgent, Fischl],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "自古二楼",
              playerB: "pupa",
              video: "https://www.bilibili.com/video/BV1qM4y1p7MP",
              games: [
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, YaeMiko],
                  playerBCharacters: [ElectroHypostasis, Bennett, Klee],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, YaeMiko],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
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
          date: "2023-07-27",
          matches: [
            {
              playerA: "铃紫",
              playerB: "雪国Ink",
              video: "https://www.bilibili.com/video/BV1cu4y127Tc",
              games: [
                {
                  playerACharacters: [Amber, AratakiItto, Noelle],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Klee, Keqing, Bennett],
                  playerBCharacters: [Bennett, FatuiPyroAgent, Cyno],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Klee, Keqing, Bennett],
                  playerBCharacters: [Bennett, Chongyun, Diluc],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Candace, Razor, RaidenShogun],
                  playerBCharacters: [Bennett, Chongyun, Diluc],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Amber, AratakiItto, Noelle],
                  playerBCharacters: [Bennett, Chongyun, Diluc],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "枨枘",
              playerB: "音尘",
              video: "https://www.bilibili.com/video/BV1cu4y127Tc",
              games: [
                {
                  playerACharacters: [Chongyun, Razor, Keqing],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, Razor, Keqing],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  playerBCharacters: [Shenhe, RaidenShogun, Chongyun],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-07-28",
          matches: [
            {
              playerA: "曦雨",
              playerB: "薄学",
              video: "https://www.bilibili.com/video/BV1o94y1Y7xs",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Amber, AratakiItto, Noelle],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [KamisatoAyaka, Ganyu, Xingqiu],
                  playerBCharacters: [Fischl, Venti, KamisatoAyaka],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "pupa",
              playerB: "牛马牛牛马",
              video: "https://www.bilibili.com/video/BV1o94y1Y7xs",
              games: [
                {
                  playerACharacters: [Chongyun, Razor, Beidou],
                  playerBCharacters: [Eula, Fischl, Shenhe],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Eula, Fischl, Shenhe],
                  playerBCharacters: [Eula, Fischl, Shenhe],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Cyno, Bennett, Klee],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Cyno, Bennett, Klee],
                  playerBCharacters: [Eula, Fischl, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Cyno, Bennett, Klee],
                  playerBCharacters: [Bennett, Klee, Keqing],
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
          date: "2023-07-29",
          matches: [
            {
              playerA: "铃紫",
              playerB: "音尘",
              video: "https://www.bilibili.com/video/BV1dh4y1k7Zu",
              games: [
                {
                  playerACharacters: [Klee, Keqing, Bennett],
                  playerBCharacters: [Fischl, Nahida, Klee],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Klee, Keqing, Bennett],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Candace, Razor, RaidenShogun],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Candace, Razor, RaidenShogun],
                  playerBCharacters: [Shenhe, RaidenShogun, Chongyun],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Shenhe, Chongyun, RaidenShogun],
                  playerBCharacters: [Shenhe, RaidenShogun, Chongyun],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "pupa",
              playerB: "薄学",
              video: "https://www.bilibili.com/video/BV1dh4y1k7Zu",
              games: [
                {
                  playerACharacters: [Chongyun, Razor, Beidou],
                  playerBCharacters: [Fischl, Venti, KamisatoAyaka],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Eula, Fischl, Shenhe],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, Razor, Beidou],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, Razor, Beidou],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
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
          date: "2023-07-30",
          matches: [
            {
              playerA: "pupa",
              playerB: "音尘",
              video: "https://www.bilibili.com/video/BV13V4y1B7uE",
              games: [
                {
                  playerACharacters: [Beidou, Razor, Chongyun],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Beidou, Razor, Chongyun],
                  playerBCharacters: [Shenhe, RaidenShogun, Chongyun],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Xingqiu, Ganyu, KamisatoAyaka],
                  playerBCharacters: [Mona, Klee, Yanfei],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  playerBCharacters: [Mona, Klee, Yanfei],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Beidou, Razor, Chongyun],
                  playerBCharacters: [Mona, Klee, Yanfei],
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
