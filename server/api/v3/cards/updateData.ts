import gdb from "@genshin-db/tcg";

function getActionCardType(cardType: string): ActionCardInfo["actionType"] {
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

export default defineEventHandler(() => {
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
  writeData("misc/character-cards", Object.fromEntries(characterCardData.map(card => [card.id, card])));

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
        actionType: getActionCardType(cardInfo.cardtype),
      } as ActionCardInfo),
    ];
  }).sort((a, b) => Number(a.id) - Number(b.id));
  writeData("misc/action-cards", Object.fromEntries(actionCardData.map(card => [card.id, card])));

  return responseOk({});
});
