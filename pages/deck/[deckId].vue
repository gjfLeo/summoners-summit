<template>
  <!-- 角色卡 -->
  <div u-grid="~ gap-2" style="grid-template-columns: 1fr repeat(3, minmax(0, 8rem)) 1fr;">
    <div />
    <template v-for="(card, i) in characterCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
    <div class="flex flex-col self-end justify-self-start gap-2">
      <NButton @click="copyDeckShareCode">复制分享码</NButton>
      <NuxtLinkLocale :to="`/team/${teamId}`" prefetch>
        <NButton>查看阵容数据</NButton>
      </NuxtLinkLocale>
    </div>
  </div>
  <!-- 行动卡 -->
  <div u-grid="~ gap-2 cols-6 md:cols-10" class="mt">
    <template v-for="(card, i) in actionCards" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>

  <NTabs size="large">
    <NTabPane name="gameRecords" tab="对局记录">
      <GameRecords :games="gameList" />
    </NTabPane>
    <NTabPane name="similar" tab="相似牌组">
      <DeckSimilar :similar-map="similarMap" />
    </NTabPane>
  </NTabs>
</template>

<script lang="ts" setup>
import { getTeamIdByCharacters } from "~/utils/cards";
import type { ActionCard } from "~/utils/types";

useHead({ title: "牌组详情 | 召唤之巅" });

const route = useRoute();
const deckId = route.params.deckId as string;
const { deck } = await useApiDeck(deckId);
const { similarMap } = await useApiDeckSimilar(deckId);

const characterCards = deck.characterCards;
const actionCards = Object.entries(deck.actionCards).flatMap(([card, count]) => Array.from({ length: count as number }, () => card as ActionCard));

const teamId = getTeamIdByCharacters(characterCards);

const { gameList } = await useApiGameList({ deckId });

const { copy: copyDeckShareCode } = useCopyDeckShareCode(deck);
</script>
