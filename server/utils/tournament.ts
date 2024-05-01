import type { z } from "zod";
import { ZTournament } from "~/types/data";
import type { Tournament, TournamentId, TournamentR } from "~/types/data";

export function getTournament(tournamentId: TournamentId): Tournament | undefined {
  return ZTournament.optional().parse(readData<Tournament>(`tournaments/${tournamentId}`));
}

function fillTournamentR(tournament: Tournament): TournamentR {
  const firstStage = tournament.stages.length ? tournament.stages[0] : undefined;
  const lastStage = tournament.stages.length ? tournament.stages[tournament.stages.length - 1] : undefined;
  const firstPart = firstStage?.parts.length ? firstStage.parts[0] : undefined;
  const lastPart = lastStage?.parts.length ? lastStage.parts[lastStage.parts.length - 1] : undefined;
  const matches = tournament.stages
    .flatMap(stage => stage.parts)
    .flatMap(part => part.matchIds)
    .map(matchId => getMatch(matchId)!);
  const final = matches.find(match => match.isFinal);
  const champion = final ? final.winner === "A" ? final.playerA : final.winner === "B" ? final.playerB : undefined : undefined;
  return {
    ...tournament,
    dateRange: {
      start: firstPart?.date,
      end: lastPart?.date,
    },
    champion,
  };
}

export function getTournamentR(tournamentId: TournamentId): TournamentR | undefined {
  const tournament = getTournament(tournamentId);
  return tournament ? fillTournamentR(tournament) : undefined;
}

export function getTournamentList(): TournamentR[] {
  return ZTournament.array().parse(readDataList<Tournament>("tournaments")).map(fillTournamentR);
}

export const ZTournamentSaveParams = ZTournament.partial({
  id: true,
  stages: true,
});
type TournamentSaveParams = z.infer<typeof ZTournamentSaveParams>;
export function saveTournament(params: TournamentSaveParams) {
  const tournament = {
    ...params,
    id: params.id || hash(params.gameVersion + params.name),
    stages: params.stages ?? [],
  };

  writeData(`tournaments/${tournament.id}`, tournament);

  return tournament.id;
}
