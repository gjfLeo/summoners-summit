import type { CardId } from "~/types/data";
import type { DeckCards, DeckCode } from "~/types/data/deck";

export function useDeckEncoder() {
  const { characterCardById, actionCardById, characterCardList, actionCardList } = useSharedData();

  const getShareIdByCardId = useMemoize((cardId: CardId): number => {
    if (!cardId) return 0;
    const card = characterCardById.value[cardId] ?? actionCardById.value[cardId];
    if (!card) throw new Error(`Invalid card id during encode: ${cardId}`);
    return card.shareId;
  });
  const getCardIdByShareId = useMemoize((shareId: number): CardId => {
    if (shareId === 0) return "";
    const card = [...characterCardList.value, ...actionCardList.value].find(card => card.shareId === shareId);
    if (!card) throw new Error(`Invalid card shareId during decode: ${shareId}`);
    return card.id;
  });

  function encodeDeck(deck: DeckCards): DeckCode {
    const shareIds = [
      ...deck.characterCards.map(getShareIdByCardId),
      ...deck.actionCards.map(getShareIdByCardId),
    ];
    return encodeDeckFromShareIds(shareIds);
  }

  function decodeDeck(deckCode: DeckCode): DeckCards {
    const shareIds = decodeDeckToShareIds(deckCode);
    const characterCards = shareIds.splice(0, 3).map(getCardIdByShareId);
    const actionCards = shareIds.map(getCardIdByShareId).filter(cardId => cardId !== "");
    return { characterCards, actionCards };
  }

  return {
    encodeDeck,
    decodeDeck,
  };
}
