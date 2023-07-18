<template>
  <TournamentList :list="list" />
</template>

<script lang="ts" setup>
import { tournamentById } from "~/data";

useHead({ title: "赛事 | 召唤之巅" });

const gameVersion = useGameVersion();

const list = computed(() =>
  Object.entries(tournamentById)
    .filter(([_id, tournament]) => !gameVersion.value || tournament.gameVersion === gameVersion.value)
    .map(([id]) => id),
);
</script>
