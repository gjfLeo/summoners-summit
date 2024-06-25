import gdb from "@genshin-db/tcg";
import { useMemoize } from "@vueuse/core";
import type { Brand } from "../types/utility-types";

interface CharacterCardInfo {
  readonly id: number;
  readonly name: string;
  readonly nameEn: string;
  readonly shareId: number;
  readonly element: string;
}

function defineCharacterCardInfo(info: CharacterCardInfo) {
  return info;
}

export type CharacterCard = string;

const characterCards = gdb.tcgcharactercards("names", { matchCategories: true })
  .flatMap((nameEn) => {
    const info = gdb.tcgcharactercards(nameEn, { resultLanguage: gdb.Language.ChineseSimplified });
    if (!info) return [];
    if (!info.storytitle) return [];
    const { id, name, shareid: shareId, tags } = info;
    const element = tags.find(tag => tag.startsWith("GCG_TAG_ELEMENT_"))?.substring(16).toLowerCase() as string;
    return [defineCharacterCardInfo({ id, name, nameEn, shareId, element })];
  })
  .sort((a, b) => a.id - b.id);
export const ALL_CHARACTER_CARDS_INFO: Record<CharacterCard, CharacterCardInfo> = Object.fromEntries(characterCards.map(character => [character.name, character]));
export const ALL_CHARACTER_CARDS = Object.keys(ALL_CHARACTER_CARDS_INFO) as CharacterCard[];
export const getCharacterCardInfo = useMemoize((characterCard: CharacterCard) => {
  const info = ALL_CHARACTER_CARDS_INFO[characterCard];
  if (!info) throw new Error(`Character card ${characterCard} not found`);
  return info;
});

export const characterCardOrder = Object.fromEntries(ALL_CHARACTER_CARDS.map((card, i) => [card, i])) as Record<CharacterCard, number>;
export const characterCardSorter = (a: CharacterCard, b: CharacterCard) => characterCardOrder[a] - characterCardOrder[b];

const characterIds: Record<CharacterCard, string> = Object.fromEntries(
  Object.entries(ALL_CHARACTER_CARDS_INFO)
    .map(([card, { id }]) => {
      return [card, String(id)];
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
