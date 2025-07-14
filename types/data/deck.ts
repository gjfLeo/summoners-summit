import { z } from "zod";
import { ZCardId } from "./base";

export const ZDeckCode = z.union([z.base64().length(68), z.base64url().length(68)])
  .transform(s => s.replace(/-/g, "+").replace(/_/g, "/"));
export const ZDeckTeamId = z.string().regex(/^\d{4}-\d{4}-\d{4}$/);
export type DeckCode = z.infer<typeof ZDeckCode>;
export type DeckTeamId = z.infer<typeof ZDeckTeamId>;

export const ZDeckCards = z.object({
  characterCards: ZCardId.array().max(3),
  actionCards: ZCardId.array().max(30),
});
export type DeckCards = z.infer<typeof ZDeckCards>;
