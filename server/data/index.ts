import { createHash } from "node:crypto";
import tournamentsRaw from "./tournaments";
import { playerNicknameMap } from "./players";
import type { ActionCard, BannedData, Deck, DeckId, Game, GameId, GameVersion, Match, MatchId, Player, PlayerId, Tournament, TournamentId, TournamentPart, TournamentRawData, TournamentStage } from "~/utils/types";
import { actionCardSorter, characterCardSorter } from "~/utils/cards";
import type { PlayerAchievement } from "~/utils/achievements";
import { getAllGameVersionsReversed } from "~/utils/game-version";

const tournamentById: Record<TournamentId, Tournament> = {};
const matchById: Record<MatchId, Match> = {};
const gameById: Record<GameId, Game> = {};
const deckById: Record<DeckId, Deck> = {};
const playerById: Record<PlayerId, Player> = {};

function getHashValue(raw: string): string {
  const md5 = createHash("md5").update(raw);
  return md5.digest("hex").toString().slice(8, 24);
}

function registerPlayer(uniqueName: string): PlayerId | undefined {
  if (uniqueName === "") {
    return undefined;
  }
  // 如果在map中，说明该昵称非uniqueName
  if (playerNicknameMap[uniqueName] !== undefined) {
    return registerPlayer(playerNicknameMap[uniqueName]);
  }
  const id = getHashValue(uniqueName) as PlayerId;
  // 如果已存在，忽略
  if (!playerById[id]) {
    const aliases = Object.entries(playerNicknameMap).filter(([_alias, nickname]) => nickname === uniqueName).map(([alias]) => alias);
    playerById[id] = { id, uniqueName, aliases: aliases.length ? aliases : undefined };
  }
  return id;
}
function registerPlayerAchievement(playerId: PlayerId | undefined, achievement: PlayerAchievement) {
  if (playerId && !playerById[playerId].achievements?.includes(achievement)) {
    playerById[playerId].achievements = (playerById[playerId].achievements ?? []).concat([achievement]);
  }
}
function registerPlayerAward(playerId: PlayerId | undefined, award: string) {
  if (playerId && !playerById[playerId].awards?.includes(award)) {
    playerById[playerId].awards = (playerById[playerId].awards ?? []).concat([award]);
  }
}

function registerDeck(characters: Deck["characterCards"], actions: Deck["actionCards"] | undefined, gameVersion: GameVersion) {
  if (!actions) {
    return undefined;
  }
  const characterCards = [...characters].sort(characterCardSorter) as Deck["characterCards"];
  const actionCards = Object.fromEntries(
    ([...Object.entries(actions)] as [ActionCard, number][])
      .sort((a, b) => actionCardSorter(a[0], b[0])),
  ) as Deck["actionCards"];
  const id = getHashValue(JSON.stringify({ characterCards, actionCards })) as DeckId;
  if (!deckById[id]) {
    const actionCardCount = Object.values(actionCards).reduce((a, b) => a + b);
    if (actionCardCount !== 30) {
      console.error(`行动牌数量≠30：http://localhost:3000/deck/${id}`);
    }
    deckById[id] = { id, characterCards, actionCards, gameVersion };
  }
  return id;
}

function loadTournamentRaw(tournamentRaw: TournamentRawData) {
  const {
    name: tournamentName,
    type,
    gameVersion,
    stages: stagesRaw,
  } = tournamentRaw;
  const tournamentId = getHashValue(gameVersion + tournamentName) as TournamentId;
  let matchTotalIndex = 0;

  const startDate = stagesRaw[0].parts[0].date;
  let endDate: string | undefined;
  let championId: PlayerId | undefined;
  let championNickname: string | undefined;

  const stages = stagesRaw.map((stageRaw): TournamentStage => {
    // stage
    const {
      name: stageName,
      achievements,
      rules,
      parts: partsRaw,
    } = stageRaw;
    return ({
      name: stageName,
      rules,
      parts: partsRaw.map((partRaw): TournamentPart => {
        // part
        const {
          name: partName,
          date,
          matches: matchesRaw,
        } = partRaw;
        const matchIds = matchesRaw.map((matchRaw, matchIndex): MatchId => {
          const {
            playerA,
            playerB,
            winner: winnerRaw,
            video: matchVideo,
            banned: bannedRaw,
            games: gamesRaw,
          } = matchRaw;

          const playerAId = registerPlayer(playerA);
          const playerANickname = playerA;
          const playerBId = registerPlayer(playerB);
          const playerBNickname = playerB;
          if (achievements?.length) {
            achievements.forEach((achievement) => {
              registerPlayerAchievement(playerAId, achievement);
              registerPlayerAchievement(playerBId, achievement);
            });
          }

          matchTotalIndex++;
          const matchId = tournamentId + matchTotalIndex.toString().padStart(2, "0") as MatchId;
          const matchName = matchesRaw.length > 1 ? `第${matchIndex + 1}场` : "";

          const aGoals = gamesRaw.filter(g => g.winner === "A").length;
          const bGoals = gamesRaw.filter(g => g.winner === "B").length;
          const winner = winnerRaw ?? (aGoals > bGoals ? "A" : "B");

          if (stageName === "决赛" || partName === "决赛" || matchName === "决赛") {
            if (winner === "A") {
              championId = playerAId;
              championNickname = playerANickname;
              registerPlayerAward(playerAId, `${gameVersion}\u2006${tournamentName}冠军`);
            }
            else if (winner === "B") {
              championId = playerBId;
              championNickname = playerBNickname;
              registerPlayerAward(playerBId, `${gameVersion}\u2006${tournamentName}冠军`);
            }
            endDate = endDate ?? date;
          }

          const banned = bannedRaw?.map((ban): BannedData => {
            const {
              playerACharacters,
              playerBCharacters,
            } = ban;
            return {
              playerACharacters,
              playerBCharacters,
            };
          });

          const gameIds = gamesRaw.map((gameRaw, gameIndex): GameId => {
            const {
              playerACharacters,
              playerAActions,
              playerBCharacters,
              playerBActions,
              starter,
              winner,
              turns,
              video: gameVideo,
            } = gameRaw;
            const gameId = matchId + (gameIndex + 1).toString().padStart(2, "0") as GameId;

            const playerADeckId = registerDeck(playerACharacters, playerAActions, gameVersion);
            const playerBDeckId = registerDeck(playerBCharacters, playerBActions, gameVersion);

            gameById[gameId] = {
              id: gameId,
              gameVersion,
              date,
              tournamentId,
              matchId,
              tournamentName,
              gameName: stageName + partName + matchName + (gamesRaw.length > 1 ? `第${gameIndex + 1}局` : ""),
              matchVideo,
              gameVideo,

              playerAId,
              playerANickname,
              playerBId,
              playerBNickname,
              playerACharacters,
              playerADeckId,
              playerBCharacters,
              playerBDeckId,

              starter,
              winner,
              turns,
            };
            return gameId;
          });

          matchById[matchId] = {
            id: matchId,
            tournamentId,
            tournamentName,
            partName: `${stageName}${partName}`,
            gameVersion,
            name: matchName,
            date,
            playerAId,
            playerANickname,
            playerBId,
            playerBNickname,
            video: matchVideo,
            winner,
            banned,
            gameIds,
          };
          return matchId;
        });
        return {
          name: partName,
          date,
          matchIds,
        };
      }),
    });
  });

  if (endDate === undefined && gameVersion !== getAllGameVersionsReversed()[0]) {
    endDate = stagesRaw[stagesRaw.length - 1].parts[stagesRaw[stagesRaw.length - 1].parts.length - 1].date;
  }

  tournamentById[tournamentId] = {
    id: tournamentId,
    name: tournamentName,
    type,
    gameVersion,
    stages,
    dateRange: [startDate, endDate],
    championId,
    championNickname,
  };
}

tournamentsRaw.forEach(loadTournamentRaw);

export {
  tournamentById,
  matchById,
  gameById,
  deckById,
  playerById,
};
