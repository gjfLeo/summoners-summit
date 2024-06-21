import { z } from "zod";
import { ZLocales } from "./locales";
import { ZGameVersionId } from "./game-version";
import { ZPlayerId, ZPlayerNickname } from "./player";
import { ZBan } from "./game";
import { ZGameId, ZMatchId, ZTournamentId } from "./ids";

export const ZTournamentType = z.object({
  value: z.string(),
  level: z.enum(["A", "B", "C"]).optional(),
}).strip();

export const ZTournamentRules = z.object({
  numGames: z.number(),
  mode: z.enum(["duel", "conquest", "characterConquest"]),

  // 禁用角色（每名选手赛前禁用X名角色）
  banCharacters: z.object({
    num: z.number().positive(),
  }).optional(),

  // 预选阵容（每名选手赛前需要提交X套阵容，至少包含Y名角色）
  submitTeams: z.object({
    num: z.number(),
    numCharactersRequired: z.number().optional(),
    // 预选牌组（每名选手赛前需要提交牌组，每套预选阵容只能提交1套/最多提交X套对应牌组）
    submitDecks: z.object({
      maxNumForEachTeam: z.number().optional(),
      maxNumInTotal: z.number().optional(),
    }).optional(),
    // 禁用阵容（每名选手赛前禁用对手提交的X套阵容）
    banTeams: z.object({
      num: z.number(),
    }).optional(),
  }).optional(),
}).strip();

export const ZTournamentPart = z.object({
  _key: z.number().optional(),
  name: z.record(ZLocales, z.string().trim()),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  matchIds: ZMatchId.array(),
}).strip();

export const ZTournamentStage = z.object({
  _key: z.number().optional(),
  name: z.record(ZLocales, z.string().trim()),
  rules: ZTournamentRules.optional(),
  parts: ZTournamentPart.array(),
}).strip();

export const ZTournament = z.object({
  id: z.string(),
  name: z.record(ZLocales, z.string().trim()),
  gameVersion: ZGameVersionId,
  type: z.string(),
  stages: ZTournamentStage.array(),
}).strip();

export const ZTournamentDetail = ZTournament.extend({
  champion: z.object({
    playerId: ZPlayerId,
    nickname: ZPlayerNickname,
  }).optional(),
  dateRange: z.object({
    start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  }),
}).strip();

export const ZTournamentDetailBrief = ZTournamentDetail.omit({
  stages: true,
}).strip();

export const ZMatch = z.object({
  id: ZMatchId,
  tournamentId: ZTournamentId,
  isFinal: z.boolean().optional(),
  playerA: z.object({
    playerId: ZPlayerId,
    nickname: ZPlayerNickname,
  }),
  playerB: z.object({
    playerId: ZPlayerId,
    nickname: ZPlayerNickname,
  }),
  winner: z.enum(["A", "B", "DRAW"]).optional(),
  bans: ZBan.array().optional(),
  gameIds: ZGameId.array(),
  video: z.string().optional(),
}).strip();

export const ZMatchDetail = ZMatch.extend({
  gameVersion: ZGameVersionId,
  winner: z.enum(["A", "B", "DRAW"]),
});

export type TournamentType = z.infer<typeof ZTournamentType>;
export type Tournament = z.infer<typeof ZTournament>;
export type TournamentDetail = z.infer<typeof ZTournamentDetail>;
export type TournamentDetailBrief = z.infer<typeof ZTournamentDetailBrief>;
export type Match = z.infer<typeof ZMatch>;
export type MatchDetail = z.infer<typeof ZMatchDetail>;
export type TournamentRules = z.infer<typeof ZTournamentRules>;
export type TournamentPart = z.infer<typeof ZTournamentPart>;
export type TournamentStage = z.infer<typeof ZTournamentStage>;
