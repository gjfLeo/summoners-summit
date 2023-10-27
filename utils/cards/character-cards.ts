interface CharacterCardInfo {
  readonly name: string;
  readonly nameEn: string;
  readonly element: "Pyro" | "Hydro" | "Cryo" | "Electro" | "Dendro" | "Anemo" | "Geo";
  readonly weapon: "Sword" | "Claymore" | "Polearm" | "Catalyst" | "Bow" | "None";
  readonly faction: "Mondstadt" | "Liyue" | "Inazuma" | "Sumeru" | "Fatui" | "Monster" | "None";
}

function defineCharacterCardInfo(info: CharacterCardInfo) {
  return info;
}

// cSpell:disable
export const ALL_CHARACTER_CARDS_INFO = {
  甘雨: defineCharacterCardInfo({ name: "甘雨", nameEn: "Ganyu", element: "Cryo", weapon: "Bow", faction: "Liyue" }),
  迪奥娜: defineCharacterCardInfo({ name: "迪奥娜", nameEn: "Diona", element: "Cryo", weapon: "Bow", faction: "Mondstadt" }),
  凯亚: defineCharacterCardInfo({ name: "凯亚", nameEn: "Kaeya", element: "Cryo", weapon: "Sword", faction: "Mondstadt" }),
  重云: defineCharacterCardInfo({ name: "重云", nameEn: "Chongyun", element: "Cryo", weapon: "Claymore", faction: "Liyue" }),
  神里绫华: defineCharacterCardInfo({ name: "神里绫华", nameEn: "Kamisato Ayaka", element: "Cryo", weapon: "Sword", faction: "Inazuma" }),
  优菈: defineCharacterCardInfo({ name: "优菈", nameEn: "Eula", element: "Cryo", weapon: "Claymore", faction: "Mondstadt" }),
  申鹤: defineCharacterCardInfo({ name: "申鹤", nameEn: "Shenhe", element: "Cryo", weapon: "Polearm", faction: "Liyue" }),
  七七: defineCharacterCardInfo({ name: "七七", nameEn: "Qiqi", element: "Cryo", weapon: "Sword", faction: "Liyue" }),

  芭芭拉: defineCharacterCardInfo({ name: "芭芭拉", nameEn: "Barbara", element: "Hydro", weapon: "Catalyst", faction: "Mondstadt" }),
  行秋: defineCharacterCardInfo({ name: "行秋", nameEn: "Xingqiu", element: "Hydro", weapon: "Sword", faction: "Liyue" }),
  莫娜: defineCharacterCardInfo({ name: "莫娜", nameEn: "Mona", element: "Hydro", weapon: "Catalyst", faction: "Mondstadt" }),
  达达利亚: defineCharacterCardInfo({ name: "达达利亚", nameEn: "Tartaglia", element: "Hydro", weapon: "Bow", faction: "Fatui" }),
  珊瑚宫心海: defineCharacterCardInfo({ name: "珊瑚宫心海", nameEn: "Sangonomiya Kokomi", element: "Hydro", weapon: "Catalyst", faction: "Inazuma" }),
  神里绫人: defineCharacterCardInfo({ name: "神里绫人", nameEn: "Kamisato Ayato", element: "Hydro", weapon: "Sword", faction: "Inazuma" }),
  坎蒂丝: defineCharacterCardInfo({ name: "坎蒂丝", nameEn: "Candace", element: "Hydro", weapon: "Polearm", faction: "Sumeru" }),
  妮露: defineCharacterCardInfo({ name: "妮露", nameEn: "Nilou", element: "Hydro", weapon: "Sword", faction: "Sumeru" }),

  迪卢克: defineCharacterCardInfo({ name: "迪卢克", nameEn: "Diluc", element: "Pyro", weapon: "Claymore", faction: "Mondstadt" }),
  香菱: defineCharacterCardInfo({ name: "香菱", nameEn: "Xiangling", element: "Pyro", weapon: "Polearm", faction: "Liyue" }),
  班尼特: defineCharacterCardInfo({ name: "班尼特", nameEn: "Bennett", element: "Pyro", weapon: "Sword", faction: "Mondstadt" }),
  安柏: defineCharacterCardInfo({ name: "安柏", nameEn: "Amber", element: "Pyro", weapon: "Bow", faction: "Mondstadt" }),
  宵宫: defineCharacterCardInfo({ name: "宵宫", nameEn: "Yoimiya", element: "Pyro", weapon: "Bow", faction: "Inazuma" }),
  可莉: defineCharacterCardInfo({ name: "可莉", nameEn: "Klee", element: "Pyro", weapon: "Catalyst", faction: "Mondstadt" }),
  胡桃: defineCharacterCardInfo({ name: "胡桃", nameEn: "Hu Tao", element: "Pyro", weapon: "Polearm", faction: "Liyue" }),
  烟绯: defineCharacterCardInfo({ name: "烟绯", nameEn: "Yanfei", element: "Pyro", weapon: "Catalyst", faction: "Liyue" }),
  迪希雅: defineCharacterCardInfo({ name: "迪希雅", nameEn: "Dehya", element: "Pyro", weapon: "Claymore", faction: "Sumeru" }),

  菲谢尔: defineCharacterCardInfo({ name: "菲谢尔", nameEn: "Fischl", element: "Electro", weapon: "Bow", faction: "Mondstadt" }),
  雷泽: defineCharacterCardInfo({ name: "雷泽", nameEn: "Razor", element: "Electro", weapon: "Claymore", faction: "Mondstadt" }),
  刻晴: defineCharacterCardInfo({ name: "刻晴", nameEn: "Keqing", element: "Electro", weapon: "Sword", faction: "Liyue" }),
  赛诺: defineCharacterCardInfo({ name: "赛诺", nameEn: "Cyno", element: "Electro", weapon: "Polearm", faction: "Sumeru" }),
  北斗: defineCharacterCardInfo({ name: "北斗", nameEn: "Beidou", element: "Electro", weapon: "Claymore", faction: "Liyue" }),
  九条裟罗: defineCharacterCardInfo({ name: "九条裟罗", nameEn: "Kujou Sara", element: "Electro", weapon: "Bow", faction: "Inazuma" }),
  雷电将军: defineCharacterCardInfo({ name: "雷电将军", nameEn: "Raiden Shogun", element: "Electro", weapon: "Polearm", faction: "Inazuma" }),
  八重神子: defineCharacterCardInfo({ name: "八重神子", nameEn: "Yae Miko", element: "Electro", weapon: "Catalyst", faction: "Inazuma" }),
  丽莎: defineCharacterCardInfo({ name: "丽莎", nameEn: "Lisa", element: "Electro", weapon: "Catalyst", faction: "Mondstadt" }),
  多莉: defineCharacterCardInfo({ name: "多莉", nameEn: "Dori", element: "Electro", weapon: "Claymore", faction: "Sumeru" }),

  砂糖: defineCharacterCardInfo({ name: "砂糖", nameEn: "Sucrose", element: "Anemo", weapon: "Catalyst", faction: "Mondstadt" }),
  琴: defineCharacterCardInfo({ name: "琴", nameEn: "Jean", element: "Anemo", weapon: "Sword", faction: "Mondstadt" }),
  温迪: defineCharacterCardInfo({ name: "温迪", nameEn: "Venti", element: "Anemo", weapon: "Bow", faction: "Mondstadt" }),
  魈: defineCharacterCardInfo({ name: "魈", nameEn: "Xiao", element: "Anemo", weapon: "Polearm", faction: "Liyue" }),
  枫原万叶: defineCharacterCardInfo({ name: "枫原万叶", nameEn: "Kaedehara Kazuha", element: "Anemo", weapon: "Sword", faction: "Inazuma" }),
  流浪者: defineCharacterCardInfo({ name: "流浪者", nameEn: "Wanderer", element: "Anemo", weapon: "Catalyst", faction: "None" }),

  凝光: defineCharacterCardInfo({ name: "凝光", nameEn: "Ningguang", element: "Geo", weapon: "Catalyst", faction: "Liyue" }),
  诺艾尔: defineCharacterCardInfo({ name: "诺艾尔", nameEn: "Noelle", element: "Geo", weapon: "Claymore", faction: "Mondstadt" }),
  钟离: defineCharacterCardInfo({ name: "凝光", nameEn: "Zhongli", element: "Geo", weapon: "Polearm", faction: "Liyue" }),
  阿贝多: defineCharacterCardInfo({ name: "阿贝多", nameEn: "Albedo", element: "Geo", weapon: "Sword", faction: "Mondstadt" }),
  荒泷一斗: defineCharacterCardInfo({ name: "荒泷一斗", nameEn: "Arataki Itto", element: "Geo", weapon: "Claymore", faction: "Inazuma" }),

  柯莱: defineCharacterCardInfo({ name: "柯莱", nameEn: "Collei", element: "Dendro", weapon: "Bow", faction: "Sumeru" }),
  提纳里: defineCharacterCardInfo({ name: "提纳里", nameEn: "Tighnari", element: "Dendro", weapon: "Bow", faction: "Sumeru" }),
  纳西妲: defineCharacterCardInfo({ name: "纳西妲", nameEn: "Nahida", element: "Dendro", weapon: "Catalyst", faction: "Sumeru" }),
  瑶瑶: defineCharacterCardInfo({ name: "瑶瑶", nameEn: "Yaoyao", element: "Dendro", weapon: "Polearm", faction: "Liyue" }),
  白术: defineCharacterCardInfo({ name: "白术", nameEn: "Baizhu", element: "Dendro", weapon: "Catalyst", faction: "Liyue" }),

  愚人众·冰萤术士: defineCharacterCardInfo({ name: "愚人众·冰萤术士", nameEn: "Fatui Cryo Cicin Mage", element: "Cryo", weapon: "None", faction: "Fatui" }),
  纯水精灵·洛蒂娅: defineCharacterCardInfo({ name: "纯水精灵·洛蒂娅", nameEn: "Rhodeia of Loch", element: "Hydro", weapon: "None", faction: "Monster" }),
  愚人众·藏镜仕女: defineCharacterCardInfo({ name: "愚人众·藏镜仕女", nameEn: "Mirror Maiden", element: "Hydro", weapon: "None", faction: "Fatui" }),
  愚人众·火之债务处理人: defineCharacterCardInfo({ name: "愚人众·火之债务处理人", nameEn: "Fatui Pyro Agent", element: "Pyro", weapon: "None", faction: "Fatui" }),
  深渊咏者·渊火: defineCharacterCardInfo({ name: "深渊咏者·渊火", nameEn: "Abyss Lector Fathomless Flames", element: "Pyro", weapon: "None", faction: "Monster" }),
  无相之雷: defineCharacterCardInfo({ name: "无相之雷", nameEn: "Electro Hypostasis", element: "Electro", weapon: "None", faction: "Monster" }),
  魔偶剑鬼: defineCharacterCardInfo({ name: "魔偶剑鬼", nameEn: "Maguu Kenki", element: "Anemo", weapon: "None", faction: "Monster" }),
  岩盔丘丘王: defineCharacterCardInfo({ name: "岩盔丘丘王", nameEn: "Stonehide Lawachurl", element: "Geo", weapon: "None", faction: "Monster" }),
  翠翎恐禽: defineCharacterCardInfo({ name: "翠翎恐禽", nameEn: "Jadeplume Terrorshroom", element: "Dendro", weapon: "None", faction: "Monster" }),
} as const;

export type CharacterCard = keyof typeof ALL_CHARACTER_CARDS_INFO;

export const ALL_CHARACTER_CARDS = Object.keys(ALL_CHARACTER_CARDS_INFO) as CharacterCard[];

const characterCardOrder = Object.fromEntries(ALL_CHARACTER_CARDS.map((card, i) => [card, i])) as Record<CharacterCard, number>;
export const characterCardSorter = (a: CharacterCard, b: CharacterCard) => characterCardOrder[a] - characterCardOrder[b];
