import { z } from "zod";

export const ZGameId = z.coerce.string().regex(/^\w{16}\d{4}$/);
export type GameId = z.infer<typeof ZGameId>;

export const ZMatchId = z.coerce.string().regex(/^\w{16}\d{2}$/);
export type MatchId = z.infer<typeof ZMatchId>;

export const ZTournamentId = z.coerce.string().regex(/^\w{16}$/);
export type TournamentId = z.infer<typeof ZTournamentId>;
