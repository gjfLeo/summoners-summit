import crypto from "node:crypto";
import { z } from "zod";
import { ZActionCardInfo, ZCardId, ZCharacterCardInfo, ZSeasonPhrase, ZSeasonPhraseId } from "~/types";
import type { ActionCardInfo, CharacterCardInfo, GameVersionId } from "~/types";
import type { CardVersionData } from "~/types/data/card-version";

async function getLatestCommit() {
  const res = await fetch("https://gitlab.com/api/v4/projects/Dimbreath%2fAnimeGameData/repository/commits");
  const commits = await res.json() as { id: string }[];
  return commits[0].id;
}

const fandomFilenameOverrides: Record<number, string> = {
  212111: "Hear Me — Let Us Raise the Chalice of Love! Equipment Card.png",
  321024: "Scions of the Canopy Support Card.png",
  321025: "People of the Springs Support Card.png",
  321026: "Flower-Feather Clan Support Card.png",
  321027: "Masters of the Night-Wind Support Card.png",
  321028: "Collective of Plenty Support Card.png",
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
  console.log(`Fetching ${path}...`);
  const res = await fetch(`https://gitlab.com/Dimbreath/AnimeGameData/-/raw/master/${path}`);
  console.log("Done");
  return await res.json();
}

const ZRawCardType = z.enum([
  "GCG_CARD_CHARACTER",
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

  isHidden: z.boolean().optional(),
  isCanObtain: z.boolean(),

  nameTextMapHash: z.number(),
  descTextMapHash: z.number(),
});

async function getShareIdData() {
  const rawData: Record<string, any>[] = await fetchDimBreathData("ExcelBinOutput/GCGDeckCardExcelConfigData.json");
  const shareIdKey = Object.entries(rawData[0])
    .find(([key, value]) => key.match(/^[A-Z]{11}$/) && value === 1)
    ?.[0];
  if (!shareIdKey) {
    throw new Error("Failed to find shareId key");
  }
  return Object.fromEntries(rawData.map(item => [item.id as number, item[shareIdKey] as number]));
}
type ShareIdData = Awaited<ReturnType<typeof getShareIdData>>;

async function getTextMapData() {
  const textMapZh: Record<string, string> = await fetchDimBreathData("TextMap/TextMapCHS.json");
  const textMapEn: Record<string, string> = await fetchDimBreathData("TextMap/TextMapEN.json");

  for (const key in textMapZh) {
    if (textMapZh[key] === "#{REALNAME[ID(1)|DELAYHANDLE(true)]}") {
      textMapZh[key] = textMapZh["59470483"];
    }
    if (textMapEn[key] === "#{REALNAME[ID(1)|DELAYHANDLE(true)]}") {
      textMapEn[key] = textMapEn["59470483"];
    }
  }

  return Object.fromEntries(
    Object.entries(textMapZh)
      .filter(([_key, zh]) => {
        return zh.length <= 15;
      })
      .map(([key, zh]) => {
        const en = textMapEn[key];
        return [key, { zh, en }];
      }),
  );
}
type TextMapData = Awaited<ReturnType<typeof getTextMapData>>;

const ignoredKeys = [
  "skillList",
  "chooseTargetType",
  "chooseTargetList",
  "costList",

  "descOnTableTextMapHash",
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

async function getCharacterCardData(textMapData: TextMapData, shareIdData: ShareIdData) {
  const rawData: Record<string, any>[] = await fetchDimBreathData("ExcelBinOutput/GCGCharExcelConfigData.json");

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
    .map((card) => {
      const name = textMapData[card.nameTextMapHash];
      if (!name || !name.zh || !name.en) {
        throw new Error(`Invalid nameTextMapHash: ${card.nameTextMapHash}, ${name}`);
      }
      // const actionType = parseActionCardType(card.cardType);
      const shareId = shareIdData[card.id];
      if (!shareId) {
        throw new Error(`ShareId not found for card ${card.id}`);
      }
      const elementPrefix = "GCG_TAG_ELEMENT_";
      const element = card.tagList
        .find(tag => tag.startsWith(elementPrefix))
        ?.substring(elementPrefix.length)
        .toLowerCase();

      return ZCharacterCardInfo.parse({
        id: ZCardId.parse(card.id),
        name,
        shareId,
        type: "character",
        element,
        image: getFandomImageUrl(`${name.en} Character Card.png`),
        avatar: getFandomImageUrl(`${name.en} TCG Avatar Icon.png`),
      });
    });

  return cardList;
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
    .filter(card => card.id !== 332047) // TODO 已废弃卡牌，寻找更好的判断方法
    .map((card) => {
      const name = textMapData[card.nameTextMapHash];
      if (!name || !name.zh || !name.en) {
        throw new Error(`Invalid nameTextMapHash: ${card.nameTextMapHash}, ${name}`);
      }
      const actionType = parseActionCardType(card.cardType);
      const fandomFileName = fandomFilenameOverrides[card.id]
        ?? `${name.en} ${actionType.charAt(0).toUpperCase()}${actionType.slice(1)} Card.png`;
      const shareId = shareIdData[card.id];
      if (!shareId) {
        throw new Error(`ShareId not found for card ${card.id}`);
      }

      return ZActionCardInfo.parse({
        id: ZCardId.parse(card.id),
        name,
        shareId,
        type: "action",
        // gameVersion
        actionType,
        image: getFandomImageUrl(fandomFileName),
      });
    });

  return cardList;
}

export default defineEventHandler(async () => {
  const cardVersionData = readData<CardVersionData>("misc/card-version", {});
  const latestCommitId = await getLatestCommit();
  const needUpdate = cardVersionData.latestCommitId !== latestCommitId;
  if (needUpdate) {
    const shareIdData = await getShareIdData();
    const textMapData = await getTextMapData();

    const characterCardData = await getCharacterCardData(textMapData, shareIdData);
    const characterCards = Object.fromEntries(characterCardData.map(card => [card.id, card]));
    writeData("misc/character-cards", characterCards);

    const actionCardData = await getActionCardData(textMapData, shareIdData);
    const actionCards = Object.fromEntries(actionCardData.map(card => [card.id, card]));
    writeData("misc/action-cards", actionCards);
  }
  writeData("misc/card-version", { latestCommitId });
  return responseData({ needUpdate });
});
