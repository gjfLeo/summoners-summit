import { defineTournament } from "../../shared/utils/tournaments";
import { AratakiItto, Barbara, Bennett, Chongyun, Cyno, Eula, FatuiPyroAgent, Fischl, Ganyu, KamisatoAyaka, Keqing, Klee, Nahida, Noelle, RaidenShogun, RhodeiaOfLoch, Shenhe, Xingqiu, YaeMiko, Yoimiya } from "../../shared/character-cards";

export default defineTournament({
  name: "绯雪杯",
  tag: "积分赛试办赛",
  gameVersion: "3.8",
  stages: [
    {
      name: "8进4淘汰赛",
      parts: [
        {
          name: "",
          date: "2023-07-17",
          matches: [
            {
              playerA: "晚晴",
              playerB: "风",
              video: "",
              games: [
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Xingqiu, Ganyu, KamisatoAyaka],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Klee, Keqing, Bennett],
                  playerBCharacters: [Barbara, AratakiItto, Noelle],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "干瘪的小果核",
              playerB: "C",
              video: "",
              games: [
                {
                  playerACharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerBCharacters: [Cyno, Klee, Bennett],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Nahida, Klee],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "williemkmetsch",
              playerB: "Zun",
              video: "",
              games: [
                {
                  playerACharacters: [Fischl, RhodeiaOfLoch, FatuiPyroAgent],
                  playerBCharacters: [Eula, Fischl, Shenhe],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Barbara, AratakiItto, Noelle],
                  playerBCharacters: [FatuiPyroAgent, YaeMiko, RhodeiaOfLoch],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "宇宙蓝色闪光",
              playerB: "夭九",
              video: "",
              games: [
                {
                  playerACharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
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
      parts: [
        {
          name: "",
          date: "2023-07-18",
          matches: [
            {
              playerA: "晚晴",
              playerB: "C",
              video: "",
              games: [
                {
                  playerACharacters: [Klee, Keqing, Bennett],
                  playerBCharacters: [Cyno, Klee, Bennett],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Xingqiu, Ganyu, KamisatoAyaka],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [AratakiItto, Barbara, Noelle],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "夭九",
              playerB: "williemkmetsch",
              video: "",
              games: [
                {
                  playerACharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  playerBCharacters: [Barbara, AratakiItto, Noelle],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Noelle, Barbara, AratakiItto],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
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
      parts: [
        {
          name: "",
          date: "2023-07-18",
          matches: [
            {
              playerA: "C",
              playerB: "夭九",
              video: "",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Cyno, Klee, Bennett],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
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
