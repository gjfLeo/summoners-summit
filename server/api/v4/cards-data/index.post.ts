import z from "zod";

defineRouteMeta({
  openAPI: {
    tags: ["Cards"],
    summary: "卡牌信息更新",
    parameters: [
      {
        name: "action",
        in: "query",
        required: true,
        schema: {
          type: "string",
          enum: ["update"],
        },
      },
    ],
  },
});

const zQuery = z.object({
  action: z.literal("update"),
});

const zGyData = z.array(
  z.object({
    id: z.number(),
    shareId: z.number().optional(),
    sinceVersion: z.string().optional(),
    obtainable: z.boolean().optional(),
    name: z.string(),
    englishName: z.string().optional(),
    tags: z.string().array(),
    cardFace: z.string().optional(),
    icon: z.string().optional(),
    category: z.enum(["characters", "action_cards"]),
    type: z.string().optional(),
  }),
);
type GyData = z.infer<typeof zGyData>;
async function fetchGyData(): Promise<GyData> {
  const res = await fetch("https://assets.gi-tcg.guyutongxue.site/api/v3/data");
  const data = await res.json();
  return zGyData.parse(data.filter((card: any) => card.category === "characters" || card.category === "action_cards"));
}

async function getCharacterCardData(gyData: GyData) {
  const cardList = gyData
    .filter(card => card.category === "characters")
    .filter(card => card.obtainable)
    .filter(card => card.shareId)
    .map<CharacterCardInfo>((card) => {
      const elementPrefix = "GCG_TAG_ELEMENT_";
      const element = card.tags
        .find(tag => tag.startsWith(elementPrefix))
        ?.substring(elementPrefix.length)
        .toLowerCase() as CharacterCardInfo["element"];
      if (!element) {
        throw new Error(`Invalid element for card ${card.id} ${card.name}`);
      }

      if (!card.englishName) {
        throw new Error(`Invalid english name for card ${card.id} ${card.name}`);
      }

      return {
        id: ZCardId.parse(card.id),
        name: { zh: card.name, en: card.englishName },
        shareId: card.shareId!,
        gameVersion: card.sinceVersion!.substring(1, 4),
        type: "character",
        element,
        image: `https://assets.gi-tcg.guyutongxue.site/assets/${card.cardFace}.webp`,
        avatar: `https://assets.gi-tcg.guyutongxue.site/assets/${card.icon}.webp`,
      };
    })
    .map(card => ZCharacterCardInfo.strict().parse(card));

  return cardList;
}

const actionTypeMap = {
  GCG_CARD_MODIFY: "equipment",
  GCG_CARD_ASSIST: "support",
  GCG_CARD_EVENT: "event",
} as const;

async function getActionCardData(gyData: GyData) {
  const cardList = gyData
    .filter(card => card.category === "action_cards")
    .filter(card => card.obtainable)
    .filter(card => card.shareId)
    .filter(card => card.type && card.type in actionTypeMap)
    .map<ActionCardInfo>((card) => {
      const actionType = actionTypeMap[card.type as keyof typeof actionTypeMap];

      if (!card.englishName) {
        throw new Error(`Invalid english name for card ${card.id} ${card.name}`);
      }

      return {
        id: ZCardId.parse(card.id),
        name: { zh: card.name, en: card.englishName },
        shareId: card.shareId!,
        gameVersion: card.sinceVersion!.substring(1, 4),
        type: "action",
        actionType,
        image: `https://assets.gi-tcg.guyutongxue.site/assets/${card.cardFace}.webp`,
      };
    })
    .map(card => ZActionCardInfo.strict().parse(card)); ;

  return cardList;
}

export default defineEventHandler(async (event) => {
  const { action } = await getValidatedQuery(event, zQuery.parse);
  if (action !== "update") {
    throw createError({ statusCode: 400, message: "Invalid action" });
  }

  const gyData = await fetchGyData();

  const characterCardData = await getCharacterCardData(gyData);
  const characterCards = Object.fromEntries(characterCardData.map(card => [card.id, card]));
  await writeDataV2("misc/character-cards", characterCards);

  const actionCardData = await getActionCardData(gyData);
  const actionCards = Object.fromEntries(actionCardData.map(card => [card.id, card]));
  await writeDataV2("misc/action-cards", actionCards);

  const maxGameVersionId = characterCardData.reduce(
    (max, card) => {
      return max.localeCompare(card.gameVersion) >= 0 ? max : card.gameVersion;
    },
    "3.6" as GameVersionId,
  );
  const seasonPhrasesRaw = await readDataV2("misc/season-phrases");
  const seasonPhrases = z.record(ZSeasonPhraseId, ZSeasonPhrase).parse(seasonPhrasesRaw);
  const versionData = Object.values(seasonPhrases)
    .flatMap((p) => {
      return p.gameVersions.map((v) => {
        return {
          id: v,
          seasonPhrase: p.id,
        };
      });
    })
    .filter(v => v.id.localeCompare(maxGameVersionId) <= 0)
    .sort((a, b) => b.id.localeCompare(a.id));
  const gameVersions = Object.fromEntries(versionData.map(v => [v.id, v]));
  await writeDataV2("misc/game-versions", gameVersions);

  return {};
});
