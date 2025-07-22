import { z } from "zod";

export async function getCharacterCards() {
  const data = await readDataV2("misc/character-cards");
  return z.record(ZCardId, ZCharacterCardInfo).parse(data);
}
export async function getActionCards() {
  const data = await readDataV2("misc/action-cards");
  return z.record(ZCardId, ZActionCardInfo).parse(data);
}

let shareIdByCardId: Record<CardId, number> | null = null;
let cardIdByShareId: Record<number, CardId> | null = null;

async function getShareIdByCardId(cardId: CardId): Promise<number> {
  if (!shareIdByCardId) {
    shareIdByCardId = Object.fromEntries(
      [
        ...Object.values(await getCharacterCards()),
        ...Object.values(await getActionCards()),
      ]
        .map(card => [card.id, card.shareId]),
    );
  }
  return shareIdByCardId[cardId] ?? 0;
}
async function getCardIdByShareId(shareId: number): Promise<CardId> {
  if (!cardIdByShareId) {
    cardIdByShareId = Object.fromEntries(
      [
        ...Object.values(await getCharacterCards()),
        ...Object.values(await getActionCards()),
      ]
        .map(card => [card.shareId, card.id]),
    );
  }
  return cardIdByShareId[shareId] ?? "";
}

export async function encodeDeck(deck: DeckCards): Promise<DeckCode> {
  const shareIds = await Promise.all([
    ...deck.characterCards.map(getShareIdByCardId),
    ...deck.actionCards.map(getShareIdByCardId),
  ]);
  return encodeDeckFromShareIds(shareIds);
}

export const decodeDeck = defineCachedFunction(
  async (deckCode: DeckCode): Promise<DeckCards> => {
    const shareIds = decodeDeckToShareIds(deckCode);
    const characterCards = await Promise.all(shareIds.splice(0, 3).map(getCardIdByShareId));
    const actionCards = (await Promise.all(shareIds.map(getCardIdByShareId)))
      .filter(cardId => cardId !== "");
    return { characterCards, actionCards };
  },
  {
    maxAge: 0,
    name: "decodeDeck",
    getKey: deckCode => toBase64Url(deckCode),
  },
);

export async function getActionCardCountRecord(deckCode: DeckCode): Promise<Record<CardId, number>> {
  const cards = (await decodeDeck(deckCode)).actionCards;
  const countRecord: Record<CardId, number> = {};
  cards.forEach((cardId) => {
    countRecord[cardId] ??= 0;
    countRecord[cardId]++;
  });
  return countRecord;
}
