import type { RegisterDeckType } from "..";
import { fnr } from "./fnr";

export function otherDecks(registerDeck: RegisterDeckType) {
  return {
    ...fnr(registerDeck),

    "莫皇草-Soul": registerDeck({
      team: ["纳西妲", "莫娜", "菲谢尔"],
      actions: {
        "赌徒的耳环": 2,
        "鸣神大社": 1,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 1,
        "旭东": 1,
        "寻宝仙灵": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "白垩之术": 2,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
        "唐杜尔烤鸭": 2,
      },
    }),
    "水可草-企鹅带带北极熊": registerDeck({
      team: ["可莉", "纯水精灵·洛蒂娅", "纳西妲"],
      actions: {
        "砰砰礼物": 2,
        "千夜浮梦": 2,
        "赌徒的耳环": 2,

        "桓纳兰那": 2,
        "立本": 2,

        "最好的伙伴！": 2,
        "换班时间": 2,
        "一掷乾坤": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "温妮莎传奇": 2,

        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "唐杜尔烤鸭": 2,
      },
    }),
    "莫温雷-老伯": registerDeck({
      team: ["无相之雷", "莫娜", "温迪"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 1,
        "提米": 2,
        "立本": 2,
        "拉娜": 2,
        "寻宝仙灵": 2,
        "风与自由": 1,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "一掷乾坤": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    "莫刻温-提瓦特煎蛋队": registerDeck({
      team: ["莫娜", "温迪", "刻晴"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "立本": 2,
        "鲸井小弟": 2,
        "拉娜": 2,
        "风与自由": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "白垩之术": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "唐杜尔烤鸭": 2,
      },
    }),
    "班尼特雷神绫华-兔娘": registerDeck({
      team: ["班尼特", "雷电将军", "神里绫华"],
      actions: {
        "冒险憧憬": 2,
        "风鹰剑": 1,
        "冒险家头带": 2,
        "璃月港口": 1,
        "西风大教堂": 1,
        "桓纳兰那": 2,
        "立本": 2,
        "刘苏": 2,
        "寻宝仙灵": 2,
        "雷与永恒": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "护法之誓": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    "水债八-老伯": registerDeck({
      team: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
      actions: {
        "神篱之御荫": 1,
        "悉数讨回": 1,
        "千岩牢固": 2,
        "璃月港口": 2,
        "天守阁": 2,
        "须弥城": 2,
        "阿圆": 2,
        "立本": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "白垩之术": 2,
        "送你一程": 1,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 2,
      },
    }),
    "水债皇-雪国Ink": registerDeck({
      team: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
      actions: {
        "悉数讨回": 2,
        "幸运儿银冠": 2,
        "璃月港口": 2,
        "天守阁": 1,
        "桓纳兰那": 1,
        "派蒙": 2,
        "提米": 1,
        "立本": 2,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 2,
        "送你一程": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
        "烤蘑菇披萨": 2,
      },
    }),
    "水债皇-卡密sama": registerDeck({
      team: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
      actions: {
        "悉数讨回": 1,
        "幸运儿银冠": 1,
        "千岩牢固": 1,
        "璃月港口": 2,
        "天守阁": 2,
        "须弥城": 1,
        "桓纳兰那": 1,
        "立本": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 2,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 2,
      },
    }),
    "水债皇-月话音月": registerDeck({
      team: ["菲谢尔", "愚人众·火之债务处理人", "纯水精灵·洛蒂娅"],
      actions: {
        "悉数讨回": 2,
        "幸运儿银冠": 2,
        "璃月港口": 2,
        "桓纳兰那": 1,
        "派蒙": 2,
        "立本": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "白垩之术": 1,
        "送你一程": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 1,
      },
    }),
    "琴皇草-黄油蟹蟹队": registerDeck({
      team: ["琴", "菲谢尔", "纳西妲"],
      actions: {
        "风鹰剑": 1,
        "赌徒的耳环": 1,
        "千岩牢固": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "风与自由": 1,
        "最好的伙伴！": 1,
        "换班时间": 2,
        "一掷乾坤": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "送你一程": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 2,
      },
    }),
  };
}
