export default defineEventHandler(() => {
  return responseOk({
    characterCards: getCharacterCards(),
    actionCards: getActionCards(),
  });
});
