import crypto from "node:crypto";
import { z } from "zod";
import type { ActionCardInfo, CharacterCardInfo, GameVersionId } from "~/types";
import { ZActionCardInfo, ZCardId, ZCharacterCardInfo, ZGameVersion, ZSeasonPhrase, ZSeasonPhraseId } from "~/types";

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
  const characterCardData = characterCardInfos.flatMap<CharacterCardInfo>((cardInfo, i) => {
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
  });

  const manualCardData: CharacterCardInfo[] = [
    {
      id: ZCardId.parse(1610),
      name: {
        zh: "卡齐娜",
        en: "Kachina",
      },
      shareId: 461,
      type: "character",
      gameVersion: "5.5",
      element: "geo",
      image: getFandomImageUrl("Kachina Character Card.png"),
      avatar: getFandomImageUrl("Kachina TCG Avatar Icon.png"),
    },
    {
      id: ZCardId.parse(1710),
      name: {
        zh: "艾梅莉埃",
        en: "Emilie",
      },
      shareId: 462,
      type: "character",
      gameVersion: "5.5",
      element: "dendro",
      image: getFandomImageUrl("Emilie Character Card.png"),
      avatar: getFandomImageUrl("Emilie TCG Avatar Icon.png"),
    },
    {
      id: ZCardId.parse(1413),
      name: {
        zh: "赛索斯",
        en: "Sethos",
      },
      shareId: 469,
      type: "character",
      gameVersion: "5.6",
      element: "electro",
      image: getFandomImageUrl("Sethos Character Card.png"),
      avatar: getFandomImageUrl("Sethos TCG Avatar Icon.png"),
    },
    {
      id: ZCardId.parse(1611),
      name: {
        zh: "希诺宁",
        en: "Xilonen",
      },
      shareId: 470,
      type: "character",
      gameVersion: "5.6",
      element: "geo",
      image: getFandomImageUrl("Xilonen Character Card.png"),
      avatar: getFandomImageUrl("Xilonen TCG Avatar Icon.png"),
    },
  ];
  characterCardData.push(...manualCardData.map(card => ZCharacterCardInfo.parse(card)));

  characterCardData.sort((a, b) => Number(a.id) - Number(b.id));
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
  const actionCardData = actionCardInfos.flatMap<ActionCardInfo>((cardInfo, i) => {
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
  });

  const manualCardData: ActionCardInfo[] = [
    {
      id: ZCardId.parse(216101),
      name: {
        zh: "夜域赐礼·团结炉心",
        en: "Night Realm's Gift: Heart of Unity",
      },
      shareId: 463,
      type: "action",
      gameVersion: "5.5",
      actionType: "equipment",
      image: getFandomImageUrl("Night Realm's Gift: Heart of Unity Equipment Card.png"),
    },
    {
      id: ZCardId.parse(217101),
      name: {
        zh: "茉洁香迹",
        en: "Marcotte Sillage",
      },
      shareId: 464,
      type: "action",
      gameVersion: "5.5",
      actionType: "equipment",
      image: getFandomImageUrl("Marcotte Sillage Equipment Card.png"),
    },
    {
      id: ZCardId.parse(313007),
      name: {
        zh: "浪船",
        en: "Waverider",
      },
      shareId: 465,
      type: "action",
      gameVersion: "5.5",
      actionType: "equipment",
      image: getFandomImageUrl("Waverider Equipment Card.png"),
    },
    {
      id: ZCardId.parse(321027),
      name: {
        zh: "「烟谜主」",
        en: '"Masters of the Night-Wind"',
      },
      shareId: 466,
      type: "action",
      gameVersion: "5.5",
      actionType: "support",
      image: getFandomImageUrl("Masters of the Night-Wind Support Card.png"),
    },
    {
      id: ZCardId.parse(332044),
      name: {
        zh: "以极限之名",
        en: "In the Name of the Extreme",
      },
      shareId: 467,
      type: "action",
      gameVersion: "5.5",
      actionType: "event",
      image: getFandomImageUrl("In the Name of the Extreme Event Card.png"),
    },
    {
      id: ZCardId.parse(333020),
      name: {
        zh: "奇瑰之汤",
        en: "Mystique Soup",
      },
      shareId: 468,
      type: "action",
      gameVersion: "5.5",
      actionType: "event",
      image: getFandomImageUrl("Mystique Soup Event Card.png"),
    },
    {
      id: ZCardId.parse(214131),
      name: {
        zh: "巡日塔门书",
        en: "Pylon of the Sojourning Sun Temple",
      },
      shareId: 471,
      type: "action",
      gameVersion: "5.6",
      actionType: "equipment",
      image: getFandomImageUrl("Pylon of the Sojourning Sun Temple Equipment Card.png"),
    },
    {
      id: ZCardId.parse(216111),
      name: {
        zh: "丛山锻火驰行",
        en: "Tour of Tepeilhuitl",
      },
      shareId: 472,
      type: "action",
      gameVersion: "5.6",
      actionType: "equipment",
      image: getFandomImageUrl("Tour of Tepeilhuitl Equipment Card.png"),
    },
    {
      id: ZCardId.parse(217111),
      name: {
        zh: "雷电之翼",
        en: "Thunderwing",
      },
      shareId: 473,
      type: "action",
      gameVersion: "5.6",
      actionType: "equipment",
      image: getFandomImageUrl("Thunderwing Equipment Card.png"),
    },
    {
      id: ZCardId.parse(313008),
      name: {
        zh: "突角龙",
        en: "Tatankasaurus",
      },
      shareId: 474,
      type: "action",
      gameVersion: "5.6",
      actionType: "equipment",
      image: getFandomImageUrl("Tatankasaurus Equipment Card.png"),
    },
    {
      id: ZCardId.parse(321028),
      name: {
        zh: "「沃陆之邦」",
        en: '"Collective of Plenty"',
      },
      shareId: 475,
      type: "action",
      gameVersion: "5.6",
      actionType: "support",
      image: getFandomImageUrl("Collective of Plenty Support Card.png"),
    },
    {
      id: ZCardId.parse(332045),
      name: {
        zh: "困困冥想术",
        en: "Art of Sleepy Meditation",
      },
      shareId: 476,
      type: "action",
      gameVersion: "5.6",
      actionType: "event",
      image: getFandomImageUrl("Art of Sleepy Meditation Event Card.png"),
    },
    {
      id: ZCardId.parse(333027),
      name: {
        zh: "纵声欢唱",
        en: "Sing Your Heart Out",
      },
      shareId: 477,
      type: "action",
      gameVersion: "5.6",
      actionType: "event",
      image: getFandomImageUrl("Sing Your Heart Out Event Card.png"),
    },
  ];
  actionCardData.push(...manualCardData.map(card => ZActionCardInfo.parse(card)));

  actionCardData.sort((a, b) => Number(a.id) - Number(b.id));
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
