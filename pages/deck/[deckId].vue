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
</script>
