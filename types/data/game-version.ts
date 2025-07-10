import { z } from "zod/v4";
import { ZGameVersionId, ZLocales, ZSeasonPhraseId } from "./base";

export const ZSeasonPhrase = z.object({
  id: ZSeasonPhraseId,
  gameVersions: ZGameVersionId.array(),
  cardBackName: z.partialRecord(ZLocales, z.string()).optional(),
  cardBackDescription: z.partialRecord(ZLocales, z.string()).optional(),
}).strip();
export type SeasonPhrase = z.infer<typeof ZSeasonPhrase>;

export const ZGameVersion = z.object({
  id: ZGameVersionId,
  seasonPhrase: ZSeasonPhraseId,
}).strip();
export type GameVersion = z.infer<typeof ZGameVersion>;

export const ZGameVersionData = z.record(ZGameVersionId, ZGameVersion);
