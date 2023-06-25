<template>
  <TournamentList :list="list" />
</template>

<script lang="ts" setup>
import { tournamentById } from "~/data";

useHead({ title: "赛事 | 召唤之巅" });

const list = Object.keys(tournamentById);
</script>
