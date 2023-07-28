import { Amber, AratakiItto, Barbara, Bennett, Candace, Chongyun, Cyno, ElectroHypostasis, FatuiPyroAgent, Fischl, KamisatoAyaka, Keqing, Klee, KujouSara, Mona, Nahida, Ningguang, Noelle, RaidenShogun, Razor, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, Tartaglia, Venti, YaeMiko, Yoimiya } from "../../shared/character-cards";
import { defineTournament } from "../../shared/utils/tournaments";

export default defineTournament({
  name: "「日耀」共鸣杯",
  type: "全民积分赛",
  gameVersion: "3.8",
  stages: [
    {
      name: "16进8淘汰赛",
      rules: [
        "BO3",
        "征服",
        ["禁用角色", "对阵双方各禁用一张角色牌"],
        ["禁用阵容", "对阵双方各准备3套阵容，禁用对手一套阵容"],
        ["可重复角色", "每名选手的3套阵容至少包含7张不同角色牌"],
      ],
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
      rules: [
        "BO5",
        "征服",
        ["禁用角色", "对阵双方各禁用一张角色牌"],
        ["禁用阵容", "对阵双方各准备4套阵容，禁用对手一套阵容"],
        ["可重复角色", "每名选手的4套阵容至少包含9张不同角色牌"],
      ],
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
                  playerBCharacters: [Bennett, Chongyun, Tartaglia],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Candace, Razor, RaidenShogun],
                  playerBCharacters: [Bennett, Chongyun, Tartaglia],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Amber, AratakiItto, Noelle],
                  playerBCharacters: [Bennett, Chongyun, Tartaglia],
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
      ],
    },
  ],
});
