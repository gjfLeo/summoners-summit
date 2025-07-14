import { z } from "zod";
import { ZCardId } from "./base";

export const ZDeckCode = z.string()
  .length(68, { error: "牌组分享码长度必须为68个字符" })
  .pipe(z.preprocess(toBase64, z.base64({ error: "牌组分享码必须是有效的base64编码" })));
export const ZDeckTeamId = z.string()
  .regex(/^\d{4}-\d{4}-\d{4}$/)
  .transform((teamId: string) => teamId.split("-").sort().join("-"));
export type DeckCode = z.infer<typeof ZDeckCode>;
export type DeckTeamId = z.infer<typeof ZDeckTeamId>;

export const ZDeckCards = z.object({
  characterCards: ZCardId.array().max(3),
  actionCards: ZCardId.array().max(30),
});
export type DeckCards = z.infer<typeof ZDeckCards>;
