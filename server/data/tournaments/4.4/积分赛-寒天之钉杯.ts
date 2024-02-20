import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "寒天之钉杯",
  type: "全民积分赛",
  gameVersion: "4.4",
  stages: [
    {
      name: "16进8",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numCharactersRequired: 8,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2024-02-18",
          matches: [
            {
              playerA: "全都是失误",
              playerB: "无光",
              video: "https://www.bilibili.com/video/BV1Zx421Z7Rr",
              banned: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["班尼特", "雷音权现", "若陀龙王"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "花海甘露之光": 1,
                    "桓纳兰那": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 1,
                    "弥生七月": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 2,
                  }),
                  playerBCharacters: ["芭芭拉", "达达利亚", "莱依拉"],
                  playerBActions: defineActions({
                    "归芒携信": 1,
                    "光辉的季节": 1,
                    "王下近侍": 2,
                    "千岩牢固": 2,
                    "老兵的容颜": 2,
                    "桓纳兰那": 2,
                    "卯师傅": 2,
                    "玛梅赫": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                    "松茸酿肉卷": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["北斗", "夜兰", "艾尔海森"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "常九爷": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["芭芭拉", "达达利亚", "莱依拉"],
                  playerBActions: defineActions({
                    "归芒携信": 1,
                    "光辉的季节": 1,
                    "王下近侍": 2,
                    "千岩牢固": 2,
                    "桓纳兰那": 2,
                    "卯师傅": 2,
                    "玛梅赫": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["北斗", "夜兰", "艾尔海森"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "常九爷": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "桓纳兰那": 1,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "红颜~nano",
              playerB: "你又歪了吗？",
              video: "https://www.bilibili.com/video/BV1rx4y1k7ct",
              banned: [
                {
                  playerACharacters: ["行秋", "莱依拉", "芭芭拉"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                },
              ],
              games: [
                {
                  playerACharacters: ["珊瑚宫心海", "凝光", "芭芭拉"],
                  playerAActions: defineActions({
                    "光辉的季节": 1,
                    "祭礼残章": 1,
                    "图莱杜拉的回忆": 1,
                    "将帅兜鍪": 2,
                    "千岩牢固": 2,
                    "老兵的容颜": 2,
                    "须弥城": 2,
                    "桓纳兰那": 2,
                    "欧庇克莱歌剧院": 2,
                    "蒂玛乌斯": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "烤蘑菇披萨": 2,
                    "松茸酿肉卷": 2,
                  }),
                  playerBCharacters: ["班尼特", "千年珍珠骏麟", "早柚"],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "蒂玛乌斯": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "裁定之时": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["林尼", "菲谢尔", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "绝缘之旗印": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 1,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
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
              playerA: "蕊梨",
              playerB: "和大名",
              video: "https://www.bilibili.com/video/BV1Am411S7Yv",
              banned: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "雷音权现", "可莉"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "湖中垂柳": 2,
                    "欧庇克莱歌剧院": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["班尼特", "雷音权现", "可莉"],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "原木刀": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "须弥城": 2,
                    "桓纳兰那": 2,
                    "湖中垂柳": 2,
                    "欧庇克莱歌剧院": 2,
                    "凯瑟琳": 1,
                    "化种匣": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["班尼特", "雷音权现", "可莉"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "湖中垂柳": 2,
                    "欧庇克莱歌剧院": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "清韵",
              playerB: "巫喵",
              video: "https://www.bilibili.com/video/BV1YS421N7po",
              banned: [
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerBCharacters: ["班尼特", "可莉", "雷音权现"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "莱依拉", "芭芭拉"],
                  playerAActions: defineActions({
                    "光辉的季节": 1,
                    "重帘留香": 1,
                    "将帅兜鍪": 2,
                    "千岩牢固": 2,
                    "老兵的容颜": 2,
                    "天守阁": 2,
                    "桓纳兰那": 2,
                    "蒂玛乌斯": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                    "松茸酿肉卷": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["迪希雅", "琴", "琳妮特"],
                  playerAActions: defineActions({
                    "如影流露的冷刃": 1,
                    "祭礼剑": 1,
                    "风鹰剑": 1,
                    "裁叶萃光": 1,
                    "千岩牢固": 2,
                    "老兵的容颜": 2,
                    "派蒙": 1,
                    "瓦格纳": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "运筹帷幄": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "唐杜尔烤鸡": 1,
                    "松茸酿肉卷": 1,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
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
          name: "DAY2",
          date: "2024-02-19",
          matches: [
            {
              playerA: "Sweet嘉心糖",
              playerB: "小心海王",
              video: "https://www.bilibili.com/video/BV1Uv421k74W",
              banned: [
                {
                  playerACharacters: ["班尼特", "雷音权现", "可莉"],
                  playerBCharacters: ["「女士」", "雷音权现", "夜兰"],
                },
              ],
              games: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["琴", "琳妮特", "迪希雅"],
                  playerBActions: defineActions({
                    "如影流露的冷刃": 1,
                    "祭礼剑": 1,
                    "风鹰剑": 1,
                    "裁叶萃光": 1,
                    "千岩牢固": 2,
                    "老兵的容颜": 2,
                    "桓纳兰那": 1,
                    "瓦格纳": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "裁定之时": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                    "唐杜尔烤鸡": 1,
                    "松茸酿肉卷": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["迪希雅", "琴", "琳妮特"],
                  playerAActions: defineActions({
                    "如影流露的冷刃": 1,
                    "祭礼剑": 1,
                    "风鹰剑": 1,
                    "裁叶萃光": 1,
                    "千岩牢固": 2,
                    "老兵的容颜": 2,
                    "欧庇克莱歌剧院": 1,
                    "派蒙": 2,
                    "瓦格纳": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "唐杜尔烤鸡": 1,
                    "松茸酿肉卷": 2,
                  }),
                  playerBCharacters: ["莫娜", "千年珍珠骏麟", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "迪娜泽黛": 1,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "化种匣": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                    "绝云锅巴": 1,
                    "莲花酥": 1,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "RedY",
              playerB: "莫莉安",
              video: "https://www.bilibili.com/video/BV1Qx4y1k77f",
              banned: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["班尼特", "雷音权现", "可莉"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 1,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "须弥城": 2,
                    "桓纳兰那": 2,
                    "湖中垂柳": 2,
                    "凯瑟琳": 1,
                    "自由的新风": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  playerBActions: defineActions({
                    "千夜浮梦": 1,
                    "图莱杜拉的回忆": 1,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "饰金之梦": 2,
                    "欧庇克莱歌剧院": 2,
                    "蒂玛乌斯": 2,
                    "瓦格纳": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "心识蕴藏之种": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["流浪者", "莫娜", "优菈"],
                  playerBActions: defineActions({
                    "千夜浮梦": 1,
                    "图莱杜拉的回忆": 1,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "饰金之梦": 2,
                    "欧庇克莱歌剧院": 2,
                    "蒂玛乌斯": 2,
                    "瓦格纳": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "心识蕴藏之种": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["班尼特", "可莉", "雷音权现"],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "原木刀": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "须弥城": 2,
                    "桓纳兰那": 2,
                    "湖中垂柳": 2,
                    "欧庇克莱歌剧院": 1,
                    "凯瑟琳": 1,
                    "化种匣": 1,
                    "自由的新风": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
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
