import type { z } from "zod/v4";
import type { Tournament, TournamentDetail, TournamentDetailBrief, TournamentId } from "~/types";
import { ZTournament, ZTournamentDetailBrief } from "~/types";
import { getMatchDetail } from "./match";

export function getTournament(tournamentId: TournamentId): Tournament | undefined {
  return ZTournament.optional().parse(readData<Tournament>(`tournaments/${tournamentId}`));
}

export async function getStorageTournament(tournamentId: TournamentId): Promise<Tournament | undefined> {
  const tournaments = useStorage("assets:data:tournaments");
  const tournament = await tournaments.getItem(`${tournamentId}.json`);
  return tournament ? ZTournament.parse(tournament) : undefined;
}

export async function getTournamentList(): Promise<Tournament[]> {
  const tournaments = useStorage("assets:data:tournaments");
  return (await Promise.all((await tournaments.getKeys())
    .map(key => tournaments.getItem(key))))
    .map(t => ZTournament.parse(t));
}

export const ZTournamentSaveParams = ZTournament.partial({
  id: true,
  stages: true,
}).strip();
type TournamentSaveParams = z.infer<typeof ZTournamentSaveParams>;
export function saveTournament(params: TournamentSaveParams) {
  params.stages?.forEach((stage) => {
    delete stage._key;
    stage.parts.forEach((part) => {
      delete part._key;
    });
  });
  const tournament: Tournament = {
    ...params,
    id: params.id || hash(params.gameVersion + (params.name.zh ?? params.name.en)),
    stages: params.stages ?? [],
  };

  writeData(`tournaments/${tournament.id}`, ZTournament.parse(tournament));

  return tournament.id;
}

function fillTournamentDetail(tournament: Tournament): TournamentDetail {
  const firstStage = tournament.stages.length ? tournament.stages[0] : undefined;
  const lastStage = tournament.stages.length ? tournament.stages[tournament.stages.length - 1] : undefined;
  const firstPart = firstStage?.parts.length ? firstStage.parts[0] : undefined;
  const lastPart = lastStage?.parts.length ? lastStage.parts[lastStage.parts.length - 1] : undefined;
  const matches = tournament.stages
    .flatMap(stage => stage.parts)
    .flatMap(part => part.matchIds)
    .map(matchId => getMatchDetail(matchId)!);
  const final = matches.find(match => match.isFinal);
  const champion = final ? final.winner === "A" ? final.playerA : final.winner === "B" ? final.playerB : undefined : undefined;

  tournament.stages.forEach((stage, stageIndex) => {
    stage._key = stageIndex;
    stage.parts.forEach((part, partIndex) => {
      part._key = partIndex;
    });
  });
  return {
    ...tournament,
    dateRange: {
      start: firstPart?.date,
      end: lastPart?.date,
    },
    champion,
  };
}

export async function getTournamentDetailBriefList(): Promise<TournamentDetailBrief[]> {
  return (await getTournamentList())
    .map(fillTournamentDetail)
    .map(t => ZTournamentDetailBrief.parse(t));
}

export function getTournamentDetail(tournamentId: TournamentId): TournamentDetail | undefined {
  const tournament = getTournament(tournamentId);
  return tournament ? fillTournamentDetail(tournament) : undefined;
}

export async function getStorageTournamentList(): Promise<Tournament[]> {
  const tournaments = useStorage("assets:data:tournaments");
  return (await Promise.all((await tournaments.getKeys())
    .map(key => tournaments.getItem(key))))
    .map(t => ZTournament.parse(t));
}
