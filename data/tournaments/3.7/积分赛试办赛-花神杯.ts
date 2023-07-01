import { AratakiItto, Barbara, Bennett, Chongyun, Collei, ElectroHypostasis, Fischl, Keqing, Klee, Mona, Nahida, Noelle, RaidenShogun, RhodeiaOfLoch, Shenhe, Tighnari, YaeMiko, Yoimiya } from "../../shared/character-cards";
import { defineTournament } from "../../shared/utils/tournaments";

export default defineTournament({
  name: "花神杯",
  gameVersion: "3.7",
  tag: "积分赛试办赛",
  stages: [
    {
      name: "16进8淘汰赛",
      rules: ["征服", "BO3"],
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
  ],
});
