<script lang="ts" setup>
definePageMeta({ title: "site.titles.admin.tournaments" });

const { data, pending, refresh } = await useFetch("/api/v3/tournaments/list");

const tournaments = computed(() => data.value?.tournaments ?? []);
</script>

<template>
  <div flex="~ col gap-4">
    <div flex="~ gap-2">
      <NFormItem :show-label="false" :show-feedback="false" />
    </div>
    <div>{{ tournaments }}</div>
  </div>
</template>
