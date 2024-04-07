import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "寒天之钉杯",
  type: "全民积分赛",
  gameVersion: "4.5",
  stages: [
    {
      name: "8进4",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numCharactersRequired: 11,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY2",
          date: "2024-04-03",
          matches: [
            {
              playerA: "今天不想吃苹果",
              playerB: "仄言",
              video: "https://www.bilibili.com/video/BV1AA4m1P728",
              banned: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["千年珍珠骏麟", "若陀龙王", "林尼"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerAActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 1,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerAActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 1,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerAActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 1,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "小王",
              playerB: "帕尔特",
              video: "https://www.bilibili.com/video/BV1FZ421i7sj",
              banned: [
                {
                  playerACharacters: ["流浪者", "莫娜", "优菈"],
                  playerBCharacters: ["「女士」", "莫娜", "雷音权现"],
                },
              ],
              games: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 1,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 1,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["雷泽", "行秋", "重云"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
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
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 1,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
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
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
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
          ],
        },
        {
          name: "DAY2",
          date: "2024-04-05",
          matches: [
            {
              playerA: "Keloni~",
              playerB: "theRoy",
              video: "https://www.bilibili.com/video/BV1gq421w7YK",
              banned: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "枫原万叶", "「女士」"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "行秋", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["流浪者", "魔偶剑鬼", "多莉"],
                  playerBActions: defineActions({
                    "千夜浮梦": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 2,
                    "西尔弗和迈勒斯": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 2,
                    "重攻击": 2,
                    "大梦的曲调": 1,
                    "绝云锅巴": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerAActions: defineActions({
                    "千夜浮梦": 1,
                    "盈满之实": 1,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "饰金之梦": 2,
                    "欧庇克莱歌剧院": 1,
                    "蒂玛乌斯": 2,
                    "瓦格纳": 2,
                    "立本": 2,
                    "刘苏": 1,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 1,
                    "莲花酥": 1,
                    "北地烟熏鸡": 1,
                  }),
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "詹妮斯",
              playerB: "LYC",
              video: "https://www.bilibili.com/video/BV1BC411L71U",
              banned: [
                {
                  playerACharacters: ["夜兰", "「女士」", "雷音权现"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "行秋", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["莫娜", "「女士」", "雷音权现"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "行秋", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "玛梅赫": 1,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "留念镜": 1,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "行秋", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBActions: defineActions({
                    "完场喝彩": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "留念镜": 1,
                    "磐岩盟契": 1,
                    "运筹帷幄": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
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
        numDecks: 4,
        numDecksBanned: 1,
        numCharactersRequired: 11,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-04-06",
          matches: [
            {
              playerA: "今天不想吃苹果",
              playerB: "帕尔特",
              video: "https://www.bilibili.com/video/BV1Xr421x7us",
              banned: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["「女士」", "莫娜", "雷音权现"],
                },
              ],
              games: [
                {
                  playerACharacters: ["愚人众·雷萤术士", "莫娜", "纳西妲"],
                  playerAActions: defineActions({
                    "雷萤浮闪": 2,
                    "赌徒的耳环": 2,
                    "黄金剧团的奖赏": 2,
                    "骑士团图书馆": 2,
                    "风龙废墟": 2,
                    "欧庇克莱歌剧院": 2,
                    "鲸井小弟": 2,
                    "裁定之时": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "重攻击": 2,
                    "绝云锅巴": 2,
                  }),
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["重云", "行秋", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 1,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["愚人众·雷萤术士", "莫娜", "纳西妲"],
                  playerAActions: defineActions({
                    "雷萤浮闪": 2,
                    "赌徒的耳环": 2,
                    "黄金剧团的奖赏": 2,
                    "骑士团图书馆": 2,
                    "风龙废墟": 2,
                    "欧庇克莱歌剧院": 2,
                    "鲸井小弟": 2,
                    "裁定之时": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "重攻击": 2,
                    "绝云锅巴": 2,
                  }),
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["重云", "行秋", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 1,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "Keloni~",
              playerB: "LYC",
              video: "https://www.bilibili.com/video/BV1Tz42117pg",
              banned: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerBCharacters: ["莫娜", "「女士」", "雷音权现"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "行秋", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["绮良良", "镀金旅团·炽沙叙事人", "雷音权现"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 1,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["优菈", "莫娜", "流浪者"],
                  playerAActions: defineActions({
                    "千夜浮梦": 1,
                    "盈满之实": 1,
                    "狼的末路": 1,
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "饰金之梦": 2,
                    "欧庇克莱歌剧院": 1,
                    "蒂玛乌斯": 2,
                    "瓦格纳": 2,
                    "立本": 2,
                    "刘苏": 1,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 1,
                    "莲花酥": 1,
                    "北地烟熏鸡": 1,
                  }),
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "立本": 1,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 2,
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
