import { z } from "zod";
import { ZGameVersionId, ZLocales, ZMatchId } from "./base";

export const ZTournamentType = z.object({
  value: z.string(),
  level: z.enum(["A", "B", "C"]).optional(),
}).strip();
export type TournamentType = z.infer<typeof ZTournamentType>;

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
export type TournamentRules = z.infer<typeof ZTournamentRules>;

export const ZTournamentPart = z.object({
  _key: z.number().optional(),
  name: z.record(ZLocales, z.string().trim()),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  matchIds: ZMatchId.array(),
}).strip();
export type TournamentPart = z.infer<typeof ZTournamentPart>;

export const ZTournamentStage = z.object({
  _key: z.number().optional(),
  name: z.record(ZLocales, z.string().trim()),
  rules: ZTournamentRules.optional(),
  parts: ZTournamentPart.array(),
}).strip();
export type TournamentStage = z.infer<typeof ZTournamentStage>;

export const ZTournament = z.object({
  id: z.string(),
  name: z.record(ZLocales, z.string().trim()),
  gameVersion: ZGameVersionId,
  type: z.string(),
  stages: ZTournamentStage.array(),
}).strip();
export type Tournament = z.infer<typeof ZTournament>;
