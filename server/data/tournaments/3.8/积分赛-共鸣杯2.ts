import { AratakiItto, Barbara, Beidou, Bennett, Chongyun, ElectroHypostasis, FatuiPyroAgent, Fischl, KamisatoAyaka, Keqing, Klee, Noelle, RaidenShogun, Razor, RhodeiaOfLoch, Shenhe, Yoimiya, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「月映」共鸣杯",
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
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
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
        // {
        //   name: "DAY2",
        //   date: "2023-08-08",
        //   matches: [
        //   ],
        // },
      ],
    },
    // {
    //   name: "8进4淘汰赛",
    //   rules: [
    //     "BO5",
    //     "征服",
    //     ["禁用角色", "对阵双方各禁用一张角色牌"],
    //     ["禁用阵容", "对阵双方各准备4套阵容，禁用对手一套阵容"],
    //     ["可重复角色", "每名选手的4套阵容至少包含9张不同角色牌"],
    //   ],
    //   parts: [
    //     {
    //       name: "DAY1",
    //       date: "2023-08-09",
    //       matches: [
    //       ],
    //     },
    //     {
    //       name: "DAY2",
    //       date: "2023-08-10",
    //       matches: [
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "半决赛",
    //   rules: [
    //     "BO5",
    //     "征服",
    //     ["禁用角色", "对阵双方各禁用一张角色牌"],
    //     ["禁用阵容", "对阵双方各准备4套阵容，禁用对手一套阵容"],
    //     ["可重复角色", "每名选手的4套阵容至少包含9张不同角色牌"],
    //   ],
    //   parts: [
    //     {
    //       name: "",
    //       date: "2023-08-11",
    //       matches: [
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "决赛",
    //   rules: [
    //     "BO5",
    //     "征服",
    //     ["禁用角色", "对阵双方各禁用一张角色牌"],
    //     ["禁用阵容", "对阵双方各准备4套阵容，禁用对手一套阵容"],
    //     ["可重复角色", "每名选手的4套阵容至少包含9张不同角色牌"],
    //   ],
    //   parts: [
    //     {
    //       name: "",
    //       date: "2023-08-12",
    //       matches: [
    //       ],
    //     },
    //   ],
    // },
  ],
});
