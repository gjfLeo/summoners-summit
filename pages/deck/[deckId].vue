<template>
  <!-- 角色卡 -->
  <div grid gap-2 style="grid-template-columns: 1fr repeat(3, minmax(0, 8rem)) 1fr;">
    <div />
    <template v-for="(card, i) in characterCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
    <div class="self-end justify-self-start">
      <NuxtLink :to="`/team/${getTeamId(characterCards)}`" no-prefetch>
        <n-button>查看阵容数据</n-button>
      </NuxtLink>
    </div>
  </div>
  <!-- 行动卡 -->
  <div class="grid mt gap-2" grid-cols="6 md:10">
    <template v-for="(card, i) in actionCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>

  <n-h3>对局记录</n-h3>
  <GameRecords :games="games" />
</template>

<script lang="ts" setup>
import { deckById } from "~/data";
import type { ActionCard } from "~/utils/types";

definePageMeta({
  validate: (route) => {
    const id = route.params.deckId as string;
    const deck = deckById[id];
    if (!deck) return false;
    return true;
  },
});

useHead({ title: "牌组详情 | 召唤之巅" });

const route = useRoute();
const deckId = route.params.deckId as string;
const deck = deckById[deckId];

const characterCards = deck.characterCards;
const actionCards = Object.entries(deck.actionCards).flatMap(([card, count]) => Array.from({ length: count }, () => card as ActionCard));

const { games } = useGameList({ deckId });
</script>
