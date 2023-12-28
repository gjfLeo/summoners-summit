import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「燃斗无双」米游社",
  type: "全民积分赛",
  gameVersion: "4.1",
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
          name: "下午场",
          date: "2023-11-04",
          matches: [
            {
              playerA: "猕迷糊糊",
              playerB: "梦影疏横",
              video: "https://www.bilibili.com/video/BV1mu4y1L7mf",
              banned: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerBCharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "纳西妲"],
                },
              ],
              games: [
                {
                  playerACharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
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
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "绝缘之旗印": 1,
                    "酒渍船帽": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
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
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["诺艾尔", "荒泷一斗", "迪希雅"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "派蒙": 1,
                    "阿圆": 1,
                    "立本": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
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
              playerA: "莉莉芭",
              playerB: "Tobby",
              video: "https://www.bilibili.com/video/BV1mu4y1L7mf",
              banned: [
                {
                  playerACharacters: ["流浪者", "莫娜", "优菈"],
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "派蒙": 2,
                    "阿圆": 1,
                    "立本": 1,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  playerBActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 2,
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
                    "蒙德土豆饼": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "派蒙": 2,
                    "阿圆": 1,
                    "立本": 1,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["荒泷一斗", "迪希雅", "诺艾尔"],
                  playerAActions: defineActions({
                    "祭礼大剑": 1,
                    "钟剑": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "晚间场",
          date: "2023-11-04",
          matches: [
            {
              playerA: "鹿小喵不吃鱼",
              playerB: "岚落尘",
              video: "https://www.bilibili.com/video/BV1cH4y127zr",
              banned: [
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                },
              ],
              games: [
                {
                  playerACharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "八重神子"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "酒渍船帽": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "绝缘之旗印": 1,
                    "须弥城": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "寻宝仙灵": 1,
                    "自由的新风": 1,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "酒渍船帽": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 2,
                    "绝缘之旗印": 1,
                    "须弥城": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "寻宝仙灵": 1,
                    "自由的新风": 1,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "八重神子"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "酒渍船帽": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "取悦诗风吟",
              playerB: "阿楼Riricho",
              video: "https://www.bilibili.com/video/BV1cH4y127zr",
              games: [
                {
                  playerACharacters: ["菲谢尔", "坎蒂丝", "达达利亚"],
                  playerAActions: defineActions({
                    "王下近侍": 2,
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "黄金屋": 2,
                    "立本": 2,
                    "寻宝仙灵": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "藏锋何处": 2,
                    "拳力斗技！": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  playerBActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 1,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "岩与契约": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
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
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                  playerBActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 1,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "岩与契约": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
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
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
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
          date: "2023-11-05",
          matches: [
            {
              playerA: "鹿小喵不吃鱼",
              playerB: "阿楼Riricho",
              video: "https://www.bilibili.com/video/BV1r94y1J7q5",
              banned: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBCharacters: ["重云", "雷电将军", "申鹤"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "拉娜": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 1,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "可莉", "刻晴"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "拉娜": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "可莉"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "月桂的宝冠": 1,
                    "须弥城": 2,
                    "卯师傅": 2,
                    "磐岩盟契": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "梦影疏横",
              playerB: "莉莉芭",
              video: "https://www.bilibili.com/video/BV1r94y1J7q5",
              banned: [
                {
                  playerACharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "愚人众·火之债务处理人"],
                  playerBCharacters: ["胡桃", "行秋", "重云"],
                },
              ],
              games: [
                {
                  playerACharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "纳西妲"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  playerBActions: defineActions({
                    "狼的末路": 1,
                    "赌徒的耳环": 1,
                    "教官的帽子": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "磐岩盟契": 1,
                    "一掷乾坤": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 2,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纯水精灵·洛蒂娅", "纳西妲"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["行秋", "重云", "神里绫华"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
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
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["行秋", "重云", "神里绫华"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 2,
                    "兽肉薄荷卷": 2,
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
          date: "2023-11-05",
          matches: [
            {
              playerA: "莉莉芭",
              playerB: "阿楼Riricho",
              video: "https://www.bilibili.com/video/BV1cC4y1y7YH",
              banned: [
                {
                  playerACharacters: ["流浪者", "莫娜", "优菈"],
                  playerBCharacters: ["菲谢尔", "纳西妲", "可莉"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "寻宝仙灵": 1,
                    "旧时庭园": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
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
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "璃月港口": 2,
                    "西风大教堂": 1,
                    "须弥城": 2,
                    "派蒙": 2,
                    "阿圆": 1,
                    "立本": 1,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
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
                  playerACharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "祭礼剑": 1,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
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
