import { z } from "zod";

export const ZPlayer = z.object({
  id: z.coerce.string().regex(/^\w{16}$/),
  uniqueName: z.string(),
  aliases: z.coerce.string().array().optional(),
  uid: z.coerce.string().regex(/^\d{9}$/).optional(),
}).strip();
export type Player = z.infer<typeof ZPlayer>;

export const ZSavePlayerParams = ZPlayer.partial({ id: true }).strip();
export type SavePlayerParams = z.infer<typeof ZSavePlayerParams>;
