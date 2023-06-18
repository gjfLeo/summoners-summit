// cSpell:disable

import { getImageUrl } from "../shared/utils/images";
import type { CharacterCard } from "~/utils/types";

const characterAvatarFilenames: Record<CharacterCard, string> = {
  甘雨: "Ganyu TCG Avatar Icon.png",
  迪奥娜: "Diona TCG Avatar Icon.png",
  凯亚: "Kaeya TCG Avatar Icon.png",
  重云: "Chongyun TCG Avatar Icon.png",
  神里绫华: "Kamisato Ayaka TCG Avatar Icon.png",
  优菈: "Eula TCG Avatar Icon.png",
  申鹤: "Shenhe TCG Avatar Icon.png",

  芭芭拉: "Barbara TCG Avatar Icon.png",
  行秋: "Xingqiu TCG Avatar Icon.png",
  莫娜: "Mona TCG Avatar Icon.png",
  达达利亚: "Tartaglia TCG Avatar Icon.png",
  珊瑚宫心海: "Sangonomiya Kokomi TCG Avatar Icon.png",
  神里绫人: "Kamisato Ayato TCG Avatar Icon.png",

  迪卢克: "Diluc TCG Avatar Icon.png",
  香菱: "Xiangling TCG Avatar Icon.png",
  班尼特: "Bennett TCG Avatar Icon.png",
  安柏: "Amber TCG Avatar Icon.png",
  宵宫: "Yoimiya TCG Avatar Icon.png",
  可莉: "Klee TCG Avatar Icon.png",
  胡桃: "Hu Tao TCG Avatar Icon.png",

  菲谢尔: "Fischl TCG Avatar Icon.png",
  雷泽: "Razor TCG Avatar Icon.png",
  刻晴: "Keqing TCG Avatar Icon.png",
  赛诺: "Cyno TCG Avatar Icon.png",
  北斗: "Beidou TCG Avatar Icon.png",
  九条裟罗: "Kujou Sara TCG Avatar Icon.png",
  雷电将军: "Raiden Shogun TCG Avatar Icon.png",
  八重神子: "Yae Miko TCG Avatar Icon.png",

  砂糖: "Sucrose TCG Avatar Icon.png",
  琴: "Jean TCG Avatar Icon.png",
  温迪: "Venti TCG Avatar Icon.png",
  魈: "Xiao TCG Avatar Icon.png",

  凝光: "Ningguang TCG Avatar Icon.png",
  诺艾尔: "Noelle TCG Avatar Icon.png",
  钟离: "Zhongli TCG Avatar Icon.png",
  荒泷一斗: "Arataki Itto TCG Avatar Icon.png",

  柯莱: "Collei TCG Avatar Icon.png",
  提纳里: "Tighnari TCG Avatar Icon.png",
  纳西妲: "Nahida TCG Avatar Icon.png",

  愚人众·冰萤术士: "Fatui Cryo Cicin Mage TCG Avatar Icon.png",
  纯水精灵·洛蒂娅: "Rhodeia of Loch TCG Avatar Icon.png",
  愚人众·藏镜仕女: "Mirror Maiden TCG Avatar Icon.png",
  愚人众·火之债务处理人: "Fatui Pyro Agent TCG Avatar Icon.png",
  深渊咏者·渊火: "Abyss Lector Fathomless Flames TCG Avatar Icon.png",
  无相之雷: "Electro Hypostasis TCG Avatar Icon.png",
  魔偶剑鬼: "Maguu Kenki TCG Avatar Icon.png",
  岩盔丘丘王: "Stonehide Lawachurl TCG Avatar Icon.png",
  翠翎恐禽: "Jadeplume Terrorshroom TCG Avatar Icon.png",
};

export const characterAvatarImages = Object.fromEntries(
  Object.entries(characterAvatarFilenames)
    .map(([card, filename]) => [card, getImageUrl(filename)]),
);
