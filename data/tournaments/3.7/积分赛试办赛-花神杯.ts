import { AratakiItto, Barbara, Bennett, Chongyun, Collei, ElectroHypostasis, FatuiPyroAgent, Fischl, Keqing, Klee, Mona, Nahida, Noelle, RaidenShogun, RhodeiaOfLoch, Shenhe, Tighnari, YaeMiko, Yoimiya } from "../../shared/character-cards";
import { defineTournament } from "../../shared/utils/tournaments";

export default defineTournament({
  name: "花神杯",
  gameVersion: "3.7",
  tag: "积分赛试办赛",
  stages: [
    {
      name: "16进8淘汰赛",
      rules: ["BO3", "征服"],
      parts: [
        {
          name: "DAY1",
          date: "2023-06-29",
          matches: [
            {
              playerA: "Sherry",
              playerB: "h小学生",
              winner: "A",
              video: "https://www.bilibili.com/video/BV11N411D7zQ",
              games: [
                {
                  playerACharacters: [Bennett, Yoimiya, ElectroHypostasis],
                  playerBCharacters: [Fischl, RhodeiaOfLoch, Nahida],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [RaidenShogun, Shenhe, Chongyun],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Noelle, Barbara, AratakiItto],
                  playerBCharacters: [Fischl, RhodeiaOfLoch, Nahida],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "雪乃",
              playerB: "兮梦",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1tX4y1p7L6",
              games: [
                {
                  playerACharacters: [Fischl, RhodeiaOfLoch, Nahida],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [YaeMiko, Collei, Tighnari],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
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
      name: "8进4淘汰赛",
      rules: ["BO3", "征服"],
      parts: [
        {
          name: "",
          date: "2023-06-30",
          matches: [
            {
              playerA: "Sherry",
              playerB: "岚落尘",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1Va4y1w7Rp",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Bennett, Yoimiya, ElectroHypostasis],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "icyteapot",
              playerB: "她和她的狐狸",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1TV411M728",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Fischl, Mona, Nahida],
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
      rules: ["BO3", "征服"],
      parts: [
        {
          name: "",
          date: "2023-07-01",
          matches: [
            {
              playerA: "唯",
              playerB: "岚落尘",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1rg4y1A7PW",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, Fischl, RhodeiaOfLoch],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, Fischl, RhodeiaOfLoch],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "icyteapot",
              playerB: "雪乃",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1XX4y1n7YU",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Barbara, AratakiItto, Noelle],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Fischl, Mona, Nahida],
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
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
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
      rules: ["BO3", "征服"],
      parts: [
        {
          name: "",
          date: "2023-07-02",
          matches: [
            {
              playerA: "雪乃",
              playerB: "岚落尘",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1TV411M7QV",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
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
