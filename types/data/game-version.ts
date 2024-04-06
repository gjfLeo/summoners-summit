import { z } from "zod";

export const ZGameVersionId = z.string().regex(/^\d\.\d$/)/* .brand("GameVersionId") */;
export const ZSeasonPhraseId = z.string().regex(/^\d\.\d$/)/* .brand("SeasonPhraseId") */;

export const ZSeasonPhrase = z.object({
  id: ZSeasonPhraseId,
  gameVersions: ZGameVersionId.array(),
  cardBackName: z.record(ZLocales, z.string()),
  cardBackDescription: z.record(ZLocales, z.string()),
}).strip();
export type SeasonPhrase = z.infer<typeof ZSeasonPhrase>;

export const ZGameVersion = z.object({
  id: ZGameVersionId,
  seasonPhrase: ZSeasonPhraseId,
}).strip();
export type GameVersion = z.infer<typeof ZGameVersion>;
