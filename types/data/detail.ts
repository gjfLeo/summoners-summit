import { z } from "zod";
import { ZGameVersionId, ZTournamentId } from "./base";
import { ZMatch } from "./match";
import { ZGame } from "./game";
import { ZTournament, ZTournamentPart, ZTournamentStage } from "./tournament";
import { ZPlayerId, ZPlayerNickname } from "./player";

export const ZGameDetail = ZGame.extend({
  gameVersion: ZGameVersionId,
  tournamentId: ZTournamentId,
  tournamentName: ZTournament.shape.name,
  stageIndex: z.number(),
  stageName: ZTournamentStage.shape.name,
  partIndex: z.number(),
  partName: ZTournamentPart.shape.name,
  matchIndex: z.number(),

  date: ZTournamentPart.shape.date,

  playerA: ZMatch.shape.playerA,
  playerB: ZMatch.shape.playerB,
  matchVideo: z.string().optional(),
});
export type GameDetail = z.infer<typeof ZGameDetail>;

export const ZMatchDetail = ZMatch.extend({
  tournamentName: ZTournament.shape.name,
  gameVersion: ZGameVersionId,
  stageName: ZTournamentStage.shape.name,
  partName: ZTournamentPart.shape.name,
  date: ZTournamentPart.shape.date,
  winner: z.enum(["A", "B", "DRAW"]),
});
export type MatchDetail = z.infer<typeof ZMatchDetail>;

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
export type TournamentDetail = z.infer<typeof ZTournamentDetail>;

export const ZTournamentDetailBrief = ZTournamentDetail.omit({
  stages: true,
}).strip();
export type TournamentDetailBrief = z.infer<typeof ZTournamentDetailBrief>;
