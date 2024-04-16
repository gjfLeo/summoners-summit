<script lang="ts" setup>
import type { Ranks } from "~/types/data";

const { data, pending } = await useFetch("/api/v3/ranks/ids");

const rankIds = computed(() => data.value?.rankIds.toReversed() ?? []);
const rankId = ref(rankIds.value[0]);
const ranks = ref<Ranks>();

watch(rankId, async (rankId) => {
  if (rankIds.value.includes(rankId)) {
    const res = await $fetch("/api/v3/ranks/get", {
      params: { id: rankId },
    });
    ranks.value = res.ranks;
  }
}, { immediate: true });

const columns: DataTableColumn<Ranks["ranks"][number]>[] = [
  {
    key: "rank",
    title: "名次",
  },
  {
    key: "uid",
    title: "UID",
  },
  {
    key: "nickname",
    title: "昵称",
  },
  {
    key: "score",
    title: "积分",
  },
];
</script>

<template>
  <NSpin :show="pending">
    <NTabs
      v-model:value="rankId"
      type="card"
      placement="left"
      tab-style="justify-content: center"
      class="h-content"
    >
      <NTabPane
        name="add"
        :tab="() => h('div', { class: 'i-carbon:add' })"
      >
        <AdminRanksImportTable />
      </NTabPane>
      <NTabPane
        v-for="id in rankIds" :key="id"
        :name="id"
        :tab="id"
      >
        <NDataTable
          :data="ranks?.ranks"
          :columns="columns"
          flex-height
          class="h-full"
        />
      </NTabPane>
    </NTabs>
  </NSpin>
</template>
