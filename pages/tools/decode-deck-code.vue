<template>
  <div u-flex="~ col gap-4">
    <NInputGroup>
      <NInput v-model:value="shareCode" placeholder="请输入牌组分享码" />
      <NButton @click="resultDeck = decode()">解析</NButton>
    </NInputGroup>
    <template v-if="resultDeck">
      <!-- 角色牌 -->
      <div u-grid="~ gap-2 cols-6 md:cols-10">
        <template v-for="(card, i) in characterCards" :key="i">
          <CardImage :card="card" class="w-100%" />
        </template>
      </div>
      <!-- 行动牌 -->
      <div u-grid="~ gap-2 cols-6 md:cols-15">
        <template v-for="(card, i) in actionCards" :key="i">
          <CardImage :card="card" class="w-100%" />
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { decodeDeckCode } from "~/utils/decks";
import type { ActionCard, Deck } from "~/utils/types";

useHead({ title: "牌组分享码解析" });

const message = useMessage();

const shareCode = ref("");
const resultDeck = ref<Pick<Deck, "characterCards" | "actionCards">>();

const characterCards = computed(() => resultDeck.value?.characterCards);
const actionCards = computed(() => Object.entries(resultDeck.value?.actionCards ?? {})
  .flatMap(([card, count]) => Array.from({ length: count as number }, () => card as ActionCard)));

function decode() {
  try {
    return decodeDeckCode(shareCode.value);
  }
  catch (e: any) {
    message.error(e.message);
    return undefined;
  }
}
</script>
