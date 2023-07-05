import type { CharacterCard, Element } from "~/utils/types";

export const Ganyu = "甘雨";
export const Diona = "迪奥娜";
export const Kaeya = "凯亚";
export const Chongyun = "重云";
export const KamisatoAyaka = "神里绫华";
export const Eula = "优菈";
export const Shenhe = "申鹤";

export const Barbara = "芭芭拉";
export const Xingqiu = "行秋";
export const Mona = "莫娜";
export const Tartaglia = "达达利亚";
export const SangonomiyaKokomi = "珊瑚宫心海";
export const KamisatoAyato = "神里绫人";
export const Candace = "坎蒂丝";

export const Diluc = "迪卢克";
export const Xiangling = "香菱";
export const Bennett = "班尼特";
export const Amber = "安柏";
export const Yoimiya = "宵宫";
export const Klee = "可莉";
export const HuTao = "胡桃";
export const Yanfei = "烟绯";

export const Fischl = "菲谢尔";
export const Razor = "雷泽";
export const Keqing = "刻晴";
export const Cyno = "赛诺";
export const Beidou = "北斗";
export const KujouSara = "九条裟罗";
export const RaidenShogun = "雷电将军";
export const YaeMiko = "八重神子";

export const Sucrose = "砂糖";
export const Jean = "琴";
export const Venti = "温迪";
export const Xiao = "魈";
export const KaedeharaKazuha = "枫原万叶";

export const Ningguang = "凝光";
export const Noelle = "诺艾尔";
export const Zhongli = "钟离";
export const AratakiItto = "荒泷一斗";

export const Collei = "柯莱";
export const Tighnari = "提纳里";
export const Nahida = "纳西妲";

export const FatuiCyroCicinMage = "愚人众·冰萤术士";
export const RhodeiaOfLoch = "纯水精灵·洛蒂娅";
export const FatuiMirrorMaiden = "愚人众·藏镜仕女";
export const FatuiPyroAgent = "愚人众·火之债务处理人";
export const AbyssLectorFathomlessFlames = "深渊咏者·渊火";
export const ElectroHypostasis = "无相之雷";
export const MaguuKenki = "魔偶剑鬼";
export const StonehideLawachurl = "岩盔丘丘王";
export const JadeplumeTerrorshroom = "翠翎恐禽";

export const ALL_CHARACTER_CARDS = [
  Ganyu, Diona, Kaeya, Chongyun, KamisatoAyaka, Eula, Shenhe,
  Barbara, Xingqiu, Mona, Tartaglia, SangonomiyaKokomi, KamisatoAyato, Candace,
  Diluc, Xiangling, Bennett, Amber, Yoimiya, Klee, HuTao, Yanfei,
  Fischl, Razor, Keqing, Cyno, Beidou, KujouSara, RaidenShogun, YaeMiko,
  Sucrose, Jean, Venti, Xiao, KaedeharaKazuha,
  Ningguang, Noelle, Zhongli, AratakiItto,
  Collei, Tighnari, Nahida,
  FatuiCyroCicinMage,
  RhodeiaOfLoch, FatuiMirrorMaiden,
  FatuiPyroAgent, AbyssLectorFathomlessFlames,
  ElectroHypostasis,
  MaguuKenki,
  StonehideLawachurl,
  JadeplumeTerrorshroom,
] as const;

const characterCardOrder = Object.fromEntries(ALL_CHARACTER_CARDS.map((card, i) => [card, i])) as Record<CharacterCard, number>;
export const characterCardSorter = (a: CharacterCard, b: CharacterCard) => characterCardOrder[a] - characterCardOrder[b];

export const characterElement: Record<CharacterCard, Element> = {
  [Ganyu]: "cryo",
  [Diona]: "cryo",
  [Kaeya]: "cryo",
  [Chongyun]: "cryo",
  [KamisatoAyaka]: "cryo",
  [Eula]: "cryo",
  [Shenhe]: "cryo",

  [Barbara]: "hydro",
  [Xingqiu]: "hydro",
  [Mona]: "hydro",
  [Tartaglia]: "hydro",
  [SangonomiyaKokomi]: "hydro",
  [KamisatoAyato]: "hydro",
  [Candace]: "hydro",

  [Diluc]: "pyro",
  [Xiangling]: "pyro",
  [Bennett]: "pyro",
  [Amber]: "pyro",
  [Yoimiya]: "pyro",
  [Klee]: "pyro",
  [HuTao]: "pyro",
  [Yanfei]: "pyro",

  [Fischl]: "electro",
  [Razor]: "electro",
  [Keqing]: "electro",
  [Cyno]: "electro",
  [Beidou]: "electro",
  [KujouSara]: "electro",
  [RaidenShogun]: "electro",
  [YaeMiko]: "electro",

  [Sucrose]: "anemo",
  [Jean]: "anemo",
  [Venti]: "anemo",
  [Xiao]: "anemo",
  [KaedeharaKazuha]: "anemo",

  [Ningguang]: "geo",
  [Noelle]: "geo",
  [Zhongli]: "geo",
  [AratakiItto]: "geo",

  [Collei]: "dendro",
  [Tighnari]: "dendro",
  [Nahida]: "dendro",

  [FatuiCyroCicinMage]: "cryo",
  [RhodeiaOfLoch]: "hydro",
  [FatuiMirrorMaiden]: "hydro",
  [FatuiPyroAgent]: "pyro",
  [AbyssLectorFathomlessFlames]: "pyro",
  [ElectroHypostasis]: "electro",
  [MaguuKenki]: "anemo",
  [StonehideLawachurl]: "geo",
  [JadeplumeTerrorshroom]: "dendro",
};
