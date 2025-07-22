import type { z } from "zod";
import type { TournamentDetail, TournamentId } from "~~/shared/types";
import { getStorageGameRecord } from "./game";
import { getStorageMatchList } from "./match";
import { defineRecordStorage } from "./storage";

const tournamentStorage = defineRecordStorage("tournaments", ZTournament);
export const getStorageTournament = tournamentStorage.get;
export const getStorageTournamentList = tournamentStorage.getList;
export const getStorageTournamentRecord = tournamentStorage.getRecord;
export const clearTournamentCache = tournamentStorage.clearCache;

export async function getTournamentDetailBriefList(): Promise<TournamentDetailBrief[]> {
  const tournaments = await getStorageTournamentList();
  const list: TournamentDetailBrief[] = [];
  for (const tournament of tournaments) {
    const detail = await fillStorageTournamentDetail(tournament);
    list.push(ZTournamentDetailBrief.parse(detail));
  }
  return list;
}

export async function getStorageTournamentDetail(tournamentId: TournamentId): Promise<TournamentDetail | undefined> {
  const tournament = await getStorageTournament(tournamentId);
  if (!tournament) return;
  return await fillStorageTournamentDetail(tournament);
}

async function fillStorageTournamentDetail(tournament: Tournament): Promise<TournamentDetail> {
  return {
    ...tournament,
    dateRange: getTournamentDateRange(tournament),
    champion: await getTournamentChampion(tournament),
  };
}

function getTournamentDateRange(tournament: Tournament): TournamentDetail["dateRange"] {
  const firstStage = tournament.stages.length ? tournament.stages[0] : undefined;
  const lastStage = tournament.stages.length ? tournament.stages[tournament.stages.length - 1] : undefined;
  const firstPart = firstStage?.parts.length ? firstStage.parts[0] : undefined;
  const lastPart = lastStage?.parts.length ? lastStage.parts[lastStage.parts.length - 1] : undefined;
  return {
    start: firstPart?.date,
    end: lastPart?.date,
  };
}

async function getTournamentChampion(tournament: Tournament): Promise<TournamentDetail["champion"] | undefined> {
  const matchIds = tournament.stages.toReversed()
    .flatMap(stage => stage.parts.toReversed())
    .flatMap(part => part.matchIds.toReversed());
  const matches = await getStorageMatchList(matchIds);
  for (const match of matches) {
    if (match && match.isFinal) {
      const games = await getStorageGameRecord(match.gameIds);
      const winner = getMatchWinner(match, games);
      switch (winner) {
        case "A": return match.playerA;
        case "B": return match.playerB;
        default: return undefined;
      }
    }
  }
  return undefined;
}

// ----------------------------------------------------------------------------

/** @deprecated */
export function getTournament(tournamentId: TournamentId): Tournament | undefined {
  return ZTournament.optional().parse(readData<Tournament>(`tournaments/${tournamentId}`));
}

// ----------------------------------------------------------------------------

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

  // TODO await
  clearTournamentCache();
  return tournament.id;
}
