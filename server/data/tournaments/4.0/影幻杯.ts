import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "影幻杯",
  gameVersion: "4.0",
  stages: [
    {
      name: "突围赛",
      rules: [
        "BO3",
        "征服",
      ],
      parts: [
        {
          name: "突围赛",
          date: "2023-09-17",
          matches: [
            {
              playerA: "卡皮巴拉",
              playerB: "云雀",
              video: "https://www.bilibili.com/video/BV178411v7eH",
              games: [
                {
                  playerACharacters: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "八重神子"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "岩与契约": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["菲谢尔", "莫娜", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "酒渍船帽": 1,
                    "桓纳兰那": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "风与自由": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "亦然",
              playerB: "曲误周郎",
              video: "https://www.bilibili.com/video/BV178411v7eH?p=3",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBActions: defineActions({
                    "悉数讨回": 2,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["诺艾尔", "芭芭拉", "荒泷一斗"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "天守阁": 2,
                    "桓纳兰那": 2,
                    "立本": 2,
                    "旧时庭园": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "风与自由": 1,
                    "运筹帷幄": 1,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "护法之誓": 1,
                    "重攻击": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "提米": 1,
                    "立本": 2,
                    "刘苏": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["诺艾尔", "芭芭拉", "荒泷一斗"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "天守阁": 2,
                    "桓纳兰那": 2,
                    "立本": 2,
                    "旧时庭园": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "风与自由": 1,
                    "运筹帷幄": 1,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "护法之誓": 1,
                    "重攻击": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "音尘",
              playerB: "古明地觉",
              video: "https://www.bilibili.com/video/BV178411v7eH?p=6",
              games: [
                {
                  playerACharacters: ["雷电将军", "申鹤", "重云"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "冰风迷途的勇士": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "拉娜": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "派蒙": 1,
                    "立本": 2,
                    "刘苏": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷电将军", "申鹤", "重云"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "冰风迷途的勇士": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "拉娜": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "无常之面": 1,
                    "酒渍船帽": 2,
                    "须弥城": 2,
                    "派蒙": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "xhope",
              playerB: "本吃包",
              video: "https://www.bilibili.com/video/BV178411v7eH?p=9",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "派蒙": 1,
                    "阿圆": 1,
                    "立本": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBActions: defineActions({
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 2,
                    "珊瑚宫": 1,
                    "桓纳兰那": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "派蒙": 1,
                    "阿圆": 1,
                    "立本": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["神里绫华", "雷电将军", "申鹤"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "和大名",
              playerB: "阿源",
              video: "https://www.bilibili.com/video/BV178411v7eH?p=11",
              games: [
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "岩与契约": 1,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["荒泷一斗", "芭芭拉", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "风与自由": 1,
                    "交给我吧！": 2,
                    "白垩之术": 2,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["荒泷一斗", "芭芭拉", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "风与自由": 1,
                    "交给我吧！": 2,
                    "白垩之术": 2,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "LL起翼夜鹰",
              playerB: "枨枘",
              video: "https://www.bilibili.com/video/BV178411v7eH?p=13",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["神里绫华", "宵宫", "申鹤"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "提米": 2,
                    "常九爷": 2,
                    "参量质变仪": 1,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "雷与永恒": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "赌徒的耳环": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "派蒙": 1,
                    "阿圆": 2,
                    "立本": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "风与自由": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "送你一程": 2,
                    "莲花酥": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "赌徒的耳环": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "派蒙": 1,
                    "阿圆": 2,
                    "立本": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "LL起翼夜鹰",
              playerB: "喵帕斯",
              video: "https://www.bilibili.com/video/BV178411v7eH?p=16",
              games: [
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "风与自由": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "送你一程": 2,
                    "莲花酥": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "风与自由": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["班尼特", "刻晴", "可莉"],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "风与自由": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "鸣神大社": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["神里绫华", "雷电将军", "申鹤"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "提米": 2,
                    "鲸井小弟": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "雷与永恒": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "温妮莎传奇": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
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
