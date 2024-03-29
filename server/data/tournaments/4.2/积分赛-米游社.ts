import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「燃斗无双」米游社",
  type: "全民积分赛",
  gameVersion: "4.2",
  stages: [
    {
      name: "8进4",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numCharactersRequired: 7,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2023-12-14",
          matches: [
            {
              playerA: "枫间璃",
              playerB: "恰雪来故丷",
              video: "https://www.bilibili.com/video/BV1Vp4y1o7sK",
              banned: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerAActions: defineActions({
                    "绝缘之旗印": 1,
                    "海染砗磲": 2,
                    "沙王的投影": 1,
                    "沉沦之心": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["班尼特", "愚人众·火之债务处理人", "无相之雷"],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "赌徒的耳环": 2,
                    "璃月港口": 1,
                    "须弥城": 2,
                    "桓那兰那": 1,
                    "风龙废墟": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "一掷乾坤": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerAActions: defineActions({
                    "星天的花雨": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "草与智慧": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  playerBActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
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
                    "星天之兆": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "零之启",
              playerB: "浅冽（重生版）",
              video: "https://www.bilibili.com/video/BV1Vp4y1o7sK",
              banned: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "重云", "神里绫华"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 1,
                    "便携营养袋": 1,
                    "万家灶火": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "重攻击": 1,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "达达利亚"],
                  playerBActions: defineActions({
                    "王下近侍": 1,
                    "赌徒的耳环": 1,
                    "海染砗磲": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "重云", "优菈"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 1,
                    "便携营养袋": 1,
                    "万家灶火": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "重攻击": 1,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 1,
                  }),
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBActions: defineActions({
                    "星天的花雨": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "草与智慧": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
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
          date: "2023-12-15",
          matches: [
            {
              playerA: "叶叁伍",
              playerB: "曲误周郎",
              video: "https://www.bilibili.com/video/BV1tQ4y177y6",
              banned: [
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["北斗", "雷泽", "重云"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "拳力斗技！": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
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
                  playerACharacters: ["北斗", "雷泽", "重云"],
                  playerAActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "拳力斗技！": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBActions: defineActions({
                    "星天的花雨": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "草与智慧": 1,
                    "最好的伙伴！": 1,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "北冥有鲲",
              playerB: "雀鲨",
              video: "https://www.bilibili.com/video/BV1tQ4y177y6",
              banned: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "可莉", "无相之雷"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "赌徒的耳环": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "风龙废墟": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "万家灶火": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "绝缘之旗印": 1,
                    "无常之面": 2,
                    "海染砗磲": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
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
                  playerACharacters: ["达达利亚", "宵宫", "神里绫人"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 1,
                    "雷与永恒": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["班尼特", "愚人众·火之债务处理人", "无相之雷"],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "桓那兰那": 1,
                    "风龙废墟": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
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
    {
      name: "半决赛",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numCharactersRequired: 7,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-12-16",
          matches: [
            {
              playerA: "枫间璃",
              playerB: "雀鲨",
              video: "https://www.bilibili.com/video/BV1ut4y1o78C",
              banned: [
                {
                  playerACharacters: ["行秋", "神里绫华", "重云"],
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                },
              ],
              games: [
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
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
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBActions: defineActions({
                    "星天的花雨": 2,
                    "派蒙": 1,
                    "卯师傅": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "草与智慧": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
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
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
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
                    "愉舞欢游": 1,
                    "元素共鸣：交织之雷": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["妮露", "莫娜", "纳西妲"],
                  playerAActions: defineActions({
                    "星天的花雨": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "草与智慧": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "送你一程": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
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
                    "愉舞欢游": 1,
                    "元素共鸣：交织之雷": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
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
            {
              playerA: "浅冽（重生版）",
              playerB: "曲误周郎",
              video: "https://www.bilibili.com/video/BV1ut4y1o78C",
              banned: [
                {
                  playerACharacters: ["重云", "行秋", "优菈"],
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "申鹤", "神里绫华"],
                  playerAActions: defineActions({
                    "寒天宣命祝词": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 1,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "重攻击": 1,
                    "温妮莎传奇": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBActions: defineActions({
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
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "申鹤", "神里绫华"],
                  playerAActions: defineActions({
                    "寒天宣命祝词": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 1,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "重攻击": 1,
                    "温妮莎传奇": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "流浪者", "优菈"],
                  playerAActions: defineActions({
                    "狼的末路": 1,
                    "赌徒的耳环": 1,
                    "教官的帽子": 2,
                    "桓那兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 1,
                    "立本": 1,
                    "常九爷": 2,
                    "刘苏": 1,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "一掷乾坤": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
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
    {
      name: "决赛",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numCharactersRequired: 9,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-12-17",
          matches: [
            {
              playerA: "浅冽（重生版）",
              playerB: "雀鲨",
              video: "https://www.bilibili.com/video/BV1GQ4y157Ed",
              banned: [
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                },
              ],
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "达达利亚"],
                  playerAActions: defineActions({
                    "王下近侍": 1,
                    "赌徒的耳环": 1,
                    "海染砗磲": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBActions: defineActions({
                    "星天的花雨": 2,
                    "派蒙": 1,
                    "卯师傅": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "草与智慧": 1,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "快快缝补术": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "达达利亚"],
                  playerAActions: defineActions({
                    "王下近侍": 1,
                    "赌徒的耳环": 1,
                    "海染砗磲": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "烤蘑菇披萨": 2,
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
                    "本大爷还没有输！": 2,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "达达利亚"],
                  playerAActions: defineActions({
                    "王下近侍": 1,
                    "赌徒的耳环": 1,
                    "海染砗磲": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["八重神子", "莫娜", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
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
