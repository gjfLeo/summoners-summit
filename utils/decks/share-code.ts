import CryptoJS from "crypto-js";
import { ALL_ACTION_CARDS, ALL_CHARACTER_CARDS, actionCardOrder, characterCardOrder } from "../cards";
import type { ActionCard, Deck } from "../types";
import blockWords from "./block-words";

export function encodeDeckCode(deck: Deck): string {
  // 计算牌组中的卡片编码ID
  const cardEncodingIds: number[] = [
    ...deck.characterCards.map<number>(card => characterCardOrder[card] + 1),
    ...Object.entries(deck.actionCards)
      .flatMap<number>(([card, count]) => Array.from(
        { length: count },
        () => actionCardOrder[card as ActionCard] + ALL_CHARACTER_CARDS.length + 1,
      )),
  ];

  // 转为12位二进制字符串，连接成50个字节
  const encodingString = cardEncodingIds.map(id => id.toString(2).padStart(12, "0")).concat(["0000"]).join("");
  // 调整字节顺序，原本的前25个字节放在偶数位，后25个字节放在奇数位
  const byteArray = new Array<string>(50);
  for (let i = 0; i < 25; i++) {
    byteArray[i * 2] = encodingString.slice(8 * i, 8 * (i + 1));
    byteArray[i * 2 + 1] = encodingString.substring(8 * (i + 25), 8 * (i + 26));
  }

  // 尝试所有可能的最后一个字节，找到第一个不包含敏感词的分享码
  for (let lastByte = 0; lastByte < 256; lastByte++) {
    // 每个字节加上最后一个字节，得到一个新的字节数组
    const u8Array = new Uint8Array(byteArray.map(byte => Number.parseInt(byte, 2) + lastByte).concat([lastByte]));
    // 将每个字节转为2位十六进制字符串，拼接成明文
    const byteString = [...u8Array.values()].map(byte => byte.toString(16).padStart(2, "0")).join("");
    // 编码为Base64
    const wordArray = CryptoJS.enc.Hex.parse(byteString);
    const shareCode = CryptoJS.enc.Base64.stringify(wordArray);
    // 验证是否包含敏感词
    if (!blockWords.some(blockWord => shareCode.match(new RegExp(blockWord.split("").join("\\+*"), "i")))) {
      return shareCode;
    }
  }

  throw new Error("无法生成有效的分享码");
}

export function decodeDeckCode(shareCode: string): Pick<Deck, "characterCards" | "actionCards"> {
  const wordArray = CryptoJS.enc.Base64.parse(shareCode);
  const byteString = CryptoJS.enc.Hex.stringify(wordArray);

  const bytes = byteString.match(/.{2}/g) ?? [];
  const lastByte = Number.parseInt(bytes[bytes.length - 1], 16);
  const u8Array = new Uint8Array(bytes.slice(0, bytes.length - 1).map(byte => Number.parseInt(byte, 16) - lastByte));

  const reorderedByteArray = new Array<string>(50);
  for (let i = 0; i < 25; i++) {
    reorderedByteArray[i] = u8Array[i * 2].toString(2).padStart(8, "0");
    reorderedByteArray[i + 25] = u8Array[i * 2 + 1].toString(2).padStart(8, "0");
  }

  const cardEncodingIds = reorderedByteArray.join("").match(/.{12}/g)!.map(v => Number.parseInt(v, 2));
  const characterCards: Deck["characterCards"] = [
    ALL_CHARACTER_CARDS[cardEncodingIds[0]],
    ALL_CHARACTER_CARDS[cardEncodingIds[1]],
    ALL_CHARACTER_CARDS[cardEncodingIds[2]],
  ];
  const actionCards: Deck["actionCards"] = {};
  for (let i = 3; i < cardEncodingIds.length; i++) {
    const card = ALL_ACTION_CARDS[cardEncodingIds[i] - ALL_CHARACTER_CARDS.length];
    actionCards[card] = (actionCards[card] ?? 0) + 1;
  }
  return {
    characterCards,
    actionCards,
  };
}
