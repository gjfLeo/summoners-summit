import type { ActionCard, CharacterCard, Deck } from "../types";
import { CARD_BY_ENCODE_ID, ENCODE_ID_BY_CARD } from "../cards/encode";
import blockWords from "./block-words";

export function encodeDeckCode(deck: Deck): string {
  // 计算牌组中的卡片编码ID
  const cardEncodingIds: number[] = [
    ...deck.characterCards.map<number>(card => ENCODE_ID_BY_CARD[card]),
    ...Object.entries(deck.actionCards)
      .flatMap<number>(([card, count]) => Array.from(
        { length: count },
        () => ENCODE_ID_BY_CARD[card as ActionCard],
      )),
  ];
  cardEncodingIds.push(0); // 补齐为 34 项 12-bit 数

  // 重组为 51 项 8-bit 数
  const byteArray = new Array(17)
    .fill(0)
    .flatMap((_, i) => [
      cardEncodingIds[i * 2] >> 4,
      ((cardEncodingIds[i * 2] & 0xf) << 4) + (cardEncodingIds[i * 2 + 1] >> 8),
      cardEncodingIds[i * 2 + 1] & 0xff,
    ]);

  // 尝试所有可能的最后一个字节，找到第一个不包含敏感词的分享码
  for (let lastByte = 0; lastByte < 256; lastByte++) {
    // 调整字节顺序，原本的前25个字节放在偶数位，后25个字节放在奇数位
    // 每个字节加上最后一个字节，得到一个新的字节数组
     const original = new Array(25)
      .fill(0)
      .flatMap((_, i) => [byteArray[i] + lastByte, byteArray[i + 25] + lastByte]);
    // 编码为Base64
    const shareCode = btoa(String.fromCodePoint(...original, lastByte));
    // 验证是否包含敏感词
    if (!blockWords.some(blockWord => shareCode.match(new RegExp(blockWord.split("").join("\\+*"), "i")))) {
      return shareCode;
    }
  }

  throw new Error("无法生成有效的分享码");
}

export function decodeDeckCode(shareCode: string): Pick<Deck, "characterCards" | "actionCards"> {
  const byteArray = Array.from(atob(shareCode), (c) => c.codePointAt(0)!);
  if (byteArray.length !== 51) {
    throw new Error("无效的分享码");
  }
  const lastByte = byteArray.pop()!;
  // 减去掩码、奇偶重排
  const reordered = [
    ...new Array(25).fill(0).map((_, i) => byteArray[2 * i] - lastByte), 
    ...new Array(25).fill(0).map((_, i) => byteArray[2 * i + 1] - lastByte),
    0
  ];
  // 重组为 34 项 12-bit 数
  const cardEncodingIds = new Array(17)
    .fill(0)
    .flatMap((_, i) => [
      (reordered[i * 3] << 4) + (reordered[i * 3 + 1] >> 4),
      ((reordered[i * 3 + 1] & 0xf) << 8) + reordered[i * 3 + 2],
    ]);
  cardEncodingIds.pop(); // 最后一项是多余的，共 3 张角色牌和 30 张行动牌
  const characterIds = cardEncodingIds.splice(0, 3);
  const characterCards = characterIds.map((v) => CARD_BY_ENCODE_ID[v] as CharacterCard);
  const actionCards: Deck["actionCards"] = {};
  for (let i = 3; i < cardEncodingIds.length; i++) {
    const card = CARD_BY_ENCODE_ID[cardEncodingIds[i]] as ActionCard;
    if (card) {
      actionCards[card] = (actionCards[card] ?? 0) + 1;
    }
  }
  return {
    characterCards,
    actionCards,
  };
}
