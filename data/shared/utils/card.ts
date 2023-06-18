import type { ActionCard, CharacterCard, GElement } from "~/utils/types";

const ALL_ELEMENTS = ["cryo", "hydro", "pyro", "electro", "anemo", "geo", "dendro"] as const;

const ALL_CHARACTER_CARDS = [
  "甘雨", "迪奥娜", "凯亚", "重云", "神里绫华", "优菈", "申鹤",
  "芭芭拉", "行秋", "莫娜", "达达利亚", "珊瑚宫心海", "神里绫人",
  "迪卢克", "香菱", "班尼特", "安柏", "宵宫", "可莉", "胡桃",
  "菲谢尔", "雷泽", "刻晴", "赛诺", "北斗", "九条裟罗", "雷电将军", "八重神子",
  "砂糖", "琴", "温迪", "魈",
  "凝光", "诺艾尔", "钟离", "荒泷一斗",
  "柯莱", "提纳里", "纳西妲",
  "愚人众·冰萤术士",
  "纯水精灵·洛蒂娅", "愚人众·藏镜仕女",
  "愚人众·火之债务处理人", "深渊咏者·渊火",
  "无相之雷",
  "魔偶剑鬼",
  "岩盔丘丘王",
  "翠翎恐禽",
] as const;

const TALENTS = [
  "唯此一心", "猫爪冰摇", "冷血之剑", "吐纳真定", "寒天宣命祝词", "战欲涌现", "忘玄",
  "光辉的季节", "重帘留香", "沉没的预言", "深渊之灾·凝水盛放", "匣中玉栉", "镜华风姿",
  "流火焦灼", "交叉火力", "冒险憧憬", "一触即发", "长野原龙势流星群", "砰砰礼物", "血之灶火",
  "噬星魔鸦", "觉醒", "抵天雷罚", "落羽的裁泽", "霹雳连霄", "我界", "万千的愿望", "神篱之御荫",
  "混元熵增论", "蒲公英的国土", "绪风之拥", "降魔·护法夜叉",
  "储之千日，用之一刻", "支援就交给我吧", "炊金馔玉", "荒泷第一",
  "飞叶迴斜", "眼识殊明", "心识蕴藏之种",
  "冰萤寒光",
  "百川奔流", "镜锢之笼",
  "悉数讨回", "烬火重燃",
  "汲能棱晶",
  "机巧神通",
  "重铸：岩盔",
  "孢子增殖",
] as const;

const WEAPONS = [
  "魔导绪论", "祭礼残章", "天空之卷", "千夜浮梦",
  "鸦羽弓", "祭礼弓", "天空之翼", "阿莫斯之弓", "终末嗟叹之诗",
  "白铁大剑", "祭礼大剑", "狼的末路", "天空之傲", "钟剑",
  "白缨枪", "千岩长枪", "天空之脊", "贯虹之槊", "薙草之稻光",
  "旅行剑", "祭礼剑", "风鹰剑", "天空之刃", "西风剑",
] as const;
const ARTIFACTS = [
  "冒险家头带", "幸运儿银冠", "游医的方巾", "赌徒的耳环", "教官的帽子", "流放者头冠",
  "华饰之兜", "绝缘之旗印", "将帅兜鍪", "千岩牢固",
  "虺雷之姿", "辰砂往生录", "无常之面", "追忆之注连",
  "踏破冰雪的回音", "冰风迷途的勇士", "酒渍船帽", "沉沦之心",
  "焦灼的魔女帽", "炽烈的炎之魔女", "唤雷的头冠", "如雷的盛怒",
  "翠绿的猎人之冠", "翠绿之影", "不动玄石之相", "悠古的磐岩",
  "月桂的宝冠", "深林的记忆",
] as const;
const AREAS = [
  "璃月港口", "骑士团图书馆", "群玉阁", "晨曦酒庄", "望舒客栈", "西风大教堂",
  "天守阁", "鸣神大社", "珊瑚宫", "须弥城", "桓纳兰那", "镇守之森",
] as const;
const FRIENDS = [
  "派蒙", "凯瑟琳", "蒂玛乌斯", "瓦格纳", "卯师傅", "阿圆", "提米", "立本", "常九爷", "艾琳", "田铁嘴", "刘苏",
  "花散里", "鲸井小弟", "旭东", "迪娜泽黛", "拉娜",
] as const;
const ITEMS = [
  "参量质变仪", "便携营养袋",
  "红羽团扇", "寻宝仙灵",
] as const;

const SPELLS = [
  "最好的伙伴！", "换班时间", "一掷乾坤", "运筹帷幄", "本大爷还没有输！", "交给我吧！", "鹤归之时",
  "星天之兆", "白垩之术", "诸武精通", "神宝迁宫祝词", "快快缝补术", "送你一程", "护法之誓",
  "深渊的呼唤", "愚人众的阴谋",
  "下落斩", "重攻击", "温妮莎传奇", "永远的友谊",
] as const;
const FOODS = [
  "绝云锅巴", "仙跳墙", "莲花酥", "北地烟熏鸡", "甜甜花酿鸡", "蒙德土豆饼", "烤蘑菇披萨", "兽肉薄荷卷",
  "提瓦特煎蛋", "刺身拼盘", "唐杜尔烤鸭", "黄油蟹蟹",
] as const;
const ELEMENTS = [
  "元素共鸣：交织之冰", "元素共鸣：粉碎之冰",
  "元素共鸣：交织之水", "元素共鸣：疗愈之水",
  "元素共鸣：交织之火", "元素共鸣：热诚之火",
  "元素共鸣：交织之雷", "元素共鸣：强能之雷",
  "元素共鸣：交织之风", "元素共鸣：迅捷之风",
  "元素共鸣：交织之岩", "元素共鸣：坚定之岩",
  "元素共鸣：交织之草", "元素共鸣：蔓生之草",
] as const;
const FACTIONS = [
  "风与自由", "岩与契约", "雷与永恒", "草与智慧",
] as const;

const ALL_ACTION_CARDS = [
  ...TALENTS, ...WEAPONS, ...ARTIFACTS,
  ...AREAS, ...FRIENDS, ...ITEMS,
  ...ELEMENTS, ...FACTIONS,
  ...SPELLS, ...FOODS,
];

export const characterElement: Record<CharacterCard, GElement> = {
  甘雨: "cryo",
  迪奥娜: "cryo",
  凯亚: "cryo",
  重云: "cryo",
  神里绫华: "cryo",
  优菈: "cryo",
  申鹤: "cryo",
  芭芭拉: "hydro",
  行秋: "hydro",
  莫娜: "hydro",
  达达利亚: "hydro",
  珊瑚宫心海: "hydro",
  神里绫人: "hydro",
  迪卢克: "pyro",
  香菱: "pyro",
  班尼特: "pyro",
  安柏: "pyro",
  宵宫: "pyro",
  可莉: "pyro",
  胡桃: "pyro",
  菲谢尔: "electro",
  雷泽: "electro",
  刻晴: "electro",
  赛诺: "electro",
  北斗: "electro",
  九条裟罗: "electro",
  雷电将军: "electro",
  八重神子: "electro",
  砂糖: "anemo",
  琴: "anemo",
  温迪: "anemo",
  魈: "anemo",
  凝光: "geo",
  诺艾尔: "geo",
  钟离: "geo",
  荒泷一斗: "geo",
  柯莱: "dendro",
  提纳里: "dendro",
  纳西妲: "dendro",
  愚人众·冰萤术士: "cryo",
  纯水精灵·洛蒂娅: "hydro",
  愚人众·藏镜仕女: "hydro",
  愚人众·火之债务处理人: "pyro",
  深渊咏者·渊火: "pyro",
  无相之雷: "electro",
  魔偶剑鬼: "anemo",
  岩盔丘丘王: "geo",
  翠翎恐禽: "dendro",
};

export { ALL_ELEMENTS, ALL_CHARACTER_CARDS, ALL_ACTION_CARDS };

const characterCardOrder = Object.fromEntries(ALL_CHARACTER_CARDS.map((card, i) => [card, i])) as Record<CharacterCard, number>;
export const characterCardFilter = (k: string): k is CharacterCard => ALL_CHARACTER_CARDS.includes(k as CharacterCard);
export const characterCardSorter = (a: CharacterCard, b: CharacterCard) => characterCardOrder[a] - characterCardOrder[b];
const actionCardOrder = Object.fromEntries(ALL_ACTION_CARDS.map((card, i) => [card, i])) as Record<ActionCard, number>;
export const actionCardFilter = (k: string): k is ActionCard => ALL_ACTION_CARDS.includes(k as ActionCard);
export const actionCardSorter = (a: ActionCard, b: ActionCard) => actionCardOrder[a] - actionCardOrder[b];

const elementOrder = Object.fromEntries(ALL_ELEMENTS.map((card, i) => [card, i])) as Record<GElement, number>;
export const elementSorter = (a: GElement, b: GElement) => elementOrder[a] - elementOrder[b];
