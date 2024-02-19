import type { Brand } from "../types/utility-types";

interface CharacterCardInfo {
  readonly id: number;
  readonly name: string;
  readonly nameEn: string;
  readonly element: "Pyro" | "Hydro" | "Cryo" | "Electro" | "Dendro" | "Anemo" | "Geo";
  readonly weapon: "Sword" | "Claymore" | "Polearm" | "Catalyst" | "Bow" | "None";
  readonly faction: ("Mondstadt" | "Liyue" | "Inazuma" | "Sumeru" | "Fontaine" | "Fatui" | "Eremite" | "Monster")[];
}

function defineCharacterCardInfo(info: CharacterCardInfo) {
  return info;
}

// cSpell:disable
export const ALL_CHARACTER_CARDS_INFO = {
  "甘雨": defineCharacterCardInfo({ id: 1101, name: "甘雨", nameEn: "Ganyu", element: "Cryo", weapon: "Bow", faction: ["Liyue"] }),
  "迪奥娜": defineCharacterCardInfo({ id: 1102, name: "迪奥娜", nameEn: "Diona", element: "Cryo", weapon: "Bow", faction: ["Mondstadt"] }),
  "凯亚": defineCharacterCardInfo({ id: 1103, name: "凯亚", nameEn: "Kaeya", element: "Cryo", weapon: "Sword", faction: ["Mondstadt"] }),
  "重云": defineCharacterCardInfo({ id: 1104, name: "重云", nameEn: "Chongyun", element: "Cryo", weapon: "Claymore", faction: ["Liyue"] }),
  "神里绫华": defineCharacterCardInfo({ id: 1105, name: "神里绫华", nameEn: "Kamisato Ayaka", element: "Cryo", weapon: "Sword", faction: ["Inazuma"] }),
  "优菈": defineCharacterCardInfo({ id: 1106, name: "优菈", nameEn: "Eula", element: "Cryo", weapon: "Claymore", faction: ["Mondstadt"] }),
  "申鹤": defineCharacterCardInfo({ id: 1107, name: "申鹤", nameEn: "Shenhe", element: "Cryo", weapon: "Polearm", faction: ["Liyue"] }),
  "七七": defineCharacterCardInfo({ id: 1108, name: "七七", nameEn: "Qiqi", element: "Cryo", weapon: "Sword", faction: ["Liyue"] }),
  "莱依拉": defineCharacterCardInfo({ id: 1109, name: "莱依拉", nameEn: "Layla", element: "Cryo", weapon: "Sword", faction: ["Sumeru"] }),

  "芭芭拉": defineCharacterCardInfo({ id: 1201, name: "芭芭拉", nameEn: "Barbara", element: "Hydro", weapon: "Catalyst", faction: ["Mondstadt"] }),
  "行秋": defineCharacterCardInfo({ id: 1202, name: "行秋", nameEn: "Xingqiu", element: "Hydro", weapon: "Sword", faction: ["Liyue"] }),
  "莫娜": defineCharacterCardInfo({ id: 1203, name: "莫娜", nameEn: "Mona", element: "Hydro", weapon: "Catalyst", faction: ["Mondstadt"] }),
  "达达利亚": defineCharacterCardInfo({ id: 1204, name: "达达利亚", nameEn: "Tartaglia", element: "Hydro", weapon: "Bow", faction: ["Fatui"] }),
  "珊瑚宫心海": defineCharacterCardInfo({ id: 1205, name: "珊瑚宫心海", nameEn: "Sangonomiya Kokomi", element: "Hydro", weapon: "Catalyst", faction: ["Inazuma"] }),
  "神里绫人": defineCharacterCardInfo({ id: 1206, name: "神里绫人", nameEn: "Kamisato Ayato", element: "Hydro", weapon: "Sword", faction: ["Inazuma"] }),
  "坎蒂丝": defineCharacterCardInfo({ id: 1207, name: "坎蒂丝", nameEn: "Candace", element: "Hydro", weapon: "Polearm", faction: ["Sumeru"] }),
  "妮露": defineCharacterCardInfo({ id: 1208, name: "妮露", nameEn: "Nilou", element: "Hydro", weapon: "Sword", faction: ["Sumeru"] }),
  "夜兰": defineCharacterCardInfo({ id: 1209, name: "夜兰", nameEn: "Yelan", element: "Hydro", weapon: "Bow", faction: ["Liyue"] }),

  "迪卢克": defineCharacterCardInfo({ id: 1301, name: "迪卢克", nameEn: "Diluc", element: "Pyro", weapon: "Claymore", faction: ["Mondstadt"] }),
  "香菱": defineCharacterCardInfo({ id: 1302, name: "香菱", nameEn: "Xiangling", element: "Pyro", weapon: "Polearm", faction: ["Liyue"] }),
  "班尼特": defineCharacterCardInfo({ id: 1303, name: "班尼特", nameEn: "Bennett", element: "Pyro", weapon: "Sword", faction: ["Mondstadt"] }),
  "安柏": defineCharacterCardInfo({ id: 1304, name: "安柏", nameEn: "Amber", element: "Pyro", weapon: "Bow", faction: ["Mondstadt"] }),
  "宵宫": defineCharacterCardInfo({ id: 1305, name: "宵宫", nameEn: "Yoimiya", element: "Pyro", weapon: "Bow", faction: ["Inazuma"] }),
  "可莉": defineCharacterCardInfo({ id: 1306, name: "可莉", nameEn: "Klee", element: "Pyro", weapon: "Catalyst", faction: ["Mondstadt"] }),
  "胡桃": defineCharacterCardInfo({ id: 1307, name: "胡桃", nameEn: "Hu Tao", element: "Pyro", weapon: "Polearm", faction: ["Liyue"] }),
  "烟绯": defineCharacterCardInfo({ id: 1308, name: "烟绯", nameEn: "Yanfei", element: "Pyro", weapon: "Catalyst", faction: ["Liyue"] }),
  "迪希雅": defineCharacterCardInfo({ id: 1309, name: "迪希雅", nameEn: "Dehya", element: "Pyro", weapon: "Claymore", faction: ["Sumeru", "Eremite"] }),
  "林尼": defineCharacterCardInfo({ id: 1310, name: "林尼", nameEn: "Lyney", element: "Pyro", weapon: "Bow", faction: ["Fontaine"] }),
  "托马": defineCharacterCardInfo({ id: 1311, name: "托马", nameEn: "Thoma", element: "Pyro", weapon: "Polearm", faction: ["Inazuma"] }),

  "菲谢尔": defineCharacterCardInfo({ id: 1401, name: "菲谢尔", nameEn: "Fischl", element: "Electro", weapon: "Bow", faction: ["Mondstadt"] }),
  "雷泽": defineCharacterCardInfo({ id: 1402, name: "雷泽", nameEn: "Razor", element: "Electro", weapon: "Claymore", faction: ["Mondstadt"] }),
  "刻晴": defineCharacterCardInfo({ id: 1403, name: "刻晴", nameEn: "Keqing", element: "Electro", weapon: "Sword", faction: ["Liyue"] }),
  "赛诺": defineCharacterCardInfo({ id: 1404, name: "赛诺", nameEn: "Cyno", element: "Electro", weapon: "Polearm", faction: ["Sumeru"] }),
  "北斗": defineCharacterCardInfo({ id: 1405, name: "北斗", nameEn: "Beidou", element: "Electro", weapon: "Claymore", faction: ["Liyue"] }),
  "九条裟罗": defineCharacterCardInfo({ id: 1406, name: "九条裟罗", nameEn: "Kujou Sara", element: "Electro", weapon: "Bow", faction: ["Inazuma"] }),
  "雷电将军": defineCharacterCardInfo({ id: 1407, name: "雷电将军", nameEn: "Raiden Shogun", element: "Electro", weapon: "Polearm", faction: ["Inazuma"] }),
  "八重神子": defineCharacterCardInfo({ id: 1408, name: "八重神子", nameEn: "Yae Miko", element: "Electro", weapon: "Catalyst", faction: ["Inazuma"] }),
  "丽莎": defineCharacterCardInfo({ id: 1409, name: "丽莎", nameEn: "Lisa", element: "Electro", weapon: "Catalyst", faction: ["Mondstadt"] }),
  "多莉": defineCharacterCardInfo({ id: 1410, name: "多莉", nameEn: "Dori", element: "Electro", weapon: "Claymore", faction: ["Sumeru"] }),

  "砂糖": defineCharacterCardInfo({ id: 1501, name: "砂糖", nameEn: "Sucrose", element: "Anemo", weapon: "Catalyst", faction: ["Mondstadt"] }),
  "琴": defineCharacterCardInfo({ id: 1502, name: "琴", nameEn: "Jean", element: "Anemo", weapon: "Sword", faction: ["Mondstadt"] }),
  "温迪": defineCharacterCardInfo({ id: 1503, name: "温迪", nameEn: "Venti", element: "Anemo", weapon: "Bow", faction: ["Mondstadt"] }),
  "魈": defineCharacterCardInfo({ id: 1504, name: "魈", nameEn: "Xiao", element: "Anemo", weapon: "Polearm", faction: ["Liyue"] }),
  "枫原万叶": defineCharacterCardInfo({ id: 1505, name: "枫原万叶", nameEn: "Kaedehara Kazuha", element: "Anemo", weapon: "Sword", faction: ["Inazuma"] }),
  "流浪者": defineCharacterCardInfo({ id: 1506, name: "流浪者", nameEn: "Wanderer", element: "Anemo", weapon: "Catalyst", faction: [] }),
  "早柚": defineCharacterCardInfo({ id: 1507, name: "早柚", nameEn: "Sayu", element: "Anemo", weapon: "Claymore", faction: ["Inazuma"] }),
  "琳妮特": defineCharacterCardInfo({ id: 1508, name: "琳妮特", nameEn: "Lynette", element: "Anemo", weapon: "Sword", faction: ["Fontaine"] }),

  "凝光": defineCharacterCardInfo({ id: 1601, name: "凝光", nameEn: "Ningguang", element: "Geo", weapon: "Catalyst", faction: ["Liyue"] }),
  "诺艾尔": defineCharacterCardInfo({ id: 1602, name: "诺艾尔", nameEn: "Noelle", element: "Geo", weapon: "Claymore", faction: ["Mondstadt"] }),
  "钟离": defineCharacterCardInfo({ id: 1603, name: "凝光", nameEn: "Zhongli", element: "Geo", weapon: "Polearm", faction: ["Liyue"] }),
  "阿贝多": defineCharacterCardInfo({ id: 1604, name: "阿贝多", nameEn: "Albedo", element: "Geo", weapon: "Sword", faction: ["Mondstadt"] }),
  "荒泷一斗": defineCharacterCardInfo({ id: 1605, name: "荒泷一斗", nameEn: "Arataki Itto", element: "Geo", weapon: "Claymore", faction: ["Inazuma"] }),
  "五郎": defineCharacterCardInfo({ id: 1606, name: "五郎", nameEn: "Gorou", element: "Geo", weapon: "Bow", faction: ["Inazuma"] }),

  "柯莱": defineCharacterCardInfo({ id: 1701, name: "柯莱", nameEn: "Collei", element: "Dendro", weapon: "Bow", faction: ["Sumeru"] }),
  "提纳里": defineCharacterCardInfo({ id: 1702, name: "提纳里", nameEn: "Tighnari", element: "Dendro", weapon: "Bow", faction: ["Sumeru"] }),
  "纳西妲": defineCharacterCardInfo({ id: 1703, name: "纳西妲", nameEn: "Nahida", element: "Dendro", weapon: "Catalyst", faction: ["Sumeru"] }),
  "瑶瑶": defineCharacterCardInfo({ id: 1704, name: "瑶瑶", nameEn: "Yaoyao", element: "Dendro", weapon: "Polearm", faction: ["Liyue"] }),
  "白术": defineCharacterCardInfo({ id: 1705, name: "白术", nameEn: "Baizhu", element: "Dendro", weapon: "Catalyst", faction: ["Liyue"] }),
  "艾尔海森": defineCharacterCardInfo({ id: 1706, name: "艾尔海森", nameEn: "Alhaitham", element: "Dendro", weapon: "Catalyst", faction: ["Sumeru"] }),

  "愚人众·冰萤术士": defineCharacterCardInfo({ id: 2101, name: "愚人众·冰萤术士", nameEn: "Fatui Cryo Cicin Mage", element: "Cryo", weapon: "None", faction: ["Fatui"] }),
  "「女士」": defineCharacterCardInfo({ id: 2102, name: "「女士」", nameEn: "La Signora", element: "Cryo", weapon: "None", faction: ["Fatui"] }),
  "无相之冰": defineCharacterCardInfo({ id: 2103, name: "无相之冰", nameEn: "Cryo Hypostasis", element: "Cryo", weapon: "None", faction: ["Monster"] }),
  "纯水精灵·洛蒂娅": defineCharacterCardInfo({ id: 2201, name: "纯水精灵·洛蒂娅", nameEn: "Rhodeia of Loch", element: "Hydro", weapon: "None", faction: ["Monster"] }),
  "愚人众·藏镜仕女": defineCharacterCardInfo({ id: 2202, name: "愚人众·藏镜仕女", nameEn: "Mirror Maiden", element: "Hydro", weapon: "None", faction: ["Fatui"] }),
  "愚人众·火之债务处理人": defineCharacterCardInfo({ id: 2301, name: "愚人众·火之债务处理人", nameEn: "Fatui Pyro Agent", element: "Pyro", weapon: "None", faction: ["Fatui"] }),
  "深渊咏者·渊火": defineCharacterCardInfo({ id: 2302, name: "深渊咏者·渊火", nameEn: "Abyss Lector Fathomless Flames", element: "Pyro", weapon: "None", faction: ["Monster"] }),
  "镀金旅团·炽沙叙事人": defineCharacterCardInfo({ id: 2303, name: "镀金旅团·炽沙叙事人", nameEn: "Eremite Scorching Loremaster", element: "Pyro", weapon: "None", faction: ["Eremite"] }),
  "无相之雷": defineCharacterCardInfo({ id: 2401, name: "无相之雷", nameEn: "Electro Hypostasis", element: "Electro", weapon: "None", faction: ["Monster"] }),
  "雷音权现": defineCharacterCardInfo({ id: 2402, name: "雷音权现", nameEn: "Thunder Manifestation", element: "Electro", weapon: "None", faction: ["Monster"] }),
  "千年珍珠骏麟": defineCharacterCardInfo({ id: 2403, name: "千年珍珠骏麟", nameEn: "Millennial Pearl Seahorse", element: "Electro", weapon: "None", faction: ["Monster"] }),
  "魔偶剑鬼": defineCharacterCardInfo({ id: 2501, name: "魔偶剑鬼", nameEn: "Maguu Kenki", element: "Anemo", weapon: "None", faction: ["Monster"] }),
  "特瓦林": defineCharacterCardInfo({ id: 2502, name: "特瓦林", nameEn: "Dvalin", element: "Anemo", weapon: "None", faction: ["Monster"] }),
  "岩盔丘丘王": defineCharacterCardInfo({ id: 2601, name: "岩盔丘丘王", nameEn: "Stonehide Lawachurl", element: "Geo", weapon: "None", faction: ["Monster"] }),
  "若陀龙王": defineCharacterCardInfo({ id: 2602, name: "若陀龙王", nameEn: "Azhdaha", element: "Geo", weapon: "None", faction: ["Monster"] }),
  "翠翎恐禽": defineCharacterCardInfo({ id: 2701, name: "翠翎恐禽", nameEn: "Jadeplume Terrorshroom", element: "Dendro", weapon: "None", faction: ["Monster"] }),
} as const;

export type CharacterCard = keyof typeof ALL_CHARACTER_CARDS_INFO;

export const ALL_CHARACTER_CARDS = Object.keys(ALL_CHARACTER_CARDS_INFO) as CharacterCard[];

export const characterCardOrder = Object.fromEntries(ALL_CHARACTER_CARDS.map((card, i) => [card, i])) as Record<CharacterCard, number>;
export const characterCardSorter = (a: CharacterCard, b: CharacterCard) => characterCardOrder[a] - characterCardOrder[b];

const characterIds: Record<CharacterCard, string> = Object.fromEntries(
  Object.entries(ALL_CHARACTER_CARDS_INFO)
    .map(([card, { nameEn }]) => {
      const characterId = nameEn.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
      return [card, characterId];
    }),
) as Record<CharacterCard, string>;

const characterById: Record<string, CharacterCard> = Object.fromEntries(
  Object.entries(characterIds)
    .map(([character, id]) => ([id, character as CharacterCard])),
);

export type TeamId = Brand<string, "TeamId">;

export function getCharactersByTeamId(teamId: TeamId): CharacterCard[] {
  return teamId.split("-").map(id => characterById[id]) as CharacterCard[];
}
export function getTeamIdByCharacters(characters: CharacterCard[]): TeamId {
  return [...characters].sort(characterCardSorter).map(character => characterIds[character]).join("-") as TeamId;
}
export function normalizeTeamId(teamId: TeamId): TeamId {
  return getTeamIdByCharacters(getCharactersByTeamId(teamId));
}
