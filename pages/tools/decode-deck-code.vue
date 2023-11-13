<template>
  <NInputGroup>
    <NInput v-model:value="shareCode" class="font-mono" />
    <NButton @click="resultDeck = decode()">搜索</NButton>
  </NInputGroup>
  <template v-if="resultDeck">
    <!-- 角色牌 -->
    <div class="grid mt gap-2" grid-cols="6 md:10">
      <template v-for="(card, i) in characterCards" :key="i">
        <CardImage :card="card" class="w-100%" />
      </template>
    </div>
    <!-- 行动牌 -->
    <div class="grid mt gap-2" grid-cols="6 md:15">
      <template v-for="(card, i) in actionCards" :key="i">
        <CardImage :card="card" class="w-100%" />
      </template>
    </div>
  </template>
  <pre>{{ resultDeck }}</pre>
</template>

<script lang="ts" setup>
import { NButton, NInput, NInputGroup } from "naive-ui";
import { decodeDeckCode } from "~/utils/decks";
import type { ActionCard, Deck } from "~/utils/types";

useHead({ title: "牌组分享码解码" });

const shareCode = ref("AxBQ9BAPA0Aw9UwPBGDA9rwPC5DA+cEPDMCQ/MkPDdDg/eEQDqEQC+IQDrEgDvEQD+AA");
const resultDeck = ref<Pick<Deck, "characterCards" | "actionCards">>();

const characterCards = computed(() => resultDeck.value?.characterCards);
const actionCards = computed(() => Object.entries(resultDeck.value?.actionCards ?? {})
  .flatMap(([card, count]) => Array.from({ length: count as number }, () => card as ActionCard)));

function decode() {
  return decodeDeckCode(shareCode.value);
}
</script>
