import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "火星杯",
  type: "全民积分赛",
  gameVersion: "4.2",
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
          date: "2023-12-10",
          matches: [
            {
              playerA: "昨夜风",
              playerB: "卡密sama",
              video: "https://www.bilibili.com/video/BV1j64y1L76a",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "沙王的投影": 1,
                    "酒渍船帽": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "琴音之诗": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "酒渍船帽": 1,
                    "须弥城": 2,
                    "派蒙": 2,
                    "卯师傅": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "愉舞欢游": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "酒渍船帽": 1,
                    "须弥城": 2,
                    "派蒙": 2,
                    "卯师傅": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "愉舞欢游": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "愉舞欢游": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "愉舞欢游": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["莫娜", "纳西妲", "妮露"],
                  playerBActions: defineActions({
                    "星天的花雨": 2,
                    "派蒙": 1,
                    "卯师傅": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：疗愈之水": 2,
                    "草与智慧": 1,
                    "换班时间": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "武响尾蛇",
              playerB: "清白",
              video: "https://www.bilibili.com/video/BV15C4y1F7k4",
              games: [
                {
                  playerACharacters: ["迪希雅", "安柏", "琴"],
                  playerAActions: defineActions({
                    "崇诚之真": 1,
                    "蒲公英的国土": 1,
                    "风鹰剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "风龙废墟": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "交给我吧！": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["刻晴", "班尼特", "可莉"],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 1,
                    "赌徒的耳环": 1,
                    "炽烈的炎之魔女": 2,
                    "须弥城": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
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
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "酒渍船帽": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "酒渍船帽": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
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
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "酒渍船帽": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
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
                  playerACharacters: ["达达利亚", "宵宫", "神里绫人"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：疗愈之水": 1,
                    "雷与永恒": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
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
              ],
            },
          ],
        },
      ],
    },
  ],
});
