import { AratakiItto, Fischl, Keqing, Mona, Nahida, Ningguang, RhodeiaOfLoch, StonehideLawachurl, Venti, YaeMiko, Zhongli } from "../shared/character-cards";
import { defineTournament } from "../shared/utils/tournaments";

export default defineTournament({
  id: "0003",
  name: "TT语音杯",
  tag: "全民积分赛",
  gameVersion: "3.7",
  image: "https://webstatic.mihoyo.com/upload/op-public/2023/05/23/78b296f7dc90e6e1327e891ce3bb2fa0_4267338515669661861.jpg",
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
