import tournamentById from "./tournaments.json";
import matchById from "./matches.json";
import gameById from "./games.json";
import deckById from "./decks.json";
// import playerById from "./players.json";
import type { CardId, Game, Tournament, TournamentRules } from "~/types";
import type { DeckCards, DeckCode } from "~/types/data/deck";
import type { MatchSaveParams } from "~/server/service";
import { ZMatchSaveParams, ZTournamentSaveParams, getActionCards, getCharacterCards, getPlayerList, saveMatch, saveTournament } from "~/server/service";

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
            submitDecks: submitDecks.maxNumForEachTeam || submitDecks.maxNumInTotal ? submitDecks : undefined,
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

function findPlayer(nickname: string) {
  const matched = getPlayerList().filter(p => p.uniqueName === nickname || p.aliases.includes(nickname));
  if (matched.length === 1) {
    return matched[0];
  }
}
function findPlayerId(nickname: string) {
  return findPlayer(nickname)?.id;
}

const blockWords = ["64", "89", "ba9", "c4", "cag", "gay", "ntr", "pcp", "rbq"];
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

function encodeDeck(deck: DeckCards): DeckCode {
  const shareIds = [
    ...deck.characterCards.map(cardId => characterCardById[cardId]?.shareId ?? "0"),
    ...deck.actionCards.map(cardId => actionCardById[cardId]?.shareId ?? "0"),
  ];
  // 补齐为34项12-bit数组
  shareIds.push(0);

  // 重组为51项 8-bit数组
  const byteArray = Array.from({ length: 17 })
    .flatMap((_, i) => [
      shareIds[i * 2] >> 4,
      ((shareIds[i * 2] & 0xF) << 4) + (shareIds[i * 2 + 1] >> 8),
      shareIds[i * 2 + 1] & 0xFF,
    ]);

  // 以此尝试最后一个字节，寻找不含屏蔽词的分享码
  for (let lastByte = 0; lastByte < 256; lastByte++) {
    // 加上掩码，奇偶重排
    // 原本的前25个字节放在偶数位，后25个字节放在奇数位
    const reorderedByteArray = Array.from({ length: 25 })
      .flatMap((_, i) => [
        (byteArray[i] + lastByte) & 0xFF,
        (byteArray[i + 25] + lastByte) & 0xFF,
      ]);

    // 编码为Base64
    const shareCode = btoa(String.fromCodePoint(...reorderedByteArray, lastByte));
    if (!blockWords.some(word => new RegExp(word.split("").join("\\+*"), "i").test(shareCode))) {
      return shareCode;
    }
  }

  throw new Error("无法生成有效的分享码");
}

function getDeckCode(oldDeckId: string) {
  const oldDeck = deckById[oldDeckId as keyof typeof deckById];
  if (!oldDeck) return;
  return encodeDeck({
    characterCards: oldDeck.characterCards.map(getCardId),
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
  Object.values(tournamentById).forEach((oldTournament) => {
    if (oldTournament.gameVersion.includes("pre")) {
      console.warn(`Tournament ${oldTournament.name} has pre-release game version`);
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

    oldTournament.stages.forEach((oldStage, stageIndex) => {
      oldStage.parts.forEach((oldPart, partIndex) => {
        oldPart.matchIds.map(mId => matchById[mId as keyof typeof matchById])
          .forEach((oldMatch, matchIndex) => {
            if (!oldMatch) throw new Error("match not found");

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
                    deckCode: "playerADeckId" in oldGame ? getDeckCode(oldGame.playerADeckId) : undefined,
                  },
                  playerBDeck: {
                    characters: oldGame.playerBCharacters.map(getCardId),
                    deckCode: "playerBDeckId" in oldGame ? getDeckCode(oldGame.playerBDeckId) : undefined,
                  },
                  winner: oldGame.winner === "D" ? "DRAW-L" : oldGame.winner as Game["winner"],
                  starter: oldGame.starter === "" ? undefined : oldGame.starter as Game["starter"],
                  gameVideo: "gameVideo" in oldGame ? oldGame.gameVideo : undefined,
                } satisfies MatchSaveParams["games"][number];
              });

            const matchParams: MatchSaveParams = {
              tournamentId: oldTournament.id,
              stageIndex,
              partIndex,
              matchIndex,
              isFinal: oldStage.name === "决赛" || oldStage.name === "决赛" ? true : undefined,
              playerA: {
                playerId: findPlayerId(oldMatch.playerANickname),
                nickname: oldMatch.playerANickname,
              },
              playerB: {
                playerId: findPlayerId(oldMatch.playerBNickname),
                nickname: oldMatch.playerBNickname,
              },
              winner: oldMatch.winner as MatchSaveParams["winner"],
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
