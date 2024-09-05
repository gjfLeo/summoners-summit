import { z } from "zod";

export const ZGameId = z.coerce.string().regex(/^\w{16}\d{4}$/);
export type GameId = z.infer<typeof ZGameId>;

export const ZMatchId = z.coerce.string().regex(/^\w{16}\d{2}$/);
export type MatchId = z.infer<typeof ZMatchId>;

export const ZTournamentId = z.coerce.string().regex(/^\w{16}$/);
export type TournamentId = z.infer<typeof ZTournamentId>;

export const ZLocales = z.enum(["zh", "en"]);
export type Locales = z.infer<typeof ZLocales>;

export const ZRegions = z.enum(["CN", "Atlantic", "Pacific"]);
export type Region = z.infer<typeof ZRegions>;

export const ZGameVersionId = z.string().regex(/^\d\.\d$/);
export type GameVersionId = z.infer<typeof ZGameVersionId>;

export const ZSeasonPhraseId = z.string().regex(/^\d\.\d$/);
export type SeasonPhraseId = z.infer<typeof ZSeasonPhraseId>;

export const ZCardId = z.coerce.string();
export type CardId = z.infer<typeof ZCardId>;
