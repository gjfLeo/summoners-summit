import { Bennett, Chongyun, FatuiPyroAgent, Keqing, RaidenShogun, Shenhe } from "../shared/character-cards";
import { defineTournament } from "../shared/utils/tournaments";

export default defineTournament({
  id: "0007",
  name: "B站主播资格赛",
  gameVersion: "3.7",
  stages: [
    {
      name: "小组赛",
      parts: [
        {
          name: "DAY1",
          date: "2023-06-27",
          matches: [
            {
              playerA: "水瓶子",
              playerB: "卡密sama42",
              winner: "B",
              video: "",
              games: [
                {
                  playerACharacters: [Bennett, Keqing, FatuiPyroAgent],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                // {
                //   playerACharacters: [YaeMiko, Tighnari, Collei],
                //   playerAActions: defineActions({
                //     "赌徒的耳环": 2,
                //     "提米": 2,
                //     "立本": 2,
                //     "刘苏": 1,
                //     "寻宝仙灵": 1,
                //     "元素共鸣：交织之草": 2,
                //     "元素共鸣：蔓生之草": 2,
                //     "草与智慧": 2,
                //     "最好的伙伴！": 2,
                //     "换班时间": 2,
                //     "一掷乾坤": 1,
                //     "本大爷还没有输！": 2,
                //     "交给我吧！": 2,
                //     "快快缝补术": 1,
                //     "重攻击": 2,
                //     "仙跳墙": 1,
                //     "莲花酥": 2,
                //     "唐杜尔烤鸭": 1,
                //   }),
                //   playerBCharacters: [RhodeiaOfLoch, Fischl, Nahida],
                //   starter: "",
                //   winner: "B",
                // },
              ],
            },
            // {
            //   playerA: "企鹅带带北极熊",
            //   playerB: "卡牌狂魔张老伯",
            //   winner: "",
            //   video: "",
            //   games: [
            //     {
            //       playerACharacters: [Chongyun, HuTao, Shenhe],
            //       playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
            //       playerBActions: defineActions({
            //         "血之灶火": 2,
            //         "幸运儿银冠": 1,
            //         "赌徒的耳环": 1,
            //         "璃月港口": 1,
            //         "天守阁": 1,
            //         "桓纳兰那": 1,
            //         "派蒙": 2,
            //         "提米": 1,
            //         "立本": 2,
            //         "最好的伙伴！": 2,
            //         "换班时间": 1,
            //         "本大爷还没有输！": 2,
            //         "交给我吧！": 2,
            //         "星天之兆": 2,
            //         "送你一程": 2,
            //         "仙跳墙": 2,
            //         "莲花酥": 2,
            //         "蒙德土豆饼": 1,
            //         "烤蘑菇披萨": 2,
            //       }),
            //       starter: "B",
            //       winner: "B",
            //     },
            //   ],
            // },
          ],
        },
      ],
    },
  ],
});
