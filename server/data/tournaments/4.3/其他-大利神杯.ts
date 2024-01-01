import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「大利神杯」中日七圣对抗赛",
  gameVersion: "4.3",
  stages: [
    {
      name: "娱乐赛",
      rules: {
        numDecks: 3,
        numGames: 3,
        numCharactersRequired: 7,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-12-22",
          matches: [
            {
              playerA: "魚儿化音",
              playerB: "伊集院ゼロ",
              video: "https://www.bilibili.com/video/BV1se411B7YZ",
              games: [
                {
                  playerACharacters: ["「女士」", "林尼", "达达利亚"],
                  playerAActions: defineActions({
                    "完场喝彩": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "玛梅赫": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "愚人众的阴谋": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["莫娜", "菲谢尔", "艾尔海森"],
                  playerBActions: defineActions({
                    "无常之面": 2,
                    "饰金之梦": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "风与自由": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "白垩之术": 2,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "炸鱼薯条": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["琳妮特", "迪希雅", "琴"],
                  playerAActions: defineActions({
                    "如影流露的冷刃": 1,
                    "祭礼剑": 1,
                    "风鹰剑": 1,
                    "西风剑": 1,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "派蒙": 1,
                    "瓦格纳": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "玛梅赫": 1,
                    "万家灶火": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["雷电将军", "艾尔海森", "雷音权现"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "枫原万叶", "凯亚"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 2,
                    "花海甘露之光": 2,
                    "桓纳兰那": 1,
                    "立本": 2,
                    "刘苏": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "玛梅赫": 2,
                    "自由的新风": 1,
                    "风与自由": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "艾尔海森", "柯莱"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "提米": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 1,
                    "万家灶火": 1,
                    "元素共鸣：交织之草": 2,
                    "元素共鸣：蔓生之草": 2,
                    "草与智慧": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "卡牌狂魔张老伯",
              playerB: "こじ",
              video: "https://www.bilibili.com/video/BV1se411B7YZ",
              games: [
                {
                  playerACharacters: ["菲谢尔", "温迪", "达达利亚"],
                  playerAActions: defineActions({
                    "绪风之拥": 2,
                    "王下近侍": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "立本": 2,
                    "弥生七月": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "藏锋何处": 2,
                    "琴音之诗": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                  }),
                  playerBCharacters: ["行秋", "莫娜", "甘雨"],
                  playerBActions: defineActions({
                    "唯此一心": 2,
                    "阿莫斯之弓": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "寻宝仙灵": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "岩与契约": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "若陀龙王", "菲谢尔"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "玛梅赫": 2,
                    "万家灶火": 1,
                    "风与自由": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "炸鱼薯条": 1,
                  }),
                  playerBCharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerBActions: defineActions({
                    "苦痛奉还": 2,
                    "悲号回唱": 2,
                    "无常之面": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "特瓦林", "优菈"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "翠绿的猎人之冠": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "弥生七月": 2,
                    "玛梅赫": 2,
                    "万家灶火": 1,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["行秋", "莫娜", "甘雨"],
                  playerBActions: defineActions({
                    "唯此一心": 2,
                    "阿莫斯之弓": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "寻宝仙灵": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "岩与契约": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "零之启",
              playerB: "Ya酱 ",
              video: "https://www.bilibili.com/video/BV1se411B7YZ",
              games: [
                {
                  playerACharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerAActions: defineActions({
                    "悲号回唱": 2,
                    "晦朔千引": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "玛梅赫": 1,
                    "化种匣": 1,
                    "万家灶火": 1,
                    "最好的伙伴！": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["重云", "北斗", "雷泽"],
                  playerBActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["特瓦林", "申鹤", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "风龙废墟": 2,
                    "派蒙": 1,
                    "立本": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "玛梅赫": 2,
                    "万家灶火": 1,
                    "换班时间": 1,
                    "一掷乾坤": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  playerBCharacters: ["妮露", "莫娜", "纳西妲"],
                  playerBActions: defineActions({
                    "星天的花雨": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "草与智慧": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 1,
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
                  playerACharacters: ["迪希雅", "五郎", "诺艾尔"],
                  playerAActions: defineActions({
                    "王下近侍": 1,
                    "钟剑": 1,
                    "苇海信标": 1,
                    "千岩牢固": 2,
                    "花海甘露之光": 1,
                    "派蒙": 1,
                    "瓦格纳": 2,
                    "卯师傅": 2,
                    "立本": 1,
                    "迪娜泽黛": 2,
                    "玛梅赫": 1,
                    "万家灶火": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["重云", "北斗", "雷泽"],
                  playerBActions: defineActions({
                    "吐纳真定": 2,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
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
    {
      name: "表演赛",
      rules: {
        numDecks: 1,
        numGames: 1,
        mode: "Duel",
      },
      parts: [
        {
          name: "",
          date: "2023-12-23",
          matches: [
            {
              playerA: "企鹅带带北极熊",
              playerB: "南登かなる",
              video: "https://www.bilibili.com/video/BV1Db4y1373P",
              games: [
                {
                  playerACharacters: ["可莉", "若陀龙王", "纳西妲"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "绝缘之旗印": 1,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "玛梅赫": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "琴音之诗": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "炸鱼薯条": 1,
                  }),
                  playerBCharacters: ["林尼", "「女士」", "重云"],
                  playerBActions: defineActions({
                    "完场喝彩": 2,
                    "苦痛奉还": 2,
                    "赌徒的耳环": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "寻宝仙灵": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
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
      name: "竞技赛",
      rules: {
        numDecks: 3,
        numCharactersRequired: 7,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-12-23",
          matches: [
            {
              playerA: "唐傀",
              playerB: "硝子",
              video: "https://www.bilibili.com/video/BV1Db4y1373P",
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 2,
                    "卯师傅": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerBActions: defineActions({
                    "苦痛奉还": 2,
                    "悲号回唱": 2,
                    "赌徒的耳环": 1,
                    "无常之面": 1,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "卯师傅": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "流浪者", "优菈"],
                  playerAActions: defineActions({
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
                    "弥生七月": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerBActions: defineActions({
                    "苦痛奉还": 2,
                    "悲号回唱": 2,
                    "赌徒的耳环": 1,
                    "无常之面": 1,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "卯师傅": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "古明地觉",
              playerB: "葉山",
              video: "https://www.bilibili.com/video/BV1Db4y1373P",
              games: [
                {
                  playerACharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerAActions: defineActions({
                    "悲号回唱": 2,
                    "晦朔千引": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "蒂玛乌斯": 1,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "玛梅赫": 1,
                    "万家灶火": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "唐杜尔烤鸡": 1,
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
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
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
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "派蒙": 2,
                    "瓦格纳": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "琴音之诗": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  playerBCharacters: ["五郎", "荒泷一斗", "迪希雅"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "LL起翼夜鹰",
              playerB: "ちくわ",
              video: "https://www.bilibili.com/video/BV1Db4y1373P",
              games: [
                {
                  playerACharacters: ["纳西妲", "妮露", "莫娜"],
                  playerAActions: defineActions({
                    "星天的花雨": 2,
                    "花海甘露之光": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "草与智慧": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                    "炸鱼薯条": 1,
                  }),
                  playerBCharacters: ["「女士」", "雷音权现", "若陀龙王"],
                  playerBActions: defineActions({
                    "苦痛奉还": 2,
                    "悲号回唱": 2,
                    "赌徒的耳环": 1,
                    "无常之面": 1,
                    "饰金之梦": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["行秋", "「女士」", "神里绫华"],
                  playerAActions: defineActions({
                    "寒天宣命祝词": 1,
                    "裁叶萃光": 1,
                    "赌徒的耳环": 2,
                    "浮溯之珏": 2,
                    "来歆余响": 2,
                    "蒂玛乌斯": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "兽肉薄荷卷": 1,
                  }),
                  playerBCharacters: ["夜兰", "神里绫华", "莫娜"],
                  playerBActions: defineActions({
                    "寒天宣命祝词": 1,
                    "裁叶萃光": 1,
                    "赌徒的耳环": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["纳西妲", "妮露", "莫娜"],
                  playerAActions: defineActions({
                    "星天的花雨": 2,
                    "花海甘露之光": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "草与智慧": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "快快缝补术": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                    "炸鱼薯条": 1,
                  }),
                  playerBCharacters: ["迪希雅", "五郎", "荒泷一斗"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "花海甘露之光": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 1,
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
      ],
    },
  ],
});
