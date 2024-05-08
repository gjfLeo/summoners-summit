<script lang="ts" setup>
const { t } = useI18n();
const message = useMessage();

const { data, refresh } = await useFetch("/api/v3/cards/getCards");

async function updateData() {
  await $fetch("/api/v3/cards/updateData");
  message.success(t("admin.message.SUCCESS"));
  return refresh();
}
</script>

<template>
  <div un-flex="~ col gap-4">
    <div>
      <NTooltip trigger="hover">
        <template #default>{{ t("admin.card.updateDataDescription") }}</template>
        <template #trigger><NButton @click="updateData">{{ t("admin.card.updateData") }}</NButton></template>
      </NTooltip>
    </div>
    <div un-grid="~ cols-[repeat(auto-fit,minmax(50px,auto))] gap-1">
      <template v-for="(card, cardId) in data?.characterCards" :key="cardId">
        <CardAvatar :card="card" />
      </template>
    </div>
    <div un-grid="~ cols-[repeat(auto-fit,minmax(50px,auto))] gap-1">
      <template v-for="(card, cardId) in data?.characterCards" :key="cardId">
        <CardImage :card="card" />
      </template>
    </div>
    <div un-grid="~ cols-[repeat(auto-fit,minmax(50px,auto))] gap-1">
      <template v-for="(card, cardId) in data?.actionCards" :key="cardId">
        <CardImage :card="card" />
      </template>
    </div>
  </div>
</template>
