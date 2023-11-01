import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "火星杯",
  type: "全民积分赛",
  gameVersion: "4.1",
  stages: [
    {
      name: "16进8",
      rules: [
        "BO5",
        "征服",
      ],
      parts: [
        {
          name: "DAY1",
          date: "2023-10-29",
          matches: [
            {
              playerA: "唯此一心",
              playerB: "LL起翼夜莺",
              video: "https://www.bilibili.com/video/BV1UC4y1n7EL",
              games: [
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerAActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  playerBCharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerAActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "绝缘之旗印": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "莫娜", "纳西妲"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "酒渍船帽": 2,
                    "桓纳兰那": 2,
                    "提米": 2,
                    "拉娜": 2,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 2,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["雷电将军", "申鹤", "重云"],
                  playerBActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "刘苏": 1,
                    "迪娜泽黛": 1,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "奥利维拉",
              playerB: "Zima",
              video: "https://www.bilibili.com/video/BV1dz4y1P7jR",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "达达利亚"],
                  playerAActions: defineActions({
                    "王下近侍": 2,
                    "璃月港口": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 1,
                    "自由的新风": 1,
                    "元素共鸣：交织之水": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 1,
                    "寻宝仙灵": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 1,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "送你一程": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["八重神子", "愚人众·火之债务处理人", "纯水精灵·洛蒂娅"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 1,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "送你一程": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "赌徒的耳环": 1,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerAActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "赌徒的耳环": 1,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
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
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "达达利亚"],
                  playerAActions: defineActions({
                    "王下近侍": 2,
                    "璃月港口": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 1,
                    "自由的新风": 1,
                    "元素共鸣：交织之水": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "赌徒的耳环": 1,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-10-30",
          matches: [
            {
              playerA: "妞妞嘛",
              playerB: "千折以奉",
              video: "https://www.bilibili.com/video/BV1494y157N1",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "绝缘之旗印": 1,
                    "酒渍船帽": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "阿圆": 1,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "诺艾尔", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "阿圆": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "雷与永恒": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "诺艾尔", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "阿圆": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "雷与永恒": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["珊瑚宫心海", "诺艾尔", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "阿圆": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "雷与永恒": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "莲花酥": 1,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "蕊梨",
              playerB: "凪落子Nagi",
              video: "https://www.bilibili.com/video/BV1vQ4y1H72K",
              games: [
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["申鹤", "雷电将军", "重云"],
                  playerAActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "须弥城": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "重攻击": 2,
                    "温妮莎传奇": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "A",
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
