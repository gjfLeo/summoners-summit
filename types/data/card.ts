import { z } from "zod";
import { ZCardId, ZGameVersionId, ZLocales } from "./base";

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
  image: z.string(),
  avatar: z.string(),
}).strip();

export const ZActionCardInfo = ZCardInfoBase.extend({
  type: z.literal(ZCardType.enum.action),
  actionType: ZActionCardType,
  image: z.string(),
}).strip();

export const ZCardInfo = z.union([ZCharacterCardInfo, ZActionCardInfo]);

export type CharacterCardInfo = z.infer<typeof ZCharacterCardInfo>;
export type ActionCardInfo = z.infer<typeof ZActionCardInfo>;
export type CardInfo = z.infer<typeof ZCardInfo>;
