<script lang="ts" setup>
definePageMeta({ title: "site.titles.admin.tournaments" });

const { t } = useI18n();

const { data } = await useFetch("/api/v3/tournaments/list");

const tournaments = computed(() => data.value?.tournaments ?? []);

const gameVersion = ref<string>();
</script>

<template>
  <div flex="~ col gap-4">
    <div flex="~ gap-2">
      <div><GameVersionSelect v-model:value="gameVersion" /></div>
      <div class="ml-auto" />
      <NButtonLink type="primary" secondary to="/admin/tournament">{{ t("admin.action.add") }}</NButtonLink>
    </div>
    <div>{{ tournaments }}</div>
  </div>
</template>
