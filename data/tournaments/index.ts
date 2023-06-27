import t0001 from "./t0001";
import t0003 from "./t0003";
import t0004 from "./t0004";
import t0005 from "./t0005";
import t0006 from "./t0006";
import t0007 from "./t0007";
import type { Game } from "~/utils/types";

export const tournamentList = [
  t0001, // 主播邀请赛
  // t0002, // 米游社
  t0003, // TT语音杯
  t0004, // NGA酒馆争霸赛
  t0005, // 共鸣杯
  t0006, // 寒天之钉杯
  t0007, // 哔哩哔哩主播资格赛
  // t0008, // 虎牙主播资格赛
];
export const tournamentById = Object.fromEntries(tournamentList.map(tournament => [tournament.id, tournament]));

export const gameList = tournamentList.flatMap<Game>((tournament) => {
  const tournamentName = tournament.name;
  return tournament.stages.flatMap((stage) => {
    const stageName = stage.name;
    return stage.parts.flatMap((part) => {
      const { name: partName, date } = part;
      return part.matches.flatMap((match, matchIndex, matches) => {
        const matchName = matches.length > 1 ? `第${matchIndex + 1}场` : "";
        const { playerA, playerB } = match;
        return match.games.flatMap((game, gameIndex, games) => {
          const gameName = games.length > 1 ? `第${gameIndex + 1}局` : "";
          return {
            tournamentName,
            stageName,
            partName,
            matchName,
            gameName,
            date,
            playerA,
            playerB,
            ...game,
          };
        });
      });
    });
  });
});
export const gameById = Object.fromEntries(gameList.map(game => [game.id, game]));

// export const deckById = decks;
// export const deckList = Object.values(decks);
