<template>
  <!-- 角色卡 -->
  <div grid gap-2 style="grid-template-columns: 1fr repeat(3, minmax(0, 8rem)) 1fr;">
    <div />
    <template v-for="(card, i) in characterCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
    <div class="self-end justify-self-start">
      <NuxtLink :to="`/team/${teamId}`" prefetch>
        <NButton>查看阵容数据</NButton>
      </NuxtLink>
    </div>
  </div>
  <!-- 行动卡 -->
  <div class="grid mt gap-2" grid-cols="6 md:10">
    <template v-for="(card, i) in actionCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>

  <NH3>对局记录</NH3>
  <GameRecords :games="gameList" />
</template>

<script lang="ts" setup>
import { NButton, NH3 } from "naive-ui";
import type { ActionCard } from "~/utils/types";

useHead({ title: "牌组详情 | 召唤之巅" });

const route = useRoute();
const deckId = route.params.deckId as string;
const { deck } = await useApiDeck(deckId);

const characterCards = deck.characterCards;
const actionCards = Object.entries(deck.actionCards).flatMap(([card, count]) => Array.from({ length: count as number }, () => card as ActionCard));

const teamId = getTeamId(characterCards);

const { gameList } = await useApiGameList({ deckId });

// const cardIndices = [
//   ...characterCards.map(card => characterCardOrder[card] + 1),
//   ...actionCards.map(card => actionCardOrder[card] + ALL_CHARACTER_CARDS.length + 1),
// ];

// const bytes = `${cardIndices.map(index => index.toString(16).padStart(3, "0")).join("")}0`;
// const bytesArray = Array.from({ length: 50 }, (_, i) => bytes.slice(i * 2, 2));
// console.log(bytesArray);
// function decode(hexString: string) {
//   const byteArray: string[] = [];
//   for (let i = 0; i < hexString.length; i += 2) {
//     byteArray.push(hexString.substring(i, i + 2));
//   }

//   const lastByte = Number.parseInt(byteArray[50], 16);

//   // 对前 50 位进行无符号减法
//   for (let i = 0; i < 50; i++) {
//     const currentByte = Number.parseInt(byteArray[i], 16);
//     const result = (currentByte - lastByte + 256) % 256; // 执行无符号减法操作
//     byteArray[i] = result.toString(16).toUpperCase().padStart(2, "0"); // 转换回16进制字符串形式
//   }

//   const rearrangedArray: string[] = [];

//   // 调整顺序，将前25字节放置在位置2x-1，后25字节放置在位置2x-50
//   for (let i = 0; i < 25; i++) {
//     rearrangedArray[i] = byteArray[i * 2];
//     rearrangedArray[i + 25] = byteArray[i * 2 + 1];
//   }

//   const numberArray = [...rearrangedArray.join("").matchAll(/.{1,3}/g)].map(s => Number.parseInt(s, 16));
//   return numberArray;
// }

// const code = "hPPjSp+PhBOzTNKQjFODZhORjLPzZxqRjcMjdC2SjsOzeDaSjuNDeT+TjzSTjkSUj7OD";
// const numberArray = decode(base64.parse(code).toString());

// const cardArray = numberArray.map(id => id <= ALL_CHARACTER_CARDS.length ? ALL_CHARACTER_CARDS[id - 1] : ALL_ACTION_CARDS[id - ALL_CHARACTER_CARDS.length - 1]);

// console.log(cardArray);
</script>
