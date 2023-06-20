import type { RegisterDeckType } from "..";

export function anemoDecks(registerDeck: RegisterDeckType) {
  return {
    "莫温魈-莲花": registerDeck({
      team: ["莫娜", "温迪", "魈"],
      actions: {
        "绪风之拥": 2,
        "派蒙": 2,
        "立本": 2,
        "拉娜": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之风": 2,
        "元素共鸣：迅捷之风": 2,
        "风与自由": 1,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "鹤归之时": 2,
        "送你一程": 1,
        "下落斩": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
  };
}
