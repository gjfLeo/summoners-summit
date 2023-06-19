import type { RegisterDeckType } from "..";
import { ytn } from "./ytn";

export function dendroDecks(registerDeck: RegisterDeckType) {
  return {
    ...ytn(registerDeck),

    "提八草神-齿轮": registerDeck({
      team: ["八重神子", "提纳里", "纳西妲"],
      actions: {
        "赌徒的耳环": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "一掷乾坤": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "快快缝补术": 2,
        "送你一程": 1,
        "重攻击": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
  };
}
