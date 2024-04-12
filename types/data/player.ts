import { z } from "zod";

export const ZPlayerId = z.coerce.string().regex(/^\w{16}$/);
export const ZPlayerUid = z.coerce.string().regex(/^\d{9}$/);
export const ZPlayerNickname = z.coerce.string().trim().min(1);

export const ZPlayer = z.object({
  id: ZPlayerId,
  uid: ZPlayerUid,
  uniqueName: ZPlayerNickname,
  aliases: ZPlayerNickname.array(),
  ignored: z.boolean().optional(),
}).strip();
export type Player = z.infer<typeof ZPlayer>;

export const ZPlayerSaveParams = ZPlayer.partial({ id: true }).strip();
export type PlayerSaveParams = z.infer<typeof ZPlayerSaveParams>;

export const ZPlayerAddAliasParams = ZPlayer.pick({ id: true }).extend({
  alias: ZPlayerNickname,
}).strip();
export type PlayerAddAliasParams = z.infer<typeof ZPlayerAddAliasParams>;

export const ZPlayerCreateParams = ZPlayer.pick({
  uid: true,
  uniqueName: true,
}).strip();

export const ZRanks = z.object({
  id: z.coerce.string().trim(),
  ranks: z.object({
    rank: z.number(),
    nickname: ZPlayerNickname,
    uid: ZPlayerUid,
    score: z.number(),
  }).array(),
}).strip();
