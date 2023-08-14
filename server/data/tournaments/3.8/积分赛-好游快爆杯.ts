import { Bennett, Chongyun, FatuiPyroAgent, Fischl, Keqing, Klee, Mona, Nahida, RaidenShogun, Shenhe, defineTournament } from "../../../../utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "3.8",
  stages: [
    {
      name: "决赛",
      parts: [
        {
          name: "",
          date: "2023-08-12",
          matches: [
            {
              playerA: "Tobby",
              playerB: "詹妮斯",
              video: "",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Keqing, Bennett, Klee],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Keqing, Bennett, Klee],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Klee, Mona, FatuiPyroAgent],
                  playerBCharacters: [Keqing, Bennett, Klee],
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
