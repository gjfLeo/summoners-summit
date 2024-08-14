<template>
  <div un-flex="~ col gap-4">
    <NInputGroup>
      <NInput v-model:value="shareCode" :placeholder="$t('main.tools.decodeDeckCode.inputPlaceholder')" />
      <NButton @click="result = decode()">{{ $t('main.tools.decodeDeckCode.decode') }}</NButton>
    </NInputGroup>
    <template v-if="result">
      <!-- 角色牌 -->
      <div u-grid="~ gap-2 cols-6 md:cols-10">
        <template v-for="(card, i) in result.characterCards" :key="i">
          <CardImage :card="card" class="w-100%" />
        </template>
      </div>
      <!-- 行动牌 -->
      <div u-grid="~ gap-2 cols-6 md:cols-15">
        <template v-for="(card, i) in result.actionCards" :key="i">
          <CardImage :card="card" class="w-100%" />
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { DeckCards } from "~/types";

const { t } = useI18n();
useHead({ title: t("site.titles.main.decodeDeckCode") });

const message = useMessage();

const { decodeDeck } = useDeckEncoder();

const shareCode = ref("");
const result = ref<DeckCards>();

function decode() {
  try {
    return decodeDeck(shareCode.value);
  }
  catch (e) {
    if (e instanceof Error) {
      message.error(e.message);
    }
    return undefined;
  }
}
</script>
