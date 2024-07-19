import { z } from "zod";
import { ZGameVersionId } from "../data";
import type { CardId, DeckTeamId } from "../data";

export const ZGetTeamStatsParams = z.object({
  gameVersion: ZGameVersionId,
}).strip();
export type GetTeamStatsParams = z.infer<typeof ZGetTeamStatsParams>;

export interface TeamStats {
  teamId: DeckTeamId;
  games: number;
  gamesWin: number;
  gamesStarter: number;
  gamesStarterWin: number;
  gamesFollower: number;
  gamesFollowerWin: number;
  gamesMirror: number;
  banned: number;
}

export const ZGetTeamMatchupsParams = z.object({
  gameVersion: ZGameVersionId,
}).strip();
export type GetTeamMatchupsParams = z.infer<typeof ZGetTeamMatchupsParams>;

export interface TeamMatchups {
  teamId: DeckTeamId;
  opponents: {
    [opponentTeamId: DeckTeamId]: {
      numGames: number;
      numGamesWin: number;
    };
  };
  overall: {
    numGames: number;
    numGamesWin: number;
  };
};

export interface CharacterCardStats {
  cardId: CardId;
  numGames: number;
  numGamesWin: number;
  numBanned: number;
}

export interface ActionCardStats {
  cardId: CardId;
  numGames: number;
  numGamesWin: number;
  numPicked: number;
  numPickedWin: number;
}
