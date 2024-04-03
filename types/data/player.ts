import { z } from "zod";

export const ZPlayer = z.object({
  id: z.coerce.string().regex(/^\w{16}$/).brand("PlayerId"),
  uniqueName: z.string().trim(),
  aliases: z.coerce.string().trim().min(1).array().optional(),
  uid: z.coerce.string().regex(/^\d{9}$/).optional(),
  ignored: z.boolean().optional(),
}).strip();
export type Player = z.infer<typeof ZPlayer>;

export const ZSavePlayerParams = ZPlayer.partial({ id: true }).strip();
export type SavePlayerParams = z.infer<typeof ZSavePlayerParams>;

export const ZPlayerAddAliasParams = ZPlayer.pick({ uniqueName: true }).extend({
  alias: z.coerce.string().trim().min(1),
}).strip();
export type PlayerAddAliasParams = z.infer<typeof ZPlayerAddAliasParams>;
