import { Amber, AratakiItto, Barbara, Candace, Chongyun, FatuiPyroAgent, Fischl, KamisatoAyaka, Klee, KujouSara, Mona, Nahida, Ningguang, Noelle, RaidenShogun, Razor, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, YaeMiko } from "../../shared/character-cards";
import { defineTournament } from "../../shared/utils/tournaments";

export default defineTournament({
  name: "「日耀」共鸣杯",
  tag: "全民积分赛",
  gameVersion: "3.8",
  stages: [
    {
      name: "16进8淘汰赛",
      rules: ["BO3", "征服"],
      parts: [
        {
          name: "DAY1",
          date: "2023-07-25",
          matches: [
            {
              playerA: "曦雨",
              playerB: "郑明行",
              video: "",
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
              video: "",
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
              video: "",
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
              video: "",
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
      ],
    },
  ],
});
