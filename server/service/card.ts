import { z } from "zod";
import type { CardId, DeckCards, DeckCode } from "~/types";
import { ZActionCardInfo, ZCardId, ZCharacterCardInfo } from "~/types";
import { decodeDeckToShareIds, encodeDeckFromShareIds } from "~/utils/deck";

export function getCharacterCards() {
  return z.record(ZCardId, ZCharacterCardInfo).parse(readData("misc/character-cards"));
}
export function getActionCards() {
  return z.record(ZCardId, ZActionCardInfo).parse(readData("misc/action-cards"));
}

const shareIdByCardId: Record<CardId, number> = Object.fromEntries(
  [...Object.values(getCharacterCards()), ...Object.values(getActionCards())]
    .map(card => [card.id, card.shareId]),
);
const cardIdByShareId: Record<number, CardId> = Object.fromEntries(
  [...Object.values(getCharacterCards()), ...Object.values(getActionCards())]
    .map(card => [card.shareId, card.id]),
);

function getShareIdByCardId(cardId: CardId) {
  return shareIdByCardId[cardId] ?? 0;
}
function getCardIdByShareId(shareId: number): CardId {
  return cardIdByShareId[shareId] ?? "";
}

export function encodeDeck(deck: DeckCards): DeckCode {
  const shareIds = [
    ...deck.characterCards.map(getShareIdByCardId),
    ...deck.actionCards.map(getShareIdByCardId),
  ];
  return encodeDeckFromShareIds(shareIds);
}

export function decodeDeck(deckCode: DeckCode): DeckCards {
  const decodeDeckCache = readData<Record<string, DeckCards>>("misc/_decode-deck-cache", {});
  if (decodeDeckCache[deckCode]) {
    return decodeDeckCache[deckCode];
  }
  const shareIds = decodeDeckToShareIds(deckCode);
  const characterCards = shareIds.splice(0, 3).map(getCardIdByShareId);
  const actionCards = shareIds.map(getCardIdByShareId).filter(cardId => cardId !== "");
  decodeDeckCache[deckCode] = { characterCards, actionCards };
  writeData("misc/_decode-deck-cache", decodeDeckCache);
  return decodeDeckCache[deckCode];
}
