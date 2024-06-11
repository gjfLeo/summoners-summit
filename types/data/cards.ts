import { z } from "zod";
import { ZLocales } from "./locales";
import { ZGameVersionId } from "./game-version";

export const ZCardId = z.coerce.string()/* .brand<"CardId">() */;
export type CardId = z.infer<typeof ZCardId>;

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

export const ZActionCardInfo = ZCardInfoBase.extend({
  type: z.literal(ZCardType.enum.action),
  actionType: ZActionCardType,
}).strip();

export const ZCardInfo = z.union([ZCharacterCardInfo, ZActionCardInfo]);

export type CharacterCardInfo = z.infer<typeof ZCharacterCardInfo>;
export type ActionCardInfo = z.infer<typeof ZActionCardInfo>;
export type CardInfo = z.infer<typeof ZCardInfo>;
