export default defineEventHandler(() => {
  return { players: readDataList<Player>("players") };
});
