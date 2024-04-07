import gdb from "@genshin-db/tcg";
import { z } from "zod";

function parseActionCardType(cardType: string): ActionCardInfo["actionType"] {
  switch (cardType) {
    case "GCG_CARD_MODIFY":
      return "equipment";
    case "GCG_CARD_ASSIST":
      return "support";
    case "GCG_CARD_EVENT":
      return "event";
    default:
      throw new Error(`Invalid cardType: ${cardType}`);
  }
}

function getCharacterCardData() {
  const characterCardInfos = gdb.tcgcharactercards("names", {
    matchCategories: true,
    verboseCategories: true,
  });
  const characterCardNames = gdb.tcgcharactercards("names", {
    matchCategories: true,
    resultLanguage: gdb.Language.ChineseSimplified,
  });
  const characterCardData = characterCardInfos.flatMap((cardInfo, i) => {
    if (!cardInfo) return [];
    if (cardInfo.istransformation) return [];
    return [
      ZCharacterCardInfo.parse({
        id: ZCardId.parse(cardInfo.id),
        name: {
          zh: characterCardNames[i],
          en: cardInfo.name,
        },
        shareId: cardInfo.shareid,
        type: "character",
        gameVersion: cardInfo.version,
        element: cardInfo.tags.find(tag => tag.startsWith("GCG_TAG_ELEMENT"))?.substring(16).toLowerCase(),
      } as CharacterCardInfo),
    ];
  }).sort((a, b) => Number(a.id) - Number(b.id));
  return characterCardData;
}

function getActionCardData() {
  const actionCardInfos = gdb.tcgactioncards("names", {
    matchCategories: true,
    verboseCategories: true,
  });
  const actionCardNames = gdb.tcgactioncards("names", {
    matchCategories: true,
    resultLanguage: gdb.Language.ChineseSimplified,
  });
  const actionCardData = actionCardInfos.flatMap((cardInfo, i) => {
    if (!cardInfo) return [];
    if (!cardInfo.storytitle) return [];
    return [
      ZActionCardInfo.parse({
        id: ZCardId.parse(cardInfo.id),
        name: {
          zh: actionCardNames[i],
          en: cardInfo.name,
        },
        shareId: cardInfo.shareid,
        type: "action",
        gameVersion: cardInfo.version,
        actionType: parseActionCardType(cardInfo.cardtype),
      } as ActionCardInfo),
    ];
  }).sort((a, b) => Number(a.id) - Number(b.id));
  return actionCardData;
}

function getVersionData(versionIds: GameVersionId[]) {
  const seasonPhrases = z.record(ZSeasonPhraseId, ZSeasonPhrase).parse(readData("misc/season-phrases"));
  return ZGameVersion.array().parse(
    versionIds.map((vId) => {
      const phrases = Object.values(seasonPhrases).find(p => p.gameVersions.includes(vId));
      return {
        id: vId,
        seasonPhrase: phrases?.id ?? "",
      };
    }),
  );
}

export default defineEventHandler(() => {
  const characterCardData = getCharacterCardData();
  writeData("misc/character-cards", Object.fromEntries(characterCardData.map(card => [card.id, card])));
  const actionCardData = getActionCardData();
  writeData("misc/action-cards", Object.fromEntries(actionCardData.map(card => [card.id, card])));

  const versionSet = new Set<string>();
  [...characterCardData, ...actionCardData].forEach((card) => {
    versionSet.add(card.gameVersion);
  });
  const versionIds = Array.from(versionSet).sort().reverse().filter(v => v.localeCompare("3.7") >= 0);
  const versionData = getVersionData(versionIds);
  writeData("misc/game-versions", Object.fromEntries(versionData.map(v => [v.id, v])));

  return responseOk({ });
});
