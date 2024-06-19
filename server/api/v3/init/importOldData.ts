import tournamentById from "./tournaments.json";
import matchById from "./matches.json";
import gameById from "./games.json";
import deckById from "./decks.json";
// import playerById from "./players.json";
import type { Ban, CardId, Game, Tournament, TournamentRules } from "~/types/data";
import type { MatchSaveParams } from "~/server/utils/match";
import type { DeckCards, DeckCode } from "~/types/data/deck";

// const playerNicknameMapRaw: Record<string, string> = {
//   /*
//     在这里添加玩家名称映射：
//     "比赛中昵称": "玩家统一昵称",
//   */

//   "夜莺": "LL起翼夜鹰",
//   "RR夜莺": "LL起翼夜鹰",
//   "RR抒情夜莺": "LL起翼夜鹰",
//   "夜鹰": "LL起翼夜鹰",
//   "卡密sama42": "卡密sama",
//   "原皮鸭": "皮皮鸭",
//   "臭臭鸭": "原皮鸭",
//   "原来是筱梦": "岚落尘",
//   "洛甄黎": "妞妞嘛",
//   "八重妞妞": "妞妞嘛",
//   "阿源今晚吃派蒙": "阿源",
//   "蓬莱寺九霄啊": "蓬莱寺九霄",
//   "幽羊": "一不小欣z",
//   "月话牌社-音月": "月话音月",
//   "梦一夕林": "萌萌哒的梦酱",
//   "音尘Voicend": "音尘",
//   "飘逸之风": "吃猫萝",
//   "柚恩柚恩了": "柚柚恩",
//   "本大爷还有仙跳": "道道不哭",
//   "那菈琉環冰": "琉環冰",
//   "齿轮": "齿轮mog",
//   "牌手Aurora": "Aurora",
//   "皮皮猪今晚吃阿源": "皮皮猪",
//   "七圣小铭同学": "小铭同学qaQ233",
//   "Septorz": "Sept",
//   "不足中行醉梦中": "今天不想吃苹果",
//   "沉湎丶": "桔梗",
//   "小宇cyy": "小宇",
//   "魔法绵羊Tobby": "Tobby",
//   "水果鲨啦": "蛋黄汐夕",
//   "Shana": "明暗螺旋",
//   "只玩水草皇呜呜": "只玩水皇草呜呜",
//   "「亦然」": "亦然",
//   "zjyang": "宇宙蓝色闪光",
//   "今天不想吃苹果_": "今天不想吃苹果",
//   "一不小欣x": "一不小欣z",
//   "冰糖蕊梨": "蕊梨",
//   "干瘪的小果核": "小果核",
//   "取悦诗风吟": "取悦",
//   "召唤王": "吾虽年迈",
//   "卡牌狂魔张老伯": "老伯",
//   "全都是失误": "全都是错误",
//   "葬送の鏡蓮華で": "雪乃",
//   "镜莲华的葬送": "雪乃",
//   "芙桃桃大魔王": "胡桃桃大魔王",
//   "胡芙芙大魔王": "胡桃桃大魔王",
//   "小瓜皮王": "瓜皮儿",
//   "瓜皮儿err": "瓜皮儿",
//   "道诡异仙李火旺": "小果核",
//   "素未谋面": "陳十一",
//   "浅冽（重生版）": "浅冽",
//   "永远滴_神": "Dr.666",
//   "终末本是我家": "终末我家",
//   "和大名32145": "和大名",
//   "Tonbo_桐柏": "Tonbo",
//   "七圣古明地觉": "古明地觉",
//   "莫莉安wink": "莫莉安",
//   "LLRiseFalcon": "LL起翼夜鹰",
//   "Voicend": "音尘",
//   "PPpig": "皮皮猪",
//   "小铭同学qaQ233": "小铭同学",
//   "牛马牛牛马": "Star",
//   "xxxxxhope": "XHope",
//   "icedtea": "今天不想吃苹果",
//   "皮皮喵": "喵帕斯",
//   "RedY": "赤佬RedY",
//   "WilliemKmetsch": "贝尔格里",
//   "暖冰扔进冷火里": "长门有希",
//   "冷たい空": "雪乃",
//   "无光": "无光之眼",
//   "红颜~nano": "红颜",
//   "理塘牢桐": "梧桐",
//   "小红帽的大兔子": "小梦",
//   "聿九音": "轻篱",
//   "胡桃小姐单推人": "胡桃花开青雀鸣",
//   "武响尾蛇": "丶响尾蛇丶",
//   "子祺●百特": "子祺粨特",
//   "白雀": "蓬莱寺九霄",
//   "空寻的小迷妹": "pupa",
//   "hl": "Glyou_HZ",
//   "只玩水皇草呜呜": "雷伊",
//   "胡猫": "雷伊",
//   "魑魅魍魉": "小果核",
//   "Fuwoo": "岩van♂deep君",
//   "坐忘道": "春风不扰过客",
//   "你给我果赖": "Sherry",
//   "相夷": "陳十一",
//   "♡招财小喵♡": "柠柠七喵",
//   "甘琳鸢": "Glyou_HZ",
//   "吃雀萝": "吃猫萝",
//   "Zima": "ZIMA",
//   "呆…呆jio布？": "雪乃",
//   "魈宝我老公": "魈宝我老公！",
//   "自信的胡小菠": "自信的菠萝蜜",
//   "螳螂螂小魔虾": "螳螂虾",
//   "屁屁猪公主": "原皮鸭",
//   "雨夜": "雨夜Mhz",
//   "胡胡伯": "老伯",
//   "XXXXXHope": "XHope",
//   "007": "小果核",
//   "黑钰袖": "｜蓝兰岚｜",
//   "懒烂岚": "｜蓝兰岚｜",
//   "哀酱从小就可爱": "Sherry",
//   "古月方源": "春秋蝉",
//   "冰红茶心甘晴愿": "冰红茶|荧",
//   "幸运": "夭九",
//   "浅冽": "鱼儿化音的迷妹",
//   "偶尔来打牌": "某七圣召唤选手",
//   "胡胡夜闪光": "宇宙蓝色闪光",
//   "枨枘⠀": "枨枘",
//   "萌萌哒的汐酱": "蛋黄汐夕",
//   "帝子降兮": "帝之降兮",
//   "握碎柠檬": "吾虽年迈",
//   "薄学..红温啦": "薄学",
//   "吉更": "桔梗",
//   "燕藩阿楼": "阿楼Riricho",
//   "纤育鼎": "霓特",
//   "派大蒙": "MaRiA",
//   "饕笔": "雷伊",
//   "艾雪雪大魔王": "艾可雪",
//   "纳西妲入我怀": "净善宫的男主人",
//   "光熙": "TianJam",
//   "爱酱单推人": "路过的诡法师",
//   "吃掉一只萌酱": "魈宝我老公！",
//   "蓝雨の迷妹": "清弦",
//   "雀鲨": "雀巢脆脆鲨",
//   "噗沥嘶逼开尔否": "饕笔",
//   "乐，胡能似吗？": "乐子人.超飞梨",
//   "Winsoon": "WinSoon",
//   "雪国": "雪国Ink",
//   "雪夜糖|兰TJ": "TianJam",
//   "不更鸟": "从不打低端局",
//   "霉逼酱": "可可酱",

//   "Kirisa": "きりさ",
//   "chikuwa": "ちくわ",
//   "kamisama": "卡密sama",
//   "Proxy": "KevinZ",
//   "quijano": "ΚΥΡΑΝΟΣ",
//   "maya": "zCrimlet",
//   "SI2": "StupidIdiot",
//   "StupidIdiot": "RobotWizard",
//   "Komorebi": "王小雨",
//   "meaningless": "吴意",
//   "Sumi": "diarin",
//   "AFKay": "唐傀",
//   "CJRzzZ": "自古二楼",
//   "Lp|葉山": "葉山",
// };

// const playerNicknameMap = Object.fromEntries(
//   Object.entries(playerNicknameMapRaw)
//     .map(([alias, nickname]) => {
//       while (playerNicknameMapRaw[nickname]) {
//         nickname = playerNicknameMapRaw[nickname];
//       }
//       return [alias, nickname];
//     }),
// );

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
      throw createError(`Unknown tournament type: ${old}`);
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
    throw createError("Tournament extra rules are not supported yet");
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
  if (!card) throw createError(`Card not found${name}`);
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
          throw createError("Stage part name is required");
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
          .forEach((oldMatch) => {
            if (!oldMatch) throw createError("match not found");

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
