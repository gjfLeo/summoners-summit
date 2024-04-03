import { z } from "zod";
import { ZLocales } from "./locales";

export const ZCardType = z.enum(["character", "action"]);

export const ZCardInfo = z.object({
  id: z.string().brand("CardId"),
  name: z.record(ZLocales, z.string()),
  shareId: z.number(),
  type: ZCardType,
});
export type CardInfo = z.infer<typeof ZCardInfo>;
