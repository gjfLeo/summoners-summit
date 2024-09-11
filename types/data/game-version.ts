import { z } from "zod";
import { ZGameVersionId, ZLocales, ZSeasonPhraseId } from "./base";

export const ZSeasonPhrase = z.object({
  id: ZSeasonPhraseId,
  gameVersions: ZGameVersionId.array(),
  cardBackName: z.record(ZLocales, z.string()).optional(),
  cardBackDescription: z.record(ZLocales, z.string()).optional(),
}).strip();
export type SeasonPhrase = z.infer<typeof ZSeasonPhrase>;

export const ZGameVersion = z.object({
  id: ZGameVersionId,
  seasonPhrase: ZSeasonPhraseId,
}).strip();
export type GameVersion = z.infer<typeof ZGameVersion>;

export const ZGameVersionData = z.record(ZGameVersionId, ZGameVersion);
