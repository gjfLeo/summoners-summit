import { AbyssLectorFathomlessFlames, Albedo, Amber, AratakiItto, Barbara, Beidou, Bennett, Candace, type CharacterCard, Chongyun, Collei, Cyno, Dehya, Diluc, Diona, ElectroHypostasis, Eula, FatuiCyroCicinMage, FatuiMirrorMaiden, FatuiPyroAgent, Fischl, Ganyu, HuTao, JadeplumeTerrorshroom, Jean, KaedeharaKazuha, Kaeya, KamisatoAyaka, KamisatoAyato, Keqing, Klee, KujouSara, Lisa, MaguuKenki, Mona, Nahida, Ningguang, Noelle, Qiqi, RaidenShogun, Razor, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, StonehideLawachurl, Sucrose, Tartaglia, Tighnari, Venti, Wanderer, Xiangling, Xiao, Xingqiu, YaeMiko, Yanfei, Yaoyao, Yoimiya, Zhongli, characterCardSorter } from "~/utils/types";

const characterIds: Record<CharacterCard, string> = {
  [Ganyu]: "Ganyu",
  [Diona]: "Diona",
  [Kaeya]: "Kaeya",
  [Chongyun]: "Chongyun",
  [KamisatoAyaka]: "KamisatoAyaka",
  [Eula]: "Eula",
  [Shenhe]: "Shenhe",
  [Qiqi]: "Qiqi",

  [Barbara]: "Barbara",
  [Xingqiu]: "Xingqiu",
  [Mona]: "Mona",
  [Tartaglia]: "Tartaglia",
  [SangonomiyaKokomi]: "SangonomiyaKokomi",
  [KamisatoAyato]: "KamisatoAyato",
  [Candace]: "Candace",

  [Diluc]: "Diluc",
  [Xiangling]: "Xiangling",
  [Bennett]: "Bennett",
  [Amber]: "Amber",
  [Yoimiya]: "Yoimiya",
  [Klee]: "Klee",
  [HuTao]: "HuTao",
  [Yanfei]: "Yanfei",
  [Dehya]: "Dehya",

  [Fischl]: "Fischl",
  [Razor]: "Razor",
  [Keqing]: "Keqing",
  [Cyno]: "Cyno",
  [Beidou]: "Beidou",
  [KujouSara]: "KujouSara",
  [RaidenShogun]: "RaidenShogun",
  [YaeMiko]: "YaeMiko",
  [Lisa]: "Lisa",

  [Sucrose]: "Sucrose",
  [Jean]: "Jean",
  [Venti]: "Venti",
  [Xiao]: "Xiao",
  [KaedeharaKazuha]: "KaedeharaKazuha",
  [Wanderer]: "Wanderer",

  [Ningguang]: "Ningguang",
  [Noelle]: "Noelle",
  [Zhongli]: "Zhongli",
  [Albedo]: "Albedo",
  [AratakiItto]: "AratakiItto",

  [Collei]: "Collei",
  [Tighnari]: "Tighnari",
  [Nahida]: "Nahida",
  [Yaoyao]: "Yaoyao",

  [FatuiCyroCicinMage]: "FatuiCyroCicinMage",
  [RhodeiaOfLoch]: "RhodeiaOfLoch",
  [FatuiMirrorMaiden]: "FatuiMirrorMaiden",
  [FatuiPyroAgent]: "FatuiPyroAgent",
  [AbyssLectorFathomlessFlames]: "AbyssLectorFathomlessFlames",
  [ElectroHypostasis]: "ElectroHypostasis",
  [MaguuKenki]: "MaguuKenki",
  [StonehideLawachurl]: "StonehideLawachurl",
  [JadeplumeTerrorshroom]: "JadeplumeTerrorshroom",
};

const characterById = Object.fromEntries(Object.entries(characterIds).map(([character, id]) => ([id, character as CharacterCard])));

export type UseTeamSource = string | CharacterCard[] | { team: string | CharacterCard[] };

export function getTeamId(team: CharacterCard[]) {
  return [...team].sort(characterCardSorter).map(character => characterIds[character]).join("-");
}

function sourceToTeam(source: UseTeamSource): CharacterCard[] {
  if (typeof source === "string") {
    return source.split("-").map(id => characterById[id]) as CharacterCard[];
  }
  else if (Array.isArray(source)) {
    return source;
  }
  return sourceToTeam(source.team);
}

export default function useTeam(source: MaybeRef<UseTeamSource>) {
  const team = computed(() => sourceToTeam(unref(source)));
  const teamId = computed(() => getTeamId(team.value));
  const teamDisplayName = computed(() => team.value.join(" & "));
  return { team, teamId, teamDisplayName };
}
