import { z } from "zod";
import { ZLocales } from "./locales";

export const ZGameVersionId = z.string().regex(/^\d\.\d$/)/* .brand("GameVersionId") */;
export const ZSeasonPhraseId = z.string().regex(/^\d\.\d$/)/* .brand("SeasonPhraseId") */;

export const ZSeasonPhrase = z.object({
  id: ZSeasonPhraseId,
  gameVersions: ZGameVersionId.array(),
  cardBackName: z.record(ZLocales, z.string()),
  cardBackDescription: z.record(ZLocales, z.string()),
}).strip();

export const ZGameVersion = z.object({
  id: ZGameVersionId,
  seasonPhrase: ZSeasonPhraseId,
}).strip();

export type GameVersionId = z.infer<typeof ZGameVersionId>;
export type SeasonPhraseId = z.infer<typeof ZSeasonPhraseId>;
export type SeasonPhrase = z.infer<typeof ZSeasonPhrase>;
export type GameVersion = z.infer<typeof ZGameVersion>;
