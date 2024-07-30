import tournamentById from "~/server/data/old/tournamentById.json";
import matchById from "~/server/data/old/matchById.json";
import gameById from "~/server/data/old/gameById.json";
import deckById from "~/server/data/old/deckById.json";
import playerRedirect from "~/server/data/old/playerRedirect.json";

import type { CardId, Game, PlayerId, Tournament, TournamentRules } from "~/types";
import type { DeckCards, DeckCode } from "~/types/data/deck";
import type { MatchSaveParams } from "~/server/service";
import { ZMatchSaveParams, ZTournamentSaveParams, changePlayerUniqueName, encodeDeck, getActionCards, getCharacterCards, getGameList, getMatchList, getPlayer, getPlayerList, getTournamentList, redirectPlayer, saveMatch, savePlayer, saveTournament } from "~/server/service";

function getTournamentType(old?: string): Tournament["type"] {
  if (!old) return "未分类";
  switch (old) {
    case "全民积分赛":
      return "积分赛";
    case "积分赛试办赛":
      return "积分赛试办";
    case "主播资格赛":
      return "平台赛";
    case "外卡赛":
      return "入围赛";
    case "外服赛事":
      return "未分类（外服）";
    default:
      console.error(old);
      throw new Error(`Unknown tournament type: ${old}`);
  }
}

function getStageRules(old?: {
  numDecks: number;
  numDecksBanned?: number;
  numCharactersBanned?: number;
  numCharactersRequired?: number;
  mode: "Duel" | "Conquest";
  numGames: number;
  extra?: [string, string][];
}): TournamentRules | undefined {
  const submitDecks: { maxNumInTotal?: number; maxNumForEachTeam?: number } = {};
  if (old?.extra?.find(e => e[1] === "3套阵容合计可准备9套牌组，上场时从中选择")) {
    submitDecks.maxNumInTotal = 9;
    old.extra?.splice(old.extra.findIndex(e => e[1] === "3套阵容合计可准备9套牌组，上场时从中选择"), 1);
  }
  if (old?.extra?.find(e => e[1] === "每套阵容可准备3套牌组，上场时从中选择")) {
    submitDecks.maxNumForEachTeam = 3;
    old.extra?.splice(old.extra.findIndex(e => e[1] === "每套阵容可准备3套牌组，上场时从中选择"), 1);
  }
  if (old?.extra?.length) {
    console.error(old.extra);
    throw new Error("Tournament extra rules are not supported yet");
  }

  return old
    ? {
      numGames: old.numGames,
      mode: old.mode === "Duel" ? "duel" : "conquest",

      banCharacters: old.numCharactersBanned
        ? {
            num: old.numCharactersBanned,
          }
        : undefined,

      submitTeams: old.numDecks
        ? {
            num: old.numDecks,
            numCharactersRequired: old.numCharactersRequired,
            submitDecks: (submitDecks.maxNumForEachTeam || submitDecks.maxNumInTotal) ? submitDecks : undefined,
            banTeams: old.numDecksBanned
              ? {
                  num: old.numDecksBanned,
                }
              : undefined,
          }
        : undefined,
    } satisfies TournamentRules
    : undefined;
}

const characterCardById = getCharacterCards();
const actionCardById = getActionCards();

const cardIdByName: Record<string, CardId> = {};
function getCardId(name: string) {
  if (cardIdByName[name]) {
    return cardIdByName[name];
  }
  const card = [
    ...Object.values(characterCardById),
    ...Object.values(actionCardById),
  ].find(c => c.name.zh === name);
  if (!card) throw new Error(`Card not found${name}`);
  cardIdByName[name] = card.id;
  return card.id;
}

function getDeckCode(oldDeckId: string, characterCards: CardId[]) {
  const oldDeck = deckById[oldDeckId as keyof typeof deckById];
  if (!oldDeck) return;
  return encodeDeck({
    characterCards,
    actionCards: Object.entries(oldDeck.actionCards)
      .reduce<CardId[]>((a, [name, count]) => {
        for (let i = 0; i < count; i++) {
          a.push(getCardId(name));
        }
        return a;
      }, []),
  });
}

export default defineEventHandler(async () => {
  // 删除旧数据
  getGameList().forEach((game) => {
    deleteData(`games/${game.id}`);
  });
  getMatchList().forEach((match) => {
    deleteData(`matches/${match.id}`);
  });
  getTournamentList().forEach((tournament) => {
    deleteData(`tournaments/${tournament.id}`);
  });
  getPlayerList().filter(player => player.uids.length === 0 && player.aliases.length === 0).forEach((player) => {
    deleteData(`players/${player.id}`);
  });

  Object.entries(playerRedirect).forEach(([nickname1, nickname2]) => {
    let player1Id: PlayerId, player2Id: PlayerId;
    const player1matched = getPlayerList()
      .filter(p => p.uniqueName === nickname1 || p.aliases.includes(nickname1));
    if (player1matched.length === 0) {
      player1Id = savePlayer({ uniqueName: nickname1, uids: [], aliases: [] });
    }
    else if (player1matched.length === 1) {
      player1Id = player1matched[0].id;
    }
    else {
      throw new Error(`昵称${nickname1}找到${player1matched.length}条选手数据`);
    }

    if (nickname2 === "") {
      const player = getPlayer(player1Id)!;
      player.ignored = true;
      savePlayer(player);
      return;
    }

    const player2matched = getPlayerList()
      .filter(p => p.uniqueName === nickname2 || p.aliases.includes(nickname2));
    if (player2matched.length === 0) {
      player2Id = savePlayer({ uniqueName: nickname2, uids: [], aliases: [] });
    }
    else if (player2matched.length === 1) {
      player2Id = player2matched[0].id;
    }
    else {
      throw new Error(`昵称${nickname2}找到${player2matched.length}条选手数据`);
    }

    const playerId = redirectPlayer(player1Id, player2Id);
    changePlayerUniqueName(playerId, nickname2);
  });

  Object.values(tournamentById).forEach((oldTournament) => {
    if (oldTournament.gameVersion.includes("pre")) {
      console.warn(`跳过${oldTournament.name}（${oldTournament.gameVersion}版本）`);
      return;
    };

    const type = getTournamentType("type" in oldTournament ? oldTournament.type : undefined);
    const stages = oldTournament.stages.map((oldStage) => {
      const parts = oldStage.parts.map((oldPart) => {
        if (!oldPart.name && oldStage.parts.length > 1) {
          throw new Error("Stage part name is required");
        }
        return {
          name: { zh: oldPart.name },
          date: oldPart.date,
          matchIds: [],
        };
      });

      return {
        name: { zh: oldStage.name },
        rules: getStageRules("rules" in oldStage ? oldStage.rules as any : undefined),
        parts,
      };
    });
    saveTournament(ZTournamentSaveParams.parse({
      id: oldTournament.id,
      name: { zh: oldTournament.name },
      type,
      gameVersion: oldTournament.gameVersion,
      stages,
    }));

    const tournamentPlayerMap: Record<string, PlayerId> = {};

    oldTournament.stages.forEach((oldStage, stageIndex) => {
      oldStage.parts.forEach((oldPart, partIndex) => {
        oldPart.matchIds.map(mId => matchById[mId as keyof typeof matchById])
          .forEach((oldMatch, matchIndex) => {
            if (!oldMatch) throw new Error("match not found");

            ([oldMatch.playerANickname, oldMatch.playerBNickname]).forEach((nickname) => {
              if (tournamentPlayerMap[nickname]) return;
              const matchedPlayers = getPlayerList()
                .filter(p => p.uniqueName === nickname || p.aliases.includes(nickname));
              if (matchedPlayers.length === 1) {
                tournamentPlayerMap[nickname] = matchedPlayers[0].id;
              }
              else {
                tournamentPlayerMap[nickname] = savePlayer({
                  uniqueName: nickname,
                  uids: [],
                  aliases: [],
                });
              }
            });

            const bans = "banned" in oldMatch
              ? oldMatch.banned.map<MatchSaveParams["bans"][number]>((oldBan) => {
                return {
                  _key: 0,
                  playerACardIds: oldBan.playerACharacters.map(getCardId),
                  playerBCardIds: oldBan.playerBCharacters.map(getCardId),
                };
              })
              : [];

            const games = oldMatch.gameIds.map(gId => gameById[gId as keyof typeof gameById])
              .map<MatchSaveParams["games"][number]>((oldGame) => {
                return {
                  _key: 0,
                  playerADeck: {
                    characters: oldGame.playerACharacters.map(getCardId),
                    deckCode: "playerADeckId" in oldGame ? getDeckCode(oldGame.playerADeckId, oldGame.playerACharacters.map(getCardId)) : undefined,
                  },
                  playerBDeck: {
                    characters: oldGame.playerBCharacters.map(getCardId),
                    deckCode: "playerBDeckId" in oldGame ? getDeckCode(oldGame.playerBDeckId, oldGame.playerBCharacters.map(getCardId)) : undefined,
                  },
                  winner: oldGame.winner === "D" ? "DRAW-L" : oldGame.winner as Game["winner"],
                  starter: oldGame.starter === "" ? undefined : oldGame.starter as Game["starter"],
                  gameVideo: "gameVideo" in oldGame ? oldGame.gameVideo : undefined,
                } satisfies MatchSaveParams["games"][number];
              });

            const aWinDiff = games.reduce((diff, game) => {
              if (game.winner === "A") return diff + 1;
              if (game.winner === "B") return diff - 1;
              return diff;
            }, 0);
            const winner = aWinDiff > 0 ? "A" : aWinDiff < 0 ? "B" : "DRAW";

            const matchParams: MatchSaveParams = {
              tournamentId: oldTournament.id,
              stageIndex,
              partIndex,
              matchIndex,
              isFinal: oldStage.name === "决赛" || oldStage.name === "决赛" ? true : undefined,
              playerA: {
                playerId: tournamentPlayerMap[oldMatch.playerANickname],
                nickname: oldMatch.playerANickname,
              },
              playerB: {
                playerId: tournamentPlayerMap[oldMatch.playerBNickname],
                nickname: oldMatch.playerBNickname,
              },
              winnerOverride: winner === oldMatch.winner ? undefined : oldMatch.winner as MatchSaveParams["winnerOverride"],
              video: "video" in oldMatch ? oldMatch.video : undefined,

              bans,
              games,
            };
            saveMatch(ZMatchSaveParams.parse(matchParams));
          });
      });
    });
  });

  return { success: true };
});
