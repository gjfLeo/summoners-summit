import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "「燃斗无双」米游社",
  type: "全民积分赛",
  gameVersion: "4.7",
  stages: [
    {
      name: "8进4",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2024-06-27",
          matches: [
            {
              playerA: "吟风咏月",
              playerB: "祁音",
              video: "https://www.bilibili.com/video/BV1jy411z7EU?p=1",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "吞星之鲸", "圣骸毒蝎"],
                  playerBCharacters: ["圣骸毒蝎", "圣骸飞蛇", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["那维莱特", "莱依拉", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "图莱杜拉的回忆": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "璃月港口": 2,
                    "黄金屋": 1,
                    "蒂玛乌斯": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["无相之冰", "若陀龙王", "那维莱特"],
                  playerBActions: defineActions({
                    "晦朔千引": 2,
                    "图莱杜拉的回忆": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "璃月港口": 2,
                    "桓那兰那": 1,
                    "黄金屋": 1,
                    "蒂玛乌斯": 2,
                    "化种匣": 1,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["芙宁娜", "莱欧斯利", "深渊使徒·激流"],
                  playerAActions: defineActions({
                    "暗流涌动": 1,
                    "图莱杜拉的回忆": 1,
                    "灵光明烁之心": 1,
                    "老兵的容颜": 2,
                    "逐影猎人": 2,
                    "黄金剧团": 1,
                    "桓那兰那": 2,
                    "赤王陵": 2,
                    "蒂玛乌斯": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                    "提瓦特煎蛋": 1,
                    "缤纷马卡龙": 2,
                  }),
                  playerBCharacters: ["芙宁娜", "莱依拉", "夜兰"],
                  playerBActions: defineActions({
                    "归芒携信": 1,
                    "灵光明烁之心": 1,
                    "老兵的容颜": 2,
                    "逐影猎人": 2,
                    "黄金剧团": 1,
                    "璃月港口": 1,
                    "桓那兰那": 2,
                    "蒂玛乌斯": 2,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                    "提瓦特煎蛋": 1,
                    "缤纷马卡龙": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2024-06-28",
          matches: [
            {
              playerA: "吃掉一只萌酱",
              playerB: "袭人",
              video: "https://www.bilibili.com/video/BV1jy411z7EU?p=2",
              banned: [
                {
                  playerACharacters: ["圣骸毒蝎", "圣骸飞蛇", "吞星之鲸"],
                  playerBCharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["重云", "早柚", "深渊使徒·激流"],
                  playerAActions: defineActions({
                    "偷懒的新方法": 1,
                    "暗流涌动": 1,
                    "狼的末路": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "黄金剧团的奖赏": 1,
                    "黄金屋": 2,
                    "蒂玛乌斯": 2,
                    "立本": 2,
                    "参量质变仪": 1,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBActions: defineActions({
                    "割舍软弱之心": 1,
                    "暗流涌动": 2,
                    "原木刀": 2,
                    "沙王的投影": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 2,
                    "璃月港口": 2,
                    "桓那兰那": 1,
                    "赤王陵": 2,
                    "凯瑟琳": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "海中寻宝": 2,
                    "仙跳墙": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["「女士」", "无相之冰", "雷音权现"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "灵光明烁之心": 2,
                    "璃月港口": 2,
                    "桓那兰那": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "白手套和渔夫": 2,
                    "流明石触媒": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBActions: defineActions({
                    "割舍软弱之心": 1,
                    "暗流涌动": 2,
                    "原木刀": 2,
                    "沙王的投影": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 2,
                    "璃月港口": 2,
                    "桓那兰那": 1,
                    "赤王陵": 2,
                    "凯瑟琳": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "海中寻宝": 2,
                    "仙跳墙": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "巴巴洛丝",
              playerB: "水笔",
              video: "https://www.bilibili.com/video/BV1jy411z7EU?p=2",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "圣骸毒蝎", "吞星之鲸"],
                  playerBCharacters: ["吞星之鲸", "圣骸毒蝎", "圣骸飞蛇"],
                },
              ],
              games: [
                {
                  playerACharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "图莱杜拉的回忆": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "璃月港口": 2,
                    "黄金屋": 1,
                    "赤王陵": 1,
                    "蒂玛乌斯": 2,
                    "化种匣": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["辛焱", "八重神子", "阿佩普的绿洲守望者"],
                  playerBActions: defineActions({
                    "神篱之御荫": 1,
                    "万千子嗣": 2,
                    "赌徒的耳环": 1,
                    "沙王的投影": 2,
                    "黄金剧团的奖赏": 2,
                    "桓那兰那": 2,
                    "湖中垂柳": 2,
                    "中央实验室遗址": 2,
                    "立本": 2,
                    "塞塔蕾": 2,
                    "西尔弗和迈勒斯": 2,
                    "寻宝仙灵": 2,
                    "苦舍桓": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "莲花酥": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerAActions: defineActions({
                    "割舍软弱之心": 1,
                    "沿途百景会心": 1,
                    "暗流涌动": 1,
                    "原木刀": 1,
                    "沙王的投影": 1,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 2,
                    "黄金剧团": 1,
                    "璃月港口": 2,
                    "桓那兰那": 1,
                    "赤王陵": 2,
                    "凯瑟琳": 1,
                    "蒂玛乌斯": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "海中寻宝": 2,
                    "仙跳墙": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBActions: defineActions({
                    "割舍软弱之心": 1,
                    "暗流涌动": 1,
                    "原木刀": 1,
                    "沙王的投影": 1,
                    "饰金之梦": 1,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 2,
                    "璃月港口": 2,
                    "桓那兰那": 1,
                    "赤王陵": 2,
                    "蒂玛乌斯": 2,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "海中寻宝": 2,
                    "仙跳墙": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莱依拉", "那维莱特", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "图莱杜拉的回忆": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "璃月港口": 2,
                    "黄金屋": 1,
                    "赤王陵": 1,
                    "蒂玛乌斯": 2,
                    "化种匣": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBActions: defineActions({
                    "割舍软弱之心": 1,
                    "暗流涌动": 1,
                    "原木刀": 1,
                    "沙王的投影": 1,
                    "饰金之梦": 1,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 2,
                    "璃月港口": 2,
                    "桓那兰那": 1,
                    "赤王陵": 2,
                    "蒂玛乌斯": 2,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "琴音之诗": 2,
                    "海中寻宝": 2,
                    "仙跳墙": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "届不到的莉芭芭",
              playerB: "不浪浪浪",
              video: "https://www.bilibili.com/video/BV1jy411z7EU?p=2",
              banned: [
                {
                  playerACharacters: ["圣骸毒蝎", "吞星之鲸", "圣骸飞蛇"],
                  playerBCharacters: ["圣骸毒蝎", "圣骸飞蛇", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["深渊使徒·激流", "重云", "早柚"],
                  playerAActions: defineActions({
                    "偷懒的新方法": 1,
                    "暗流涌动": 1,
                    "狼的末路": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "黄金剧团的奖赏": 1,
                    "黄金屋": 1,
                    "蒂玛乌斯": 2,
                    "立本": 1,
                    "参量质变仪": 1,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "旧时庭园": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "大梦的曲调": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["深渊使徒·激流", "芙宁娜", "莱欧斯利"],
                  playerBActions: defineActions({
                    "暗流涌动": 2,
                    "金流监督": 1,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 2,
                    "逐影猎人": 2,
                    "桓那兰那": 1,
                    "赤王陵": 2,
                    "蒂玛乌斯": 2,
                    "立本": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 1,
                    "提瓦特煎蛋": 1,
                    "缤纷马卡龙": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["那维莱特", "莱欧斯利", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "盈满之实": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "黄金屋": 1,
                    "赤王陵": 2,
                    "蒂玛乌斯": 2,
                    "化种匣": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["深渊使徒·激流", "芙宁娜", "莱欧斯利"],
                  playerBActions: defineActions({
                    "暗流涌动": 2,
                    "金流监督": 1,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 2,
                    "逐影猎人": 2,
                    "桓那兰那": 1,
                    "赤王陵": 2,
                    "蒂玛乌斯": 2,
                    "立本": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 1,
                    "提瓦特煎蛋": 1,
                    "缤纷马卡龙": 1,
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
    {
      name: "半决赛",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-06-29",
          matches: [
            {
              playerA: "吟风咏月",
              playerB: "吃掉一只萌酱",
              video: "https://www.bilibili.com/video/BV1jy411z7EU?p=3",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "吞星之鲸", "圣骸毒蝎"],
                  playerBCharacters: ["圣骸毒蝎", "圣骸飞蛇", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "图莱杜拉的回忆": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "璃月港口": 2,
                    "黄金屋": 1,
                    "蒂玛乌斯": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["深渊使徒·激流", "早柚", "重云"],
                  playerBActions: defineActions({
                    "偷懒的新方法": 1,
                    "暗流涌动": 1,
                    "狼的末路": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "黄金剧团的奖赏": 1,
                    "黄金屋": 2,
                    "蒂玛乌斯": 2,
                    "立本": 2,
                    "参量质变仪": 1,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "图莱杜拉的回忆": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "璃月港口": 2,
                    "黄金屋": 1,
                    "蒂玛乌斯": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["「女士」", "无相之冰", "雷音权现"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "灵光明烁之心": 2,
                    "璃月港口": 2,
                    "桓那兰那": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "白手套和渔夫": 2,
                    "流明石触媒": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["莱欧斯利", "芙宁娜", "深渊使徒·激流"],
                  playerAActions: defineActions({
                    "暗流涌动": 1,
                    "图莱杜拉的回忆": 1,
                    "灵光明烁之心": 1,
                    "老兵的容颜": 2,
                    "逐影猎人": 2,
                    "黄金剧团": 1,
                    "桓那兰那": 2,
                    "赤王陵": 2,
                    "蒂玛乌斯": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                    "提瓦特煎蛋": 1,
                    "缤纷马卡龙": 2,
                  }),
                  playerBCharacters: ["「女士」", "无相之冰", "雷音权现"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "灵光明烁之心": 2,
                    "璃月港口": 2,
                    "桓那兰那": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "白手套和渔夫": 2,
                    "流明石触媒": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "届不到的莉芭芭",
              playerB: "水笔",
              video: "https://www.bilibili.com/video/BV1jy411z7EU?p=3",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇", "吞星之鲸", "圣骸毒蝎"],
                  playerBCharacters: ["圣骸毒蝎", "圣骸飞蛇", "吞星之鲸"],
                },
              ],
              games: [
                {
                  playerACharacters: ["早柚", "深渊使徒·激流", "重云"],
                  playerAActions: defineActions({
                    "偷懒的新方法": 1,
                    "暗流涌动": 1,
                    "狼的末路": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "黄金剧团的奖赏": 1,
                    "黄金屋": 1,
                    "蒂玛乌斯": 2,
                    "立本": 1,
                    "参量质变仪": 1,
                    "化种匣": 1,
                    "流明石触媒": 2,
                    "旧时庭园": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "大梦的曲调": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "净觉花": 1,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["久岐忍", "绮良良", "深渊使徒·激流"],
                  playerBActions: defineActions({
                    "割舍软弱之心": 1,
                    "暗流涌动": 1,
                    "原木刀": 1,
                    "沙王的投影": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 2,
                    "璃月港口": 2,
                    "桓那兰那": 1,
                    "赤王陵": 2,
                    "蒂玛乌斯": 2,
                    "流明石触媒": 2,
                    "愉舞欢游": 1,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "海中寻宝": 2,
                    "仙跳墙": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["那维莱特", "莱欧斯利", "若陀龙王"],
                  playerAActions: defineActions({
                    "晦朔千引": 1,
                    "盈满之实": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "黄金屋": 1,
                    "赤王陵": 2,
                    "蒂玛乌斯": 2,
                    "化种匣": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["辛焱", "阿佩普的绿洲守望者", "八重神子"],
                  playerBActions: defineActions({
                    "神篱之御荫": 1,
                    "万千子嗣": 2,
                    "赌徒的耳环": 1,
                    "沙王的投影": 2,
                    "黄金剧团的奖赏": 2,
                    "桓那兰那": 2,
                    "湖中垂柳": 2,
                    "中央实验室遗址": 2,
                    "立本": 2,
                    "塞塔蕾": 2,
                    "西尔弗和迈勒斯": 2,
                    "寻宝仙灵": 2,
                    "苦舍桓": 2,
                    "万家灶火": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "莲花酥": 1,
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
    {
      name: "决赛",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numCharactersBanned: 1,
        numCharactersRequired: 9,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2024-06-30",
          matches: [
            {
              playerA: "吟风咏月",
              playerB: "届不到的莉芭芭",
              video: "https://www.bilibili.com/video/BV1jy411z7EU?p=4",
              banned: [
                {
                  playerACharacters: ["圣骸飞蛇"],
                  playerBCharacters: ["深渊使徒·激流"],
                },
                {
                  playerACharacters: ["夜兰", "魈", "申鹤"],
                  playerBCharacters: ["申鹤", "魈", "夜兰"],
                },
              ],
              games: [
                {
                  playerACharacters: ["那维莱特", "若陀龙王", "莱依拉"],
                  playerAActions: defineActions({
                    "晦朔千引": 2,
                    "图莱杜拉的回忆": 1,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "璃月港口": 2,
                    "黄金屋": 1,
                    "蒂玛乌斯": 2,
                    "化种匣": 2,
                    "流明石触媒": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  playerBCharacters: ["若陀龙王", "那维莱特", "莱欧斯利"],
                  playerBActions: defineActions({
                    "晦朔千引": 2,
                    "盈满之实": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "黄金屋": 2,
                    "凯瑟琳": 1,
                    "蒂玛乌斯": 2,
                    "寻宝仙灵": 2,
                    "流明石触媒": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "早柚", "优菈"],
                  playerAActions: defineActions({
                    "偷懒的新方法": 2,
                    "狼的末路": 2,
                    "赌徒的耳环": 1,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "黄金屋": 2,
                    "蒂玛乌斯": 2,
                    "立本": 2,
                    "化种匣": 1,
                    "流明石触媒": 2,
                    "旧时庭园": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["辛焱", "久岐忍", "阿佩普的绿洲守望者"],
                  playerBActions: defineActions({
                    "万千子嗣": 2,
                    "灵光明烁之心": 2,
                    "黄金剧团的奖赏": 2,
                    "湖中垂柳": 2,
                    "中央实验室遗址": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "寻宝仙灵": 2,
                    "苦舍桓": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 2,
                    "幻戏倒计时：3": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["莫娜", "早柚", "优菈"],
                  playerAActions: defineActions({
                    "偷懒的新方法": 2,
                    "狼的末路": 2,
                    "赌徒的耳环": 1,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "黄金屋": 2,
                    "蒂玛乌斯": 2,
                    "立本": 2,
                    "化种匣": 1,
                    "流明石触媒": 2,
                    "旧时庭园": 1,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["若陀龙王", "那维莱特", "莱欧斯利"],
                  playerBActions: defineActions({
                    "晦朔千引": 2,
                    "盈满之实": 2,
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "老兵的容颜": 1,
                    "黄金屋": 2,
                    "凯瑟琳": 1,
                    "蒂玛乌斯": 2,
                    "寻宝仙灵": 2,
                    "流明石触媒": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["芙宁娜", "莱欧斯利", "那维莱特"],
                  playerAActions: defineActions({
                    "图莱杜拉的回忆": 2,
                    "灵光明烁之心": 1,
                    "老兵的容颜": 2,
                    "逐影猎人": 2,
                    "黄金剧团": 1,
                    "桓那兰那": 2,
                    "赤王陵": 2,
                    "蒂玛乌斯": 1,
                    "流明石触媒": 2,
                    "万家灶火": 1,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "海中寻宝": 2,
                    "幻戏倒计时：3": 2,
                    "提瓦特煎蛋": 1,
                    "缤纷马卡龙": 2,
                  }),
                  playerBCharacters: ["卡维", "芙宁娜", "吞星之鲸"],
                  playerBActions: defineActions({
                    "「诸君听我颂，共举爱之杯！」": 2,
                    "预算师的技艺": 2,
                    "祭礼大剑": 2,
                    "狼的末路": 2,
                    "森林王器": 1,
                    "原木刀": 2,
                    "千岩牢固": 2,
                    "海染砗磲": 2,
                    "逐影猎人": 2,
                    "湖中垂柳": 2,
                    "中央实验室遗址": 2,
                    "派蒙": 2,
                    "苦舍桓": 2,
                    "旧日鏖战": 1,
                    "下落斩": 2,
                    "温妮莎传奇": 2,
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
