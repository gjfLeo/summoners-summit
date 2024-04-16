import { z } from "zod";

export const ZPlayerId = z.coerce.string().regex(/^\w{16}$/);
export const ZPlayerUid = z.coerce.string().regex(/^\d{9}$/);
export const ZPlayerNickname = z.coerce.string().trim().min(1);

export const ZPlayer = z.object({
  id: ZPlayerId,
  uids: ZPlayerUid.array(),
  uniqueName: ZPlayerNickname,
  aliases: ZPlayerNickname.array(),
  ignored: z.boolean().optional(),
}).strip();
export type Player = z.infer<typeof ZPlayer>;

export const ZRanks = z.object({
  id: z.coerce.string().trim(),
  ranks: z.object({
    rank: z.coerce.number(),
    nickname: ZPlayerNickname,
    uid: ZPlayerUid,
    score: z.coerce.number(),
  }).array(),
}).strip();
export type Ranks = z.infer<typeof ZRanks>;
