<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});

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
      <NButton @click="updateData">{{ t("updateData") }}</NButton>
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
</i18n>
