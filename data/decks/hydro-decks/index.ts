import type { RegisterDeckType } from "..";
import { bnk } from "./bnk";

export function hydroDecks(registerDeck: RegisterDeckType) {
  return {
    ...bnk(registerDeck),

    "双水莫娜凝光-阿阮": registerDeck({
      team: ["莫娜", "凝光", "芭芭拉"],
      actions: {
        "储之千日，用之一刻": 2,
        "祭礼残章": 2,
        "将帅兜鍪": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之水": 2,
        "元素共鸣：疗愈之水": 2,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "甜甜花酿鸡": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 2,
      },
    }),
  };
}
