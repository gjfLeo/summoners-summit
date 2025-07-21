<template>
  <NSpin :show="status === 'pending'">
    <NTabs
      v-model:value="rankId"
      type="card"
      placement="left"
      tab-style="justify-content: center"
      class="h-content"
    >
      <NTabPane
        name="add"
        :tab="() => h('div', { class: 'i-mingcute:add-line' })"
      >
        <AdminRanksImport @done="handleImportDone" />
      </NTabPane>
      <NTabPane
        v-for="id in rankIds" :key="id"
        :name="id"
        :tab="id"
      >
        <NDataTable
          :data="ranks?.ranks"
          :columns="columns"
          :loading="ranksLoading"
          flex-height
          class="h-full"
        />
      </NTabPane>
    </NTabs>
  </NSpin>
</template>

<script lang="ts" setup>
const { t } = useLocales();
useHead({ title: t("site.titles.admin.ranks") });

const { data, status, refresh } = await useFetch("/api/v4/players-ranks");

const rankIds = computed(() => data.value?.map(item => item.id) ?? []);
const rankId = ref(rankIds.value[0]);
const ranks = ref<Ranks>();
const ranksLoading = ref(false);

watch(rankId, async (rankId) => {
  if (rankIds.value.includes(rankId)) {
    ranksLoading.value = true;
    ranks.value = await $fetch<Ranks>(`/api/v4/players-ranks/${rankId}`);
    ranksLoading.value = false;
  }
}, { immediate: true });

const columns: DataTableColumn<Ranks["ranks"][number]>[] = [
  {
    key: "rank",
    title: t("main.player.rank"),
  },
  {
    key: "uid",
    title: t("main.player.uid"),
  },
  {
    key: "nickname",
    title: t("main.player.nickname"),
  },
  {
    key: "score",
    title: t("main.player.score"),
  },
];

async function handleImportDone(id: string) {
  await refresh();
  rankId.value = id;
}
</script>
