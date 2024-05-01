import { z } from "zod";
import { ZLocales } from "./locales";
import { ZGameVersionId } from "./game-version";
import { ZPlayerId, ZPlayerNickname } from "./player";
import { ZDeckCharacters, ZDeckId } from "./deck";

export const ZTournamentId = z.coerce.string().regex(/^\w{16}$/);
export const ZMatchId = z.coerce.string().regex(/^\w{16}\d{2}$/);
export const ZGameId = z.coerce.string().regex(/^\w{16}\d{4}$/);

export const ZTournamentType = z.object({
  value: z.string(),
  level: z.enum(["A", "B", "C"]).optional(),
}).strip();

export const ZTournamentRules = z.object({
  // 禁用角色（每名选手赛前禁用X名角色）
  // 预选阵容（每名选手赛前需要提交X套阵容，至少包含Y名角色）
  //   预选牌组（每名选手赛前需要提交牌组，每套预选阵容只能提交1套/最多提交X套对应牌组）
  //   禁用阵容（每名选手赛前禁用对手提交的X套阵容）
  // 获胜X局
  //   征服：获胜的牌组不能再次使用
  //   决斗：出场的牌组不能再次使用
  //   角色征服：获胜牌组包含的角色不能再次使用
  banCharacters: z.object({
    num: z.number().positive(),
  }).optional(),
  submitTeams: z.object({
    num: z.number(),
    numCharactersRequired: z.number().optional(),
    submitDecks: z.object({
      maxNumForEachTeam: z.number().optional(),
      maxNumInTotal: z.number().optional(),
    }).optional(),
    banTeams: z.object({
      num: z.number(),
    }).optional(),
  }).optional(),
  numGames: z.number(),
  mode: z.enum(["duel", "conquest", "character-conquest"]),
}).strip();

export const ZTournamentPart = z.object({
  // name: z.record(ZLocales, z.string().trim()).optional(),
  _key: z.number().optional(),
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

export const ZTournamentR = ZTournament.extend({
  champion: z.object({
    playerId: ZPlayerId.optional(),
    nickname: ZPlayerNickname,
  }).optional(),
  dateRange: z.object({
    start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
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
export type TournamentType = z.infer<typeof ZTournamentType>;
export type Tournament = z.infer<typeof ZTournament>;
export type TournamentR = z.infer<typeof ZTournamentR>;
export type Match = z.infer<typeof ZMatch>;
export type MatchR = z.infer<typeof ZMatchR>;
export type Game = z.infer<typeof ZGame>;
export type GameR = z.infer<typeof ZGameR>;
export type TournamentRules = z.infer<typeof ZTournamentRules>;
export type TournamentPart = z.infer<typeof ZTournamentPart>;
export type TournamentStage = z.infer<typeof ZTournamentStage>;
