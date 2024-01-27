<template>
  <template v-for="(list, version) in listByVersion" :key="version">
    <NH2>{{ version }}</NH2>
    <TournamentList :list="list" />
  </template>
</template>

<script lang="ts" setup>
import type { Tournament } from "~/utils/types";

const { t } = useI18n();
useHead({ title: t("site.titleFormat", [t("menu.tournaments"), t("site.name")]) });

const { gameVersion } = useGameVersion({ detect: true });

const { tournamentList } = await useApiTournamentList(gameVersion.value);

const listByVersion = tournamentList.reduce<Record<string, Tournament[]>>(
  (map, tournament) => {
    const gameVersion = tournament.gameVersion;
    const list = map[gameVersion] ?? [];
    list.push(tournament as Tournament);
    map[gameVersion] = list;
    return map;
  },
  {},
);
</script>
