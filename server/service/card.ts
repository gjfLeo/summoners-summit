import type { ActionCardInfo, CardId, CharacterCardInfo, DeckCards, DeckCode } from "~/types";
import { z } from "zod/v4";
import { ZActionCardInfo, ZCardId, ZCharacterCardInfo } from "~/types";
import { decodeDeckToShareIds, encodeDeckFromShareIds } from "~/utils/deck";
import { toBase64Url } from "~/utils/encode";
import { defineGetMiscStorage } from "./storage";

export const getCharacterCards: () => Promise<Record<CardId, CharacterCardInfo>>
  = defineGetMiscStorage("character-cards", z.record(ZCardId, ZCharacterCardInfo));

export const getActionCards: () => Promise<Record<CardId, ActionCardInfo>>
  = defineGetMiscStorage("action-cards", z.record(ZCardId, ZActionCardInfo));

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
