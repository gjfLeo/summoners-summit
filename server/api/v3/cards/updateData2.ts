import crypto from "node:crypto";
import { z } from "zod";
import { ZActionCardInfo, ZCardId, ZSeasonPhrase, ZSeasonPhraseId } from "~/types";
import type { ActionCardInfo, CharacterCardInfo, GameVersionId } from "~/types";

const fandomFilenameOverrides: Record<number, string> = {
  212111: "Hear Me — Let Us Raise the Chalice of Love! Equipment Card.png",
  321024: "Scions of the Canopy Support Card.png",
  321025: "People of the Springs Support Card.png",
  321026: "Flower-Feather Clan Support Card.png",
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

async function fetchDimBreathData(path: string) {
  const res = await fetch(`https://gitlab.com/Dimbreath/AnimeGameData/-/raw/master/${path}`);
  return await res.json();
}

const ZRawCardType = z.enum([
  "GCG_CARD_MODIFY",
  "GCG_CARD_ASSIST",
  "GCG_CARD_EVENT",
  "GCG_CARD_STATE",
  "GCG_CARD_ONSTAGE",
  "GCG_CARD_SUMMON",
]);
const ZRawCardTag = z.string();
const ZRawActionCard = z.object({
  id: z.number(),

  cardType: ZRawCardType,
  tagList: ZRawCardTag.array().transform(tags => tags.filter(tag => tag !== "GCG_TAG_NONE")),

  isHidden: z.boolean(),
  isCanObtain: z.boolean(),

  nameTextMapHash: z.number(),
  descTextMapHash: z.number(),
  descOnTableTextMapHash: z.number(),
});

async function getShareIdData() {
  const rawData: Record<string, any>[] = await fetchDimBreathData("ExcelBinOutput/GCGDeckCardExcelConfigData.json");
  const shareIdKey = Object.entries(rawData[0])
    .find(([key, value]) => key.match(/^[A-Z]{11}$/) && value === 1)
    ?.[0];
  console.log(`shareIdKey: ${shareIdKey}`);
  if (!shareIdKey) {
    throw new Error("Failed to find shareId key");
  }
  return Object.fromEntries(rawData.map(item => [item.id as number, item[shareIdKey] as number]));
}
type ShareIdData = Awaited<ReturnType<typeof getShareIdData>>;

async function getTextMapData() {
  const chs = await fetch("https://gitlab.com/Dimbreath/AnimeGameData/-/raw/master/TextMap/TextMapCHS.json");
  const chsJson = await chs.json() as Record<string, string>;
  const en = await fetch("https://gitlab.com/Dimbreath/AnimeGameData/-/raw/master/TextMap/TextMapEN.json");
  const enJson = await en.json() as Record<string, string>;

  return Object.fromEntries(
    Object.entries(chsJson)
      .filter(([_key, zh]) => {
        return zh.length <= 20;
      })
      .map(([key, zh]) => {
        const en = enJson[key];
        return [key, { zh, en }];
      }),
  );
  // return {
  //   zh: chsJson,
  //   en: enJson,
  // };
}
type TextMapData = Awaited<ReturnType<typeof getTextMapData>>;

async function getCharacterCardData(textMapData: TextMapData, shareIdData: ShareIdData) {
  const rawData: Record<string, any>[] = await fetchDimBreathData("ExcelBinOutput/GCGCharExcelConfigData.json");
  return [] as Partial<CharacterCardInfo>[];
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

async function getActionCardData(textMapData: TextMapData, shareIdData: ShareIdData) {
  const rawData: Record<string, any>[] = await fetchDimBreathData("ExcelBinOutput/GCGCardExcelConfigData.json");

  const ignoredKeys = [
    "skillList",
    "chooseTargetType",
    "chooseTargetList",
    "costList",

    "buffIconHash",
    "hintType",
    "hintValue",
    "triggerSummonFullHintNum",
    "tokenToShow",
    "tokenToShowIconType",
    "changeToWhichSpecialView",
    "changeToWhichSpecialViewTokenNum",
    "stateBuffType",
    "dvAdjustJsonList",
    "persistEffectConstraintToken",
    "persistEffectConstraintSkillIdList",
    "persistEffectType",
    "tokenToShowTextId",
  ];

  Object.keys(rawData[0])
    .filter(key => key.match(/^[A-Z]{11}$/))
    .forEach((key) => {
      ignoredKeys.push(key);
    });

  const cardList = rawData
    .map((card) => {
      for (const key in ignoredKeys) {
        delete card[ignoredKeys[key]];
      }
      return ZRawActionCard.parse(card);
    })
    .filter(card => card.isCanObtain && !card.isHidden)
    .filter(card => ["GCG_CARD_MODIFY", "GCG_CARD_ASSIST", "GCG_CARD_EVENT"].includes(card.cardType))
    .map((card) => {
      const name = textMapData[card.nameTextMapHash];
      if (!name || !name.zh || !name.en) {
        throw new Error(`Invalid nameTextMapHash: ${card.nameTextMapHash}, ${name}`);
      }
      const actionType = parseActionCardType(card.cardType);
      const fandomFileName = fandomFilenameOverrides[card.id]
        ?? `${name.en} ${actionType.charAt(0).toUpperCase()}${actionType.slice(1)} Card.png`;

      return ZActionCardInfo.parse({
        id: ZCardId.parse(card.id),
        name,
        shareId: shareIdData[card.id],
        type: "action",
        // gameVersion
        actionType,
        image: getFandomImageUrl(fandomFileName),
      });
    });

  return cardList;
}

function getVersionData(maxVersionId: string) {
  const seasonPhrases = z.record(ZSeasonPhraseId, ZSeasonPhrase).parse(readData("misc/season-phrases"));
  return Object.values(seasonPhrases)
    .flatMap((p) => {
      return p.gameVersions.map((v) => {
        return {
          id: v,
          seasonPhrase: p.id,
        };
      });
    })
    .filter(v => v.id.localeCompare(maxVersionId) <= 0);
  // return ZGameVersion.array().parse(
  //   versionIds.map((vId) => {
  //     const phrases = Object.values(seasonPhrases).find(p => p.gameVersions.includes(vId));
  //     return {
  //       id: vId,
  //       seasonPhrase: phrases?.id ?? "",
  //     };
  //   }),
  // );
}

export default defineEventHandler(async () => {
  const shareIdData = await getShareIdData();
  const textMapData = await getTextMapData();
  console.log(`textMapData: ${Object.entries(textMapData).length} entries fetched`);
  const characterCardData = await getCharacterCardData(textMapData, shareIdData);
  // writeData("misc/character-cards", Object.fromEntries(characterCardData.map(card => [card.id, card])));
  const actionCardData = await getActionCardData(textMapData, shareIdData);
  writeData("misc/action-cards", Object.fromEntries(actionCardData.map(card => [card.id, card])));

  const versionData = getVersionData("5.6");
  writeData("misc/game-versions", Object.fromEntries(versionData.map(v => [v.id, v])));

  return responseData({
    characterCards: Object.fromEntries(characterCardData.map(card => [card.id, card])),
    actionCardData: Object.fromEntries(actionCardData.map(card => [card.id, card])),
  });
});
