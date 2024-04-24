import { z } from "zod";
import { ZLocales } from "./locales";
import { ZGameVersionId } from "./game-version";
import { ZPlayerId, ZPlayerNickname } from "./player";
import { ZDeckCharacters, ZDeckId } from "./deck";

export const ZTournamentId = z.coerce.string().regex(/^\w{16}$/);
export const ZMatchId = z.coerce.string().regex(/^\w{16}\d{2}$/);
export const ZGameId = z.coerce.string().regex(/^\w{16}\d{4}$/);

export const ZTournamentRules = z.object({
  numDecks: z.number(),
  numDecksBanned: z.number().optional(),
  numCharactersBanned: z.number().optional(),
  numCharactersRequired: z.number().optional(),
  mode: z.enum(["duel", "conquest"]),
  numGames: z.number(),
  extra: z.tuple([z.string(), z.string()]).array().optional(),
}).strip();

export const ZTournamentPart = z.object({
  // name: z.record(ZLocales, z.string().trim()).optional(),
  date: z.date(),
  matchIds: ZMatchId.array(),
}).strip();

export const ZTournamentStage = z.object({
  name: z.record(ZLocales, z.string().trim()),
  rules: ZTournamentRules.optional(),
  parts: ZTournamentPart.array(),
}).strip();

export const ZTournament = z.object({
  id: z.string(),
  name: z.record(ZLocales, z.string().trim()),
  gameVersion: ZGameVersionId,
  stages: ZTournamentStage.array(),
}).strip();

export const ZTournamentR = ZTournament.extend({
  champion: z.object({
    playerId: ZPlayerId.optional(),
    nickname: ZPlayerNickname,
  }).optional(),
  dateRange: z.object({
    start: z.date().optional(),
    end: z.date().optional(),
  }),
}).strip();

export const ZMatch = z.object({
  id: ZMatchId,
  tournamentId: ZTournamentId,
  isFinal: z.boolean().optional(),

  video: z.string().optional(),
  playerA: z.object({
    playerId: ZPlayerId.optional(),
    nickname: ZPlayerNickname,
  }),
  playerB: z.object({
    playerId: ZPlayerId.optional(),
    nickname: ZPlayerNickname,
  }),
  winner: z.enum(["A", "B", "DRAW"]).optional(),
  gameIds: ZGameId.array(),
}).strip();

export const ZMatchR = ZMatch.extend({
  gameVersion: ZGameVersionId,
  winner: z.enum(["A", "B", "DRAW"]),
});

export const ZGame = z.object({
  id: ZGameId,
  matchId: ZMatchId,
  playerADeck: z.object({
    characters: ZDeckCharacters,
    deck: ZDeckId.optional(),
  }),
  playerBDeck: z.object({
    characters: ZDeckCharacters,
    deck: ZDeckId.optional(),
  }),
  winner: z.enum(["A", "B", "DRAW-W", "DRAW-L"]).optional(),
  starter: z.enum(["A", "B"]).optional(),
});

export const ZGameR = ZGame.extend({
  gameVersion: ZGameVersionId,
  tournamentId: ZTournamentId,
  playerA: z.object({
    playerId: ZPlayerId.optional(),
    nickname: ZPlayerNickname,
  }),
  playerB: z.object({
    playerId: ZPlayerId.optional(),
    nickname: ZPlayerNickname,
  }),
});

export type GameId = z.infer<typeof ZGameId>;
export type MatchId = z.infer<typeof ZMatchId>;
export type TournamentId = z.infer<typeof ZTournamentId>;
export type Tournament = z.infer<typeof ZTournament>;
export type TournamentR = z.infer<typeof ZTournamentR>;
export type Match = z.infer<typeof ZMatch>;
export type MatchR = z.infer<typeof ZMatchR>;
export type Game = z.infer<typeof ZGame>;
export type GameR = z.infer<typeof ZGameR>;
export type TournamentRules = z.infer<typeof ZTournamentRules>;
export type TournamentPart = z.infer<typeof ZTournamentPart>;
export type TournamentStage = z.infer<typeof ZTournamentStage>;
