<template>
  <!-- 角色卡 -->
  <div grid gap-2 style="grid-template-columns: 1fr repeat(3, minmax(0, 8rem)) 1fr;">
    <div />
    <template v-for="(card, i) in characterCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
    <div class="self-end justify-self-start">
      <!-- <NuxtLink :to="`/team/${getTeamId(characterCards)}`" no-prefetch>
        <n-button>查看阵容数据</n-button>
      </NuxtLink> -->
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
import { NH3 } from "naive-ui";
import type { ActionCard } from "~/utils/types";

useHead({ title: "牌组详情 | 召唤之巅" });

const route = useRoute();
const deckId = route.params.deckId as string;
const { data } = await useFetch(`/api/deck/${deckId}`);
if (!data.value) throw createError("获取数据失败");
const { deck } = data.value;
if (!deck) throw createError("数据不存在");

const characterCards = deck.characterCards;
const actionCards = Object.entries(deck.actionCards).flatMap(([card, count]) => Array.from({ length: count as number }, () => card as ActionCard));

const { gameList } = await useApiGameList({ deckId });
</script>
