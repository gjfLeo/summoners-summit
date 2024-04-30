<script lang="ts" setup>
import type { Locales } from "~/types/data";

definePageMeta({ title: "site.titles.admin.tournaments" });

const { t, locale } = useI18n<unknown, Locales>();

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
    <div>
      <template v-for="tournament in tournaments" :key="tournament.id">
        <NuxtLinkLocale
          :to="`/admin/tournament/${tournament.id}`"
        >
          {{ tournament.name[locale] }}
        </NuxtLinkLocale>
      </template>
    </div>
  </div>
</template>
