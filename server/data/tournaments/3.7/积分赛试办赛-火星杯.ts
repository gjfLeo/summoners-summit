import { AratakiItto, Barbara, Bennett, Chongyun, ElectroHypostasis, FatuiPyroAgent, Fischl, KamisatoAyaka, Keqing, Klee, Mona, Nahida, Noelle, RaidenShogun, RhodeiaOfLoch, Shenhe, Sucrose, Venti, YaeMiko, Yoimiya, defineActions, defineTournament } from "~/utils/types";

const actions = {
  "宇宙蓝色闪光-水皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
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

  "长门有希-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "长门有希-水债八": defineActions({
    "神篱之御荫": 1,
    "悉数讨回": 1,
    "幸运儿银冠": 2,
    "璃月港口": 2,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 2,
    "白垩之术": 1,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "长门有希-双冰": defineActions({
    "赌徒的耳环": 2,
    "提米": 2,
    "常九爷": 2,
    "参量质变仪": 2,
    "寻宝仙灵": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "雷与永恒": 2,
    "换班时间": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "温妮莎传奇": 2,
    "北地烟熏鸡": 2,
    "蒙德土豆饼": 2,
    "兽肉薄荷卷": 2,
  }),

  "陌生-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 1,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "送你一程": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "唐杜尔烤鸡": 1,
  }),
  "陌生-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "桓那兰那": 2,
    "立本": 2,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 2,
    "运筹帷幄": 1,
    "交给我吧！": 1,
    "白垩之术": 1,
    "送你一程": 1,
    "护法之誓": 1,
    "重攻击": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 2,
  }),
  "陌生-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 1,
    "拉娜": 2,
    "风与自由": 1,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "白垩之术": 2,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "唐杜尔烤鸡": 1,
  }),
  "陌生-莫温刻": defineActions({
    "祭礼剑": 1,
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "寻宝仙灵": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "白垩之术": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸡": 1,
  }),

  "吃猫萝-双风": defineActions({
    "祭礼残章": 2,
    "赌徒的耳环": 2,
    "桓那兰那": 1,
    "提米": 2,
    "立本": 2,
    "拉娜": 2,
    "寻宝仙灵": 2,
    "元素共鸣：交织之风": 2,
    "元素共鸣：迅捷之风": 2,
    "风与自由": 2,
    "最好的伙伴！": 1,
    "一掷乾坤": 1,
    "本大爷还没有输！": 1,
    "交给我吧！": 2,
    "送你一程": 1,
    "莲花酥": 1,
    "蒙德土豆饼": 2,
    "唐杜尔烤鸡": 2,
  }),
  "吃猫萝-双岩": defineActions({
    "钟剑": 2,
    "赌徒的耳环": 1,
    "千岩牢固": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "桓那兰那": 2,
    "立本": 2,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 1,
    "交给我吧！": 1,
    "送你一程": 1,
    "护法之誓": 1,
    "重攻击": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "烤蘑菇披萨": 2,
  }),
  "吃猫萝-水皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 1,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 1,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),

  "剑舞-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 1,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 2,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "一掷乾坤": 1,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "北地烟熏鸡": 1,
  }),
  "剑舞-双火": defineActions({
    "冒险憧憬": 2,
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "参量质变仪": 2,
    "寻宝仙灵": 2,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "最好的伙伴！": 1,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "温妮莎传奇": 1,
    "莲花酥": 2,
  }),
  "剑舞-水皇草": defineActions({
    "幸运儿银冠": 1,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 2,
  }),

  "零之启-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 1,
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
  "零之启-双火": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 2,
    "赌徒的耳环": 2,
    "璃月港口": 2,
    "须弥城": 2,
    "派蒙": 2,
    "立本": 2,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 1,
    "莲花酥": 1,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸡": 1,
  }),
  "零之启-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "拉娜": 2,
    "寻宝仙灵": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 1,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸡": 1,
  }),

  "浅忆-双冰": defineActions({
    "狼的末路": 1,
    "赌徒的耳环": 1,
    "璃月港口": 2,
    "桓那兰那": 1,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "换班时间": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "送你一程": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "烤蘑菇披萨": 1,
    "提瓦特煎蛋": 1,
  }),
  "浅忆-双火": defineActions({
    "冒险憧憬": 1,
    "赌徒的耳环": 1,
    "璃月港口": 2,
    "桓那兰那": 1,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "刘苏": 1,
    "拉娜": 2,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "风与自由": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 1,
    "护法之誓": 1,
    "莲花酥": 2,
    "北地烟熏鸡": 1,
    "提瓦特煎蛋": 1,
  }),
  "浅忆-水皇草": defineActions({
    "幸运儿银冠": 1,
    "赌徒的耳环": 1,
    "璃月港口": 2,
    "桓那兰那": 1,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "刘苏": 1,
    "拉娜": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "白垩之术": 1,
    "送你一程": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "烤蘑菇披萨": 1,
    "提瓦特煎蛋": 1,
  }),
};

export default defineTournament({
  name: "火星杯",
  gameVersion: "3.7",
  type: "积分赛试办赛",
  stages: [
    {
      name: "8进4淘汰赛",
      rules: {
        numDecks: 3,
        numGames: 5,
        mode: "Conquest",
      },
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
        {
          name: "DAY2",
          date: "2023-06-30",
          matches: [
            {
              playerA: "陌生",
              playerB: "长门有希",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1pj411m7gU",
              games: [
                {
                  playerACharacters: [Nahida, Mona, Fischl],
                  playerAActions: actions["陌生-莫皇草"],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  playerBActions: actions["长门有希-水债八"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["陌生-双冰"],
                  playerBCharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  playerBActions: actions["长门有希-水债八"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Barbara, AratakiItto, Noelle],
                  playerAActions: actions["陌生-双岩"],
                  playerBCharacters: [KamisatoAyaka, Yoimiya, Shenhe],
                  playerBActions: actions["长门有希-双冰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Barbara, AratakiItto, Noelle],
                  playerAActions: actions["陌生-双岩"],
                  playerBCharacters: [Mona, Nahida, Fischl],
                  playerBActions: actions["长门有希-莫皇草"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "浅忆",
              playerB: "吃猫萝",
              winner: "B",
              video: "https://www.bilibili.com/video/BV12g4y1A7Dr",
              games: [
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerAActions: actions["浅忆-双火"],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  playerBActions: actions["吃猫萝-双岩"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Nahida, RhodeiaOfLoch],
                  playerAActions: actions["浅忆-水皇草"],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  playerBActions: actions["吃猫萝-双岩"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, Shenhe, RaidenShogun],
                  playerAActions: actions["浅忆-双冰"],
                  playerBCharacters: [Shenhe, Venti, Sucrose],
                  playerBActions: actions["吃猫萝-双风"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, Shenhe, RaidenShogun],
                  playerAActions: actions["浅忆-双冰"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBActions: actions["吃猫萝-水皇草"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, Shenhe, RaidenShogun],
                  playerAActions: actions["浅忆-双冰"],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  playerBActions: actions["吃猫萝-双岩"],
                  starter: "A",
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
      rules: {
        numDecks: 3,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-07-01",
          matches: [
            {
              playerA: "陌生",
              playerB: "吃猫萝",
              video: "https://www.bilibili.com/video/BV1D14y1d7mW",
              games: [
                {
                  playerACharacters: [Nahida, Mona, Fischl],
                  playerAActions: actions["陌生-莫皇草"],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  playerBActions: actions["吃猫萝-双岩"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["陌生-双冰"],
                  playerBCharacters: [Shenhe, Venti, Sucrose],
                  playerBActions: actions["吃猫萝-双风"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Barbara, AratakiItto, Noelle],
                  playerAActions: actions["陌生-双岩"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBActions: actions["吃猫萝-水皇草"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Barbara, AratakiItto, Noelle],
                  playerAActions: actions["陌生-双岩"],
                  playerBCharacters: [Shenhe, Venti, Sucrose],
                  playerBActions: actions["吃猫萝-双风"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Barbara, AratakiItto, Noelle],
                  playerAActions: actions["陌生-双岩"],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  playerBActions: actions["吃猫萝-双岩"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "剑舞",
              playerB: "零之启",
              video: "https://www.bilibili.com/video/BV1og4y1A7uz",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerAActions: actions["剑舞-水皇草"],
                  playerBCharacters: [Fischl, Nahida, Mona],
                  playerBActions: actions["零之启-莫皇草"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [RaidenShogun, Chongyun, Shenhe],
                  playerAActions: actions["剑舞-双冰"],
                  playerBCharacters: [Fischl, Nahida, Mona],
                  playerBActions: actions["零之启-莫皇草"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Bennett, ElectroHypostasis, Yoimiya],
                  playerAActions: actions["剑舞-双火"],
                  playerBCharacters: [Fischl, Nahida, Mona],
                  playerBActions: actions["零之启-莫皇草"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Bennett, ElectroHypostasis, Yoimiya],
                  playerAActions: actions["剑舞-双火"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["零之启-双冰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Bennett, ElectroHypostasis, Yoimiya],
                  playerAActions: actions["剑舞-双火"],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  playerBActions: actions["零之启-双火"],
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
      rules: {
        numDecks: 3,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-07-02",
          matches: [
            {
              playerA: "陌生",
              playerB: "剑舞",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1114y1d7q3",
              games: [
                {
                  playerACharacters: [Keqing, Mona, Venti],
                  playerAActions: actions["陌生-莫温刻"],
                  playerBCharacters: [Bennett, ElectroHypostasis, Yoimiya],
                  playerBActions: actions["剑舞-双火"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Keqing, Mona, Venti],
                  playerAActions: actions["陌生-莫温刻"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBActions: actions["剑舞-水皇草"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Keqing, Mona, Venti],
                  playerAActions: actions["陌生-莫温刻"],
                  playerBCharacters: [RaidenShogun, Chongyun, Shenhe],
                  playerBActions: actions["剑舞-双冰"],
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
