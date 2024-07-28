<template>
  <div un-flex="~ col gap-4">
    <div>
      <NTooltip trigger="hover">
        <template #default>{{ t("admin.card.updateDataDescription") }}</template>
        <template #trigger><NButton @click="updateData">{{ t("admin.card.updateData") }}</NButton></template>
      </NTooltip>
    </div>
    <div>
      <NText class="text-sm">{{ t('admin.card.updateDataWarning') }}</NText>
    </div>
    <div un-grid="~ cols-[repeat(auto-fit,minmax(2rem,auto))] gap-1">
      <TransitionGroup name="common-transition-group">
        <template v-for="cardId in characterCardIds" :key="cardId">
          <CardAvatar :card="cardId" class="w-full" />
        </template>
      </TransitionGroup>
    </div>
    <div un-grid="~ cols-[repeat(auto-fit,minmax(2rem,auto))] gap-1">
      <TransitionGroup name="common-transition-group">
        <template v-for="cardId in characterCardIds" :key="cardId">
          <CardImage :card="cardId" />
        </template>
      </TransitionGroup>
    </div>
    <div un-grid="~ cols-[repeat(auto-fit,minmax(2rem,auto))] gap-1">
      <TransitionGroup name="common-transition-group">
        <template v-for="cardId in actionCardIds" :key="cardId">
          <CardImage :card="cardId" />
        </template>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useLocales();
useHead({ title: t("site.titles.admin.cards") });

const message = useMessage();

const {
  characterCardIds,
  actionCardIds,
  fetchCardData,
  fetchGameVersionData,
} = useSharedData();

async function updateData() {
  await $fetch("/api/v3/cards/updateData");
  message.success(t("admin.message.SUCCESS"));
  return Promise.all([
    fetchCardData(),
    fetchGameVersionData(),
  ]);
}
</script>
