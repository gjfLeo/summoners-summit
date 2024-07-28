import crypto from "node:crypto";
import { z } from "zod";
import type { ActionCardInfo, CharacterCardInfo, GameVersionId } from "~/types";
import { ZActionCardInfo, ZCardId, ZCharacterCardInfo, ZGameVersion, ZSeasonPhrase, ZSeasonPhraseId } from "~/types";

const fandomFilenameOverrides: Record<number, string> = {
  212111: "Hear Me — Let Us Raise the Chalice of Love! Equipment Card.png",
};

function getFandomImageUrl(filename: string) {
  filename = filename.replaceAll(":", "");
  filename = filename.replaceAll("?", "");
  // filename = filename.replaceAll("\"", "");
  filename = filename.replaceAll(" ", "_");
  const md5 = crypto.createHash("md5").update(filename).digest("hex");
  filename = filename.replace("'", "%27");
  filename = filename.replace("\"", "%22");
  return `https://static.wikia.nocookie.net/gensin-impact/images/${md5.charAt(0)}/${md5.slice(0, 2)}/${filename}`;
}

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

async function getCharacterCardData() {
  const gdb = (await import("@genshin-db/tcg")).default;
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
        element: cardInfo.tags.find(tag => tag.startsWith("GCG_TAG_ELEMENT"))?.substring(16).toLowerCase() as CharacterCardInfo["element"],
        image: getFandomImageUrl(`${cardInfo.name} Character Card.png`),
        avatar: getFandomImageUrl(`${cardInfo.name} TCG Avatar Icon.png`),
      } satisfies CharacterCardInfo),
    ];
  }).sort((a, b) => Number(a.id) - Number(b.id));
  return characterCardData;
}

async function getActionCardData() {
  const gdb = (await import("@genshin-db/tcg")).default;
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
    const actionType = parseActionCardType(cardInfo.cardtype);
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
        image: getFandomImageUrl(fandomFilenameOverrides[cardInfo.id] ?? `${cardInfo.name} ${actionType.charAt(0).toUpperCase()}${actionType.slice(1)} Card.png`),
      } satisfies ActionCardInfo),
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

export default defineEventHandler(async () => {
  const characterCardData = await getCharacterCardData();
  writeData("misc/character-cards", Object.fromEntries(characterCardData.map(card => [card.id, card])));
  const actionCardData = await getActionCardData();
  writeData("misc/action-cards", Object.fromEntries(actionCardData.map(card => [card.id, card])));

  const versionSet = new Set<string>();
  [...characterCardData, ...actionCardData].forEach((card) => {
    versionSet.add(card.gameVersion);
  });
  const versionIds = Array.from(versionSet).sort().reverse().filter(v => v.localeCompare("3.7") >= 0);
  const versionData = getVersionData(versionIds);
  writeData("misc/game-versions", Object.fromEntries(versionData.map(v => [v.id, v])));

  return responseOk();
});
