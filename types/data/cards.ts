import { z } from "zod";

export const ZCardId = z.coerce.string()/* .brand<"CardId">() */;
export const ZCardType = z.enum(["character", "action"]);
export const ZCharacterElement = z.enum(["cryo", "hydro", "pyro", "electro", "anemo", "geo", "dendro"]);
export const ZActionCardType = z.enum(["equipment", "support", "event"]);

const ZCardInfoBase = z.object({
  id: ZCardId,
  name: z.record(ZLocales, z.string()),
  shareId: z.number(),
  type: ZCardType,
  gameVersion: ZGameVersionId,
}).strip();

export const ZCharacterCardInfo = ZCardInfoBase.extend({
  type: z.literal(ZCardType.enum.character),
  element: ZCharacterElement,
}).strip();
export type CharacterCardInfo = z.infer<typeof ZCharacterCardInfo>;

export const ZActionCardInfo = ZCardInfoBase.extend({
  type: z.literal(ZCardType.enum.action),
  actionType: ZActionCardType,
}).strip();
export type ActionCardInfo = z.infer<typeof ZActionCardInfo>;

export const ZCardInfo = z.union([ZCharacterCardInfo, ZActionCardInfo]);
export type CardInfo = z.infer<typeof ZCardInfo>;
