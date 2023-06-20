import type { RegisterDeckType } from "..";

/**
 * 八重神子、柯莱、提纳里
 *
 * @param registerDeck
 * @returns
 */
export function ytn(registerDeck: RegisterDeckType) {
  return {
    // 无弓无天赋 ===================================================================
    ...{
      // 提米2 立本2 寻宝仙灵2 运筹帷幄2
      "八柯提-吴意": registerDeck({
        team: ["柯莱", "八重神子", "提纳里"],
        actions: {
          "赌徒的耳环": 2,
          "提米": 2,
          "立本": 2,
          "寻宝仙灵": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 1,
          "星天之兆": 1,
          "送你一程": 2,
          "重攻击": 1,
          "仙跳墙": 1,
          "莲花酥": 2,
          "蒙德土豆饼": 2,
        },
      }),

      // 提米2 立本2 寻宝仙灵1 运筹帷幄2
      "八柯提-Sherry": registerDeck({
        team: ["八重神子", "提纳里", "柯莱"],
        actions: {
          "赌徒的耳环": 2,
          "提米": 2,
          "立本": 2,
          "寻宝仙灵": 1,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "一掷乾坤": 1,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 1,
          "星天之兆": 1,
          "送你一程": 2,
          "重攻击": 1,
          "仙跳墙": 2,
          "莲花酥": 2,
          "蒙德土豆饼": 1,
        },
      }),

      // 提米2 立本2
      "八柯提-毕游侠": registerDeck({
        team: ["提纳里", "八重神子", "柯莱"],
        actions: {
          "赌徒的耳环": 2,
          "桓纳兰那": 2,
          "提米": 2,
          "立本": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "换班时间": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 2,
          "快快缝补术": 1,
          "送你一程": 1,
          "重攻击": 1,
          "仙跳墙": 1,
          "莲花酥": 2,
          "蒙德土豆饼": 2,
        },
      }),

      // 立本2 运筹帷幄2
      "八柯提-疯猫鸽鸽": registerDeck({
        team: ["提纳里", "八重神子", "柯莱"],
        actions: {
          "赌徒的耳环": 2,
          "立本": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "一掷乾坤": 2,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 2,
          "快快缝补术": 2,
          "送你一程": 1,
          "重攻击": 2,
          "仙跳墙": 2,
          "莲花酥": 2,
          "蒙德土豆饼": 1,
        },
      }),

      // 寻宝仙灵2
      "八柯提-兔娘": registerDeck({
        team: ["提纳里", "八重神子", "柯莱"],
        actions: {
          "赌徒的耳环": 2,
          "桓纳兰那": 2,
          "寻宝仙灵": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "换班时间": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 2,
          "重攻击": 2,
          "仙跳墙": 2,
          "莲花酥": 2,
          "北地烟熏鸡": 2,
          "蒙德土豆饼": 2,
        },
      }),

    },

    // 有弓无天赋 ===================================================================
    ...{
      // 7 ============================

      // 提米2 立本2 寻宝仙灵1 运筹帷幄2
      "八柯提-古明地觉": registerDeck({
        team: ["八重神子", "提纳里", "柯莱"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "提米": 2,
          "立本": 2,
          "寻宝仙灵": 1,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 1,
          "星天之兆": 1,
          "送你一程": 2,
          "重攻击": 1,
          "仙跳墙": 2,
          "莲花酥": 2,
          "蒙德土豆饼": 1,
        },
      }),

      // 提米2 立本1 寻宝仙灵2 运筹帷幄2
      "八柯提-长安大魔王": registerDeck({
        team: ["八重神子", "提纳里", "柯莱"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "提米": 2,
          "立本": 1,
          "寻宝仙灵": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 1,
          "星天之兆": 1,
          "快快缝补术": 1,
          "送你一程": 2,
          "重攻击": 1,
          "仙跳墙": 1,
          "莲花酥": 2,
          "蒙德土豆饼": 1,
        },
      }),

      // 6 ============================

      // 提米2 立本1 寻宝仙灵2 运筹帷幄1
      "八柯提-今天不想吃苹果": registerDeck({
        team: ["八重神子", "提纳里", "柯莱"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "提米": 2,
          "立本": 1,
          "寻宝仙灵": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "换班时间": 1,
          "运筹帷幄": 1,
          "本大爷还没有输！": 2,
          "交给我吧！": 1,
          "星天之兆": 1,
          "送你一程": 2,
          "重攻击": 1,
          "仙跳墙": 2,
          "莲花酥": 2,
          "蒙德土豆饼": 1,
        },
      }),

      // 提米2 立本1 寻宝仙灵1 运筹帷幄2
      "八柯提-卡密sama": registerDeck({
        team: ["提纳里", "八重神子", "柯莱"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "提米": 2,
          "立本": 1,
          "寻宝仙灵": 1,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "换班时间": 1,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 1,
          "星天之兆": 1,
          "送你一程": 2,
          "重攻击": 1,
          "仙跳墙": 2,
          "莲花酥": 2,
          "蒙德土豆饼": 1,
        },
      }),

      // 提米2 立本1 寻宝仙灵1 运筹帷幄2 （行动牌同上，角色顺序不同）
      "八柯提-唐傀": registerDeck({
        team: ["八重神子", "柯莱", "提纳里"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "提米": 2,
          "立本": 1,
          "寻宝仙灵": 1,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "换班时间": 1,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 1,
          "星天之兆": 1,
          "送你一程": 2,
          "重攻击": 1,
          "仙跳墙": 2,
          "莲花酥": 2,
          "蒙德土豆饼": 1,
        },
      }),

      // 提米2 立本1 寻宝仙灵1 运筹帷幄2 （比上面少1莲花酥，多1土豆饼）
      "八柯提-甜甜花酿鸡队": registerDeck({
        team: ["柯莱", "八重神子", "提纳里"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "提米": 2,
          "立本": 1,
          "寻宝仙灵": 1,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "换班时间": 1,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 1,
          "星天之兆": 1,
          "送你一程": 2,
          "重攻击": 1,
          "仙跳墙": 1,
          "莲花酥": 2,
          "蒙德土豆饼": 2,
        },
      }),

      // 提米1 立本2 寻宝仙灵2 运筹帷幄1
      "八柯提-八重妞妞": registerDeck({
        team: ["柯莱", "八重神子", "提纳里"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "提米": 1,
          "立本": 2,
          "寻宝仙灵": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "运筹帷幄": 1,
          "本大爷还没有输！": 2,
          "交给我吧！": 2,
          "星天之兆": 1,
          "送你一程": 2,
          "仙跳墙": 2,
          "莲花酥": 2,
          "蒙德土豆饼": 2,
        },
      }),

      // 立本2 寻宝仙灵2 运筹帷幄2
      "八柯提-月话音月": registerDeck({
        team: ["八重神子", "提纳里", "柯莱"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "立本": 2,
          "寻宝仙灵": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 1,
          "星天之兆": 1,
          "送你一程": 1,
          "重攻击": 1,
          "温妮莎传奇": 2,
          "仙跳墙": 2,
          "莲花酥": 2,
          "蒙德土豆饼": 1,
        },
      }),

      // 5 ============================

      // 提米2 寻宝仙灵2 运筹帷幄1
      "八柯提-皮皮猪": registerDeck({
        team: ["柯莱", "八重神子", "提纳里"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "提米": 2,
          "寻宝仙灵": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "换班时间": 2,
          "运筹帷幄": 1,
          "本大爷还没有输！": 2,
          "交给我吧！": 2,
          "星天之兆": 1,
          "快快缝补术": 1,
          "重攻击": 1,
          "仙跳墙": 1,
          "莲花酥": 2,
          "蒙德土豆饼": 2,
        },
      }),

      // 提米2 立本1 寻宝仙灵2
      "八柯提-魔法绵阳Tobby": registerDeck({
        team: ["提纳里", "八重神子", "柯莱"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "提米": 2,
          "立本": 1,
          "寻宝仙灵": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 2,
          "星天之兆": 1,
          "送你一程": 1,
          "重攻击": 1,
          "仙跳墙": 2,
          "莲花酥": 2,
          "蒙德土豆饼": 2,
          "唐杜尔烤鸭": 1,
        },
      }),

      // 4 ============================

      // 立本2 运筹帷幄2
      "八柯提-莲花": registerDeck({
        team: ["八重神子", "提纳里", "柯莱"],
        actions: {
          "阿莫斯之弓": 1,
          "赌徒的耳环": 2,
          "立本": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "换班时间": 1,
          "运筹帷幄": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 2,
          "星天之兆": 1,
          "白垩之术": 1,
          "快快缝补术": 2,
          "送你一程": 1,
          "重攻击": 1,
          "仙跳墙": 1,
          "莲花酥": 2,
          "蒙德土豆饼": 1,
        },
      }),
    },

    // 有天赋无弓
    ...{
      // 寻宝仙灵2
      "八柯提-鸭鸭": registerDeck({
        team: ["提纳里", "八重神子", "柯莱"],
        actions: {
          "神篱之御荫": 1,
          "赌徒的耳环": 2,
          "寻宝仙灵": 2,
          "元素共鸣：交织之草": 2,
          "元素共鸣：蔓生之草": 2,
          "草与智慧": 2,
          "最好的伙伴！": 2,
          "换班时间": 1,
          "一掷乾坤": 2,
          "本大爷还没有输！": 2,
          "交给我吧！": 2,
          "快快缝补术": 2,
          "重攻击": 2,
          "仙跳墙": 2,
          "莲花酥": 2,
          "北地烟熏鸡": 2,
        },
      }),
    },

  };
}