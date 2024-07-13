import type { CardId } from "~/types/data";
import type { DeckCards, DeckCode } from "~/types/data/deck";

const blockWords = ["64", "89", "ba9", "c4", "cag", "gay", "ntr", "pcp", "rbq"];

export function useDeckEncoder() {
  const { characterCardById, actionCardById, characterCardList, actionCardList } = useSharedData();

  const getCharacterCardByShareId = useMemoize((shareId: number): CardId => {
    if (shareId === 0) return "";
    const card = characterCardList.value.find(card => card.shareId === shareId);
    if (!card) throw new Error(`Invalid character card shareId during decode: ${shareId}`);
    return card.id as CardId;
  });
  const getActionCardByShareId = useMemoize((shareId: number): CardId => {
    if (shareId === 0) return "";
    const card = actionCardList.value.find(card => card.shareId === shareId);
    if (!card) throw new Error(`Invalid character card shareId during decode: ${shareId}`);
    return card.id as CardId;
  });
  function encodeDeck(deck: DeckCards): DeckCode {
    const shareIds = [
      ...deck.characterCards.map(cardId => characterCardById.value[cardId]?.shareId ?? "0"),
      ...deck.actionCards.map(cardId => actionCardById.value[cardId]?.shareId ?? "0"),
    ];
    // 补齐为34项12-bit数组
    shareIds.push(0);

    // 重组为51项 8-bit数组
    const byteArray = Array.from({ length: 17 })
      .flatMap((_, i) => [
        shareIds[i * 2] >> 4,
        ((shareIds[i * 2] & 0xF) << 4) + (shareIds[i * 2 + 1] >> 8),
        shareIds[i * 2 + 1] & 0xFF,
      ]);

    // 以此尝试最后一个字节，寻找不含屏蔽词的分享码
    for (let lastByte = 0; lastByte < 256; lastByte++) {
      // 加上掩码，奇偶重排
      // 原本的前25个字节放在偶数位，后25个字节放在奇数位
      const reorderedByteArray = Array.from({ length: 25 })
        .flatMap((_, i) => [
          (byteArray[i] + lastByte) & 0xFF,
          (byteArray[i + 25] + lastByte) & 0xFF,
        ]);

      // 编码为Base64
      const shareCode = btoa(String.fromCodePoint(...reorderedByteArray, lastByte));
      if (!blockWords.some(word => new RegExp(word.split("").join("\\+*"), "i").test(shareCode))) {
        return shareCode;
      }
    }

    throw new Error("无法生成有效的分享码");
  }

  function decodeDeck(deckCode: DeckCode): DeckCards {
    const reorderedByteArray = Array.from(atob(deckCode), c => c.codePointAt(0)!);
    if (reorderedByteArray.length !== 51) {
      throw new Error("无效的分享码");
    }
    const lastByte = reorderedByteArray.pop()!;

    // 减去掩码，奇偶重排
    const byteArray = [
      ...Array.from({ length: 25 }).map((_, i) => (reorderedByteArray[2 * i] - lastByte) & 0xFF),
      ...Array.from({ length: 25 }).map((_, i) => (reorderedByteArray[2 * i + 1] - lastByte) & 0xFF),
      0,
    ];

    // 重组为34项12-bit数组
    const shareIds = Array.from({ length: 17 })
      .flatMap((_, i) => [
        (byteArray[i * 3] << 4) + (byteArray[i * 3 + 1] >> 4),
        ((byteArray[i * 3 + 1] & 0xF) << 8) + byteArray[i * 3 + 2],
      ]);
    // 最后一项是多余的
    shareIds.pop();
    const characterCards = shareIds.splice(0, 3).map(shareId => getCharacterCardByShareId(shareId));
    const actionCards = shareIds.map(shareId => getActionCardByShareId(shareId)).filter(card => Boolean(card));
    return { characterCards, actionCards };
  }

  return {
    encodeDeck,
    decodeDeck,
  };
}
