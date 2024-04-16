export default defineEventHandler(() => {
  return responseData({
    characterCards: getCharacterCards(),
    actionCards: getActionCards(),
  });
});
