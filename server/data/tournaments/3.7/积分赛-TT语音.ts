import { AratakiItto, Fischl, Keqing, Mona, Nahida, Ningguang, RhodeiaOfLoch, StonehideLawachurl, Venti, YaeMiko, Zhongli, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "TT语音杯",
  type: "全民积分赛",
  gameVersion: "3.7",
  stages: [
    // {
    //   name: "8进4淘汰赛",
    //   parts: [
    //     {
    //       name: "",
    //       date: "2023-06-24",
    //       matches: [],
    //     },
    //   ],
    // },
    // {
    //   name: "半决赛",
    //   parts: [
    //     {
    //       name: "",
    //       date: "2023-06-25",
    //       matches: [],
    //     },
    //   ],
    // },
    {
      name: "决赛",
      parts: [
        {
          name: "",
          date: "2023-06-25",
          matches: [
            {
              playerA: "夜莺",
              playerB: "路过的诡法师",
              winner: "A",
              video: "",
              games: [
                {
                  playerACharacters: [YaeMiko, Zhongli, Ningguang],
                  playerBCharacters: [Mona, Venti, Keqing],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [AratakiItto, RhodeiaOfLoch, StonehideLawachurl],
                  playerBCharacters: [Mona, Venti, Keqing],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Mona, Venti, Keqing],
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
