import { createHash } from "node:crypto";
import tournamentsRaw from "./tournaments";
import { playerNicknameMap } from "./players";
import type { ActionCard, BannedData, Deck, Game, Match, Player, Tournament, TournamentPart, TournamentRawData, TournamentStage } from "~/utils/types";
import { actionCardSorter, characterCardSorter } from "~/utils/cards";

const tournamentById: Record<string, Tournament> = {};
const matchById: Record<string, Match> = {};
const gameById: Record<string, Game> = {};
const deckById: Record<string, Deck> = {};
const playerById: Record<string, Player> = {};

function getHashValue(raw: string): string {
  const md5 = createHash("md5").update(raw);
  return md5.digest("hex").toString().slice(8, 24);
}

function registerPlayer(uniqueName: string) {
  if (uniqueName === "") {
    return undefined;
  }
  // 如果在map中，说明该昵称非uniqueName
  if (playerNicknameMap[uniqueName] !== undefined) {
    return registerPlayer(playerNicknameMap[uniqueName]);
  }
  const id = getHashValue(uniqueName);
  // 如果已存在，忽略
  if (!playerById[id]) {
    const aliases = Object.entries(playerNicknameMap).filter(([_alias, nickname]) => nickname === uniqueName).map(([alias]) => alias);
    playerById[id] = { id, uniqueName, aliases: aliases.length ? aliases : undefined };
  }
  return id;
}

function registerDeck(characters: Deck["characterCards"], actions?: Deck["actionCards"]) {
  if (!actions) {
    return undefined;
  }
  const characterCards = [...characters].sort(characterCardSorter) as Deck["characterCards"];
  const actionCards = Object.fromEntries(
    ([...Object.entries(actions)] as [ActionCard, number][])
      .sort((a, b) => actionCardSorter(a[0], b[0])),
  ) as Deck["actionCards"];
  const id = getHashValue(JSON.stringify({ characterCards, actionCards }));
  if (!deckById[id]) {
    deckById[id] = { id, characterCards, actionCards };
    const actionCardCount = Object.values(actionCards).reduce((a, b) => a + b);
    if (actionCardCount !== 30) {
      console.error(`行动牌数量≠30：http://localhost:3000/deck/${id}`);
    }
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
  const tournamentId = getHashValue(gameVersion + tournamentName);
  let matchTotalIndex = 0;

  const stages = stagesRaw.map((stageRaw): TournamentStage => {
    // stage
    const {
      name: stageName,
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
        const matchIds = matchesRaw.map((matchRaw, matchIndex): string => {
          const {
            playerA,
            playerB,
            winner: winnerRaw,
            video,
            banned: bannedRaw,
            games: gamesRaw,
          } = matchRaw;

          const playerAId = registerPlayer(playerA);
          const playerANickname = playerA;
          const playerBId = registerPlayer(playerB);
          const playerBNickname = playerB;

          matchTotalIndex++;
          const matchId = tournamentId + matchTotalIndex.toString().padStart(2, "0");
          const matchName = matchesRaw.length > 1 ? `第${matchIndex + 1}场` : "";

          const aGoals = gamesRaw.filter(g => g.winner === "A").length;
          const bGoals = gamesRaw.filter(g => g.winner === "B").length;
          const winner = winnerRaw ?? (aGoals > bGoals ? "A" : "B");

          const banned = bannedRaw?.map((ban): BannedData => {
            const {
              playerACharacters,
              playerAActions,
              playerBCharacters,
              playerBActions,
            } = ban;
            const playerADeckId = registerDeck(playerACharacters, playerAActions);
            const playerBDeckId = registerDeck(playerBCharacters, playerBActions);
            return {
              playerACharacters,
              playerADeckId,
              playerBCharacters,
              playerBDeckId,
            };
          });

          const gameIds = gamesRaw.map((gameRaw, gameIndex): string => {
            const {
              playerACharacters,
              playerAActions,
              playerBCharacters,
              playerBActions,
              starter,
              winner,
              turns,
            } = gameRaw;
            const gameId = matchId + (gameIndex + 1).toString().padStart(2, "0");

            const playerADeckId = registerDeck(playerACharacters, playerAActions);
            const playerBDeckId = registerDeck(playerBCharacters, playerBActions);

            gameById[gameId] = {
              id: gameId,
              gameVersion,
              date,
              tournamentId,
              matchId,
              tournamentName,
              gameName: stageName + partName + matchName + (gamesRaw.length > 1 ? `第${gameIndex + 1}局` : ""),
              video,

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
            video,
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
  tournamentById[tournamentId] = {
    id: tournamentId,
    name: tournamentName,
    type,
    gameVersion,
    stages,
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
