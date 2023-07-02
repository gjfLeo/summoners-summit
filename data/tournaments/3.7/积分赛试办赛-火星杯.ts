import { AratakiItto, Barbara, Bennett, Chongyun, ElectroHypostasis, Fischl, Keqing, Klee, Mona, Nahida, Noelle, RaidenShogun, RhodeiaOfLoch, Shenhe, Venti, Yoimiya } from "../../shared/character-cards";
import { defineTournament } from "../../shared/utils/tournaments";
import { defineActions } from "../../shared/utils/decks";

const actions = {
  "零之启-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 1,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "宇宙蓝色闪光-水皇草": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "派蒙": 2,
    "提米": 1,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
};

export default defineTournament({
  name: "火星杯",
  gameVersion: "3.7",
  tag: "积分赛试办赛",
  stages: [
    {
      name: "8进4淘汰赛",
      rules: ["征服", "BO5"],
      parts: [
        {
          name: "DAY1",
          date: "2023-06-29",
          matches: [
            {
              playerA: "剑舞",
              playerB: "人生若只如初见",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1xV411g7nb",
              games: [
                {
                  playerACharacters: [Bennett, ElectroHypostasis, Yoimiya],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Bennett, ElectroHypostasis, Yoimiya],
                  playerBCharacters: [Keqing, Mona, Venti],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [RaidenShogun, Chongyun, Shenhe],
                  playerBCharacters: [Keqing, Mona, Venti],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBCharacters: [Keqing, Mona, Venti],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "宇宙蓝色闪光",
              playerB: "零之启",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1SN411D7A9",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Noelle, Barbara, AratakiItto],
                  playerBCharacters: [Fischl, Nahida, Mona],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["宇宙蓝色闪光-水皇草"],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["宇宙蓝色闪光-水皇草"],
                  playerBCharacters: [Fischl, Nahida, Mona],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["宇宙蓝色闪光-水皇草"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["零之启-双冰"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        // {
        //   name: "DAY2",
        //   date: "2023-06-30",
        //   matches: [
        //     {
        //       playerA: "陌生",
        //       playerB: "长门有希",
        //       winner: "A",
        //       video: "https://www.bilibili.com/video/BV1pj411m7gU",
        //       games: [],
        //     },
        //     {
        //       playerA: "浅忆",
        //       playerB: "吃猫萝",
        //       winner: "B",
        //       video: "https://www.bilibili.com/video/BV12g4y1A7Dr",
        //       games: [],
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   name: "半决赛",
    //   parts: [],
    // },
    // {
    //   name: "决赛",
    //   parts: [],
    // },
  ],
});
