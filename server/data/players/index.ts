const playerNicknameMapRaw: Record<string, string> = {
  /*
    在这里添加玩家名称映射：
    "比赛中昵称": "玩家统一昵称",
  */

  "夜莺": "LL起翼夜鹰",
  "RR夜莺": "LL起翼夜鹰",
  "RR抒情夜莺": "LL起翼夜鹰",
  "夜鹰": "LL起翼夜鹰",
  "卡密sama42": "卡密sama",
  "原皮鸭": "皮皮鸭",
  "原来是筱梦": "岚落尘",
  "洛甄黎": "八重妞妞",
  "妞妞嘛": "八重妞妞",
  "阿源今晚吃派蒙": "阿源",
  "蓬莱寺九霄啊": "蓬莱寺九霄",
  "幽羊": "一不小欣x",
  "月话牌社-音月": "月话音月",
  "梦一夕林": "萌萌哒的梦酱",
  "音尘Voicend": "音尘",
  "飘逸之风": "吃猫萝",
  "柚恩柚恩了": "柚柚恩",
  "本大爷还有仙跳": "道道不哭",
  "那菈琉環冰": "琉環冰",
  "齿轮": "齿轮mog",
  "牌手Aurora": "Aurora",
  "皮皮猪今晚吃阿源": "皮皮猪",
  "七圣小铭同学": "小铭同学qaQ233",
  "Septorz": "Sept",
  "不足中行醉梦中": "今天不想吃苹果",
  "沉湎丶": "桔梗",
  "小宇cyy": "小宇",
  "魔法绵羊Tobby": "Tobby",
  "xhope": "XHope",
  "pupa": "PUPA",
  "tonbo": "Tonbo",
  "蛋黄汐夕": "水果鲨啦",
  "Shana": "明暗螺旋",
  "只玩水草皇呜呜": "只玩水皇草呜呜",
  "「亦然」": "亦然",
  "zjyang": "宇宙蓝色闪光",
  "今天不想吃苹果_": "今天不想吃苹果",
  "一不小欣x": "一不小欣z",
  "冰糖蕊梨": "蕊梨",
  "干瘪的小果核": "小果核",
  

  "甜甜花酿鸡队": "",
  "莲花酥队": "",
  "黄油蟹蟹队": "",
  "提瓦特煎蛋队": "",
};

export const playerNicknameMap = Object.fromEntries(
  Object.entries(playerNicknameMapRaw)
    .map(([alias, nickname]) => {
      while (playerNicknameMapRaw[nickname]) {
        nickname = playerNicknameMapRaw[nickname];
      }
      return [alias, nickname];
    }),
);
