<script lang="ts" setup>
definePageMeta({ title: "site.titles.admin.tournaments" });

const { data } = await useFetch("/api/v3/tournaments/list");

const tournaments = computed(() => data.value?.tournaments ?? []);

const gameVersion = ref<string>();
</script>

<template>
  <div flex="~ col gap-4">
    <div flex="~ gap-2">
      <GameVersionSelect v-model:value="gameVersion" />
    </div>
    <div>{{ tournaments }}</div>
  </div>
</template>
