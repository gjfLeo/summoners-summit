import 主播邀请赛 from "./主播邀请赛";

export const tournaments = {
  主播邀请赛,
};

export const gameList = Object.values(tournaments)
  .flatMap(tournament => tournament.sections)
  .flatMap(section => section.matches)
  .flatMap(match => match.games);
