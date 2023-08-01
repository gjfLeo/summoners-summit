import { tournamentById } from "../../data";

export default defineEventHandler((event) => {
  const {
    gameVersion,
  } = getQuery(event);
  let list = Object.values(tournamentById);
  if (gameVersion) {
    list = list.filter(t => t.gameVersion === gameVersion);
  }
  const tournamentList = list.map((t) => {
    const { stages: _stages, ...remains } = t;
    return remains;
  });
  return { code: 200, tournamentList };
});
