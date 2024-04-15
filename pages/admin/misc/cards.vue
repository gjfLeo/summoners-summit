<script lang="ts" setup>
const { t } = useI18n();
const message = useMessage();

const { data, refresh } = await useFetch("/api/v3/cards/getCards");

async function updateData() {
  const res = await $fetch("/api/v3/cards/updateData");
  if (res.success) {
    message.success(t("action.message.success"));
    return refresh();
  }
  else {
    message.error(res.message ?? t("action.message.error"));
  }
}
</script>

<template>
  <div flex="~ col gap-4">
    <div>
      <NTooltip trigger="hover">
        <template #default>{{ t("updateDataDescription") }}</template>
        <template #trigger><NButton @click="updateData">{{ t("updateData") }}</NButton></template>
      </NTooltip>
    </div>
    <div grid="~ cols-[repeat(auto-fit,minmax(50px,auto))] gap-1">
      <template v-for="(card, cardId) in data?.characterCards" :key="cardId">
        <CardAvatar :card="card" />
      </template>
    </div>
    <div grid="~ cols-[repeat(auto-fit,minmax(50px,auto))] gap-1">
      <template v-for="(card, cardId) in data?.characterCards" :key="cardId">
        <CardImage :card="card" />
      </template>
    </div>
    <div grid="~ cols-[repeat(auto-fit,minmax(50px,auto))] gap-1">
      <template v-for="(card, cardId) in data?.actionCards" :key="cardId">
        <CardImage :card="card" />
      </template>
    </div>
  </div>
</template>

<i18n lang="yaml">
zh:
  updateData: 更新卡牌数据
  updateDataDescription: 从第三方库（genshin-db）获取最新游戏版本的卡牌数据
en:
  updateData: Update card data
  updateDataDescription: Get the latest card data from the third-party library (genshin-db)
</i18n>
