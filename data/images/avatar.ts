// cSpell:disable

import { AbyssLectorFathomlessFlames, Amber, AratakiItto, Barbara, Beidou, Bennett, Chongyun, Collei, Cyno, Diluc, Diona, ElectroHypostasis, Eula, FatuiCyroCicinMage, FatuiMirrorMaiden, FatuiPyroAgent, Fischl, Ganyu, HuTao, JadeplumeTerrorshroom, Jean, Kaeya, KamisatoAyaka, KamisatoAyato, Keqing, Klee, KujouSara, MaguuKenki, Mona, Nahida, Ningguang, Noelle, RaidenShogun, Razor, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, StonehideLawachurl, Sucrose, Tartaglia, Tighnari, Venti, Xiangling, Xiao, Xingqiu, YaeMiko, Yoimiya, Zhongli } from "../shared/character-cards";
import { getImageUrl } from "../shared/utils/images";
import type { CharacterCard } from "~/utils/types";

const characterAvatarFilenames: Record<CharacterCard, string> = {
  [Ganyu]: "Ganyu TCG Avatar Icon.png",
  [Diona]: "Diona TCG Avatar Icon.png",
  [Kaeya]: "Kaeya TCG Avatar Icon.png",
  [Chongyun]: "Chongyun TCG Avatar Icon.png",
  [KamisatoAyaka]: "Kamisato Ayaka TCG Avatar Icon.png",
  [Eula]: "Eula TCG Avatar Icon.png",
  [Shenhe]: "Shenhe TCG Avatar Icon.png",

  [Barbara]: "Barbara TCG Avatar Icon.png",
  [Xingqiu]: "Xingqiu TCG Avatar Icon.png",
  [Mona]: "Mona TCG Avatar Icon.png",
  [Tartaglia]: "Tartaglia TCG Avatar Icon.png",
  [SangonomiyaKokomi]: "Sangonomiya Kokomi TCG Avatar Icon.png",
  [KamisatoAyato]: "Kamisato Ayato TCG Avatar Icon.png",

  [Diluc]: "Diluc TCG Avatar Icon.png",
  [Xiangling]: "Xiangling TCG Avatar Icon.png",
  [Bennett]: "Bennett TCG Avatar Icon.png",
  [Amber]: "Amber TCG Avatar Icon.png",
  [Yoimiya]: "Yoimiya TCG Avatar Icon.png",
  [Klee]: "Klee TCG Avatar Icon.png",
  [HuTao]: "Hu Tao TCG Avatar Icon.png",

  [Fischl]: "Fischl TCG Avatar Icon.png",
  [Razor]: "Razor TCG Avatar Icon.png",
  [Keqing]: "Keqing TCG Avatar Icon.png",
  [Cyno]: "Cyno TCG Avatar Icon.png",
  [Beidou]: "Beidou TCG Avatar Icon.png",
  [KujouSara]: "Kujou Sara TCG Avatar Icon.png",
  [RaidenShogun]: "Raiden Shogun TCG Avatar Icon.png",
  [YaeMiko]: "Yae Miko TCG Avatar Icon.png",

  [Sucrose]: "Sucrose TCG Avatar Icon.png",
  [Jean]: "Jean TCG Avatar Icon.png",
  [Venti]: "Venti TCG Avatar Icon.png",
  [Xiao]: "Xiao TCG Avatar Icon.png",

  [Ningguang]: "Ningguang TCG Avatar Icon.png",
  [Noelle]: "Noelle TCG Avatar Icon.png",
  [Zhongli]: "Zhongli TCG Avatar Icon.png",
  [AratakiItto]: "Arataki Itto TCG Avatar Icon.png",

  [Collei]: "Collei TCG Avatar Icon.png",
  [Tighnari]: "Tighnari TCG Avatar Icon.png",
  [Nahida]: "Nahida TCG Avatar Icon.png",

  [FatuiCyroCicinMage]: "Fatui Cryo Cicin Mage TCG Avatar Icon.png",
  [RhodeiaOfLoch]: "Rhodeia of Loch TCG Avatar Icon.png",
  [FatuiMirrorMaiden]: "Mirror Maiden TCG Avatar Icon.png",
  [FatuiPyroAgent]: "Fatui Pyro Agent TCG Avatar Icon.png",
  [AbyssLectorFathomlessFlames]: "Abyss Lector Fathomless Flames TCG Avatar Icon.png",
  [ElectroHypostasis]: "Electro Hypostasis TCG Avatar Icon.png",
  [MaguuKenki]: "Maguu Kenki TCG Avatar Icon.png",
  [StonehideLawachurl]: "Stonehide Lawachurl TCG Avatar Icon.png",
  [JadeplumeTerrorshroom]: "Jadeplume Terrorshroom TCG Avatar Icon.png",
};

export const characterAvatarImages = Object.fromEntries(
  Object.entries(characterAvatarFilenames)
    .map(([card, filename]) => [card, getImageUrl(filename)]),
) as Record<CharacterCard, string>;
