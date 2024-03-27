import { z } from "zod";

export const ZPlayer = z.object({
  uid: z.coerce.string().regex(/^\d{9}$/).optional(),
  uniqueName: z.string(),
  hashId: z.coerce.string().regex(/^_\w{16}$/),
}).strip();
export type Player = z.infer<typeof ZPlayer>;

export const ZPlayerInput = ZPlayer.omit({ hashId: true }).strip();
export type PlayerInput = z.infer<typeof ZPlayerInput>;
