import type { CardId, DeckCode, DeckTeamId, GameVersionId, GetAllTeamMatchupsParams, GetAllTeamStatsParams, TeamMatchups, TeamStats } from "~/types";
import { getMirroredGame } from "~/utils/match";
import { getActionCardCountRecord } from "./card";
import { getGameList, getStorageGameList } from "./game";
import { getMatchList } from "./match";

export function getTeamStatsRecords(params: GetAllTeamStatsParams): Record<DeckTeamId, TeamStats> {
  const { gameVersion } = params;

  const records: Record<DeckTeamId, TeamStats> = {};
  function getRecord(teamId: DeckTeamId): TeamStats {
    return records[teamId] ??= {
      teamId,
      games: 0,
      gamesWin: 0,
      gamesStarter: 0,
      gamesStarterWin: 0,
      gamesFollower: 0,
      gamesFollowerWin: 0,
      gamesMirror: 0,
      banned: 0,
      gamesWithDeck: 0,
      gamesWithDeckWin: 0,
    };
  }

  const games = getGameList()
    .filter(game => game.gameVersion === gameVersion)
    .filter(game => !game.isPrePatch)
    .flatMap(game => [game, getMirroredGame(game)]);

  games.forEach((game) => {
    const teamId = game.playerADeck.teamId;
    const record = getRecord(teamId);
    record.games++;
    if (game.starter === "A") {
      record.gamesStarter++;
    }
    if (game.starter === "B") {
      record.gamesFollower++;
    }
    if (game.winner === "A") {
      record.gamesWin++;
      if (game.starter === "A") {
        record.gamesStarterWin++;
      }
      if (game.starter === "B") {
        record.gamesFollowerWin++;
      }
    }
    if (game.playerBDeck.teamId === teamId) {
      record.gamesMirror++;
    }
    if (game.playerADeck.deckCode) {
      record.gamesWithDeck++;
      if (game.winner === "A") {
        record.gamesWithDeckWin++;
      }
    }
  });

  const matches = getMatchList()
    .filter(match => match.gameVersion === gameVersion)
    .filter(match => !match.isPrePatch);
  matches.flatMap(match => match.bans ?? [])
    .filter(ban => ban.banType === "team")
    .flatMap(ban => [ban.playerATeamId, ban.playerBTeamId])
    .forEach((teamId) => {
      const record = getRecord(teamId);
      record.banned++;
    });

  return records;
}

export function getTeamMatchupStats(params: GetAllTeamMatchupsParams) {
  const { gameVersion } = params;

  const games = getGameList()
    .filter(game => game.gameVersion === gameVersion)
    .filter(game => !game.isPrePatch);

  // 选择对局数最多的8个阵容
  const numGamesRecord: Record<DeckTeamId, number> = {};
  games.forEach((game) => {
    numGamesRecord[game.playerADeck.teamId] = (numGamesRecord[game.playerADeck.teamId] ?? 0) + 1;
    numGamesRecord[game.playerBDeck.teamId] = (numGamesRecord[game.playerBDeck.teamId] ?? 0) + 1;
  });
  const teams = Object.entries(numGamesRecord)
    .sort(([_teamIdA, numGamesA], [_teamIdB, numGamesB]) => {
      return numGamesB - numGamesA;
    })
    .slice(0, 8)
    .map(([teamId]) => teamId as DeckTeamId);

  const records: Record<DeckTeamId, TeamMatchups> = {};
  function getRecord(teamId: DeckTeamId, opponentTeamId: DeckTeamId): TeamMatchups {
    records[teamId] ??= {
      teamId,
      opponents: {},
      overall: { numGames: 0, numGamesWin: 0 },
    };
    records[teamId].opponents[opponentTeamId] ??= {
      numGames: 0,
      numGamesWin: 0,
    };
    return records[teamId];
  }

  games
    .filter(game => teams.includes(game.playerADeck.teamId) && teams.includes(game.playerBDeck.teamId))
    // .filter(game => game.playerADeck.teamId !== game.playerBDeck.teamId)
    .flatMap(game => [game, getMirroredGame(game)])
    .forEach((game) => {
      const teamAId = game.playerADeck.teamId;
      const teamBId = game.playerBDeck.teamId;
      const record = getRecord(teamAId, teamBId);
      record.overall.numGames++;
      record.opponents[teamBId].numGames++;
      if (game.winner === "A") {
        record.overall.numGamesWin++;
        record.opponents[teamBId].numGamesWin++;
      }
    });

  const matchupStats = Object.values(records).sort((a, b) => teams.indexOf(a.teamId) - teams.indexOf(b.teamId));

  return { teams, matchupStats };
}

/**
 * 计算胜率时，平局视为负
 */
export async function getTeamDecksStats({ gameVersion, teamId }: {
  teamId: DeckTeamId;
  gameVersion?: GameVersionId;
}) {
  let games = await getStorageGameList();
  if (gameVersion) {
    games = games.filter(g => g.gameVersion === gameVersion);
  }

  const decks: { deckCode: DeckCode; win: boolean }[] = [];
  games.forEach((game) => {
    for (const p of ["A", "B"] as const) {
      const deck = game[`player${p}Deck`];
      if (deck.deckCode && deck.teamId === teamId) {
        decks.push({
          deckCode: deck.deckCode,
          win: game.winner === p,
        });
      }
    }
  });

  const decksRecord: Record<DeckCode, {
    deckCode: DeckCode;
    numGames: number;
    numGamesWin: number;
    cardCountRecord: Record<CardId, number>;
  }> = {};
  decks.forEach((deck) => {
    const recordItem = decksRecord[deck.deckCode] ??= {
      deckCode: deck.deckCode,
      numGames: 0,
      numGamesWin: 0,
      cardCountRecord: getActionCardCountRecord(deck.deckCode),
    };
    recordItem.numGames++;
    if (deck.win) {
      recordItem.numGamesWin++;
    }
  });

  // 胜利对局的额外加权，0表示不考虑
  const winWeight = 1;
  const maxScorePoint = decks.length + decks.filter(d => d.win).length * winWeight;
  // 卡牌的分数，0 ~ 2
  const cardScoreRecord: Record<CardId, number> = {};
  Object.values(decksRecord).forEach((deck) => {
    const cardCountRecord = deck.cardCountRecord;
    Object.entries(cardCountRecord)
      .forEach(([cardId, count]) => {
        cardScoreRecord[cardId] ??= 0;
        cardScoreRecord[cardId] += count * (deck.numGames + (deck.numGamesWin * winWeight)) / maxScorePoint;
      });
  });

  return Object.values(decksRecord)
    .map((deck) => {
      return {
        deckCode: deck.deckCode as DeckCode,
        numGames: deck.numGames,
        numGamesWin: deck.numGamesWin,
        distanceToAverage: Object.entries(cardScoreRecord)
          .map(([cardId, score]) => Math.abs(score - (deck.cardCountRecord[cardId] ?? 0)))
          .reduce((acc, cur) => acc + cur, 0),
      };
    });
}
