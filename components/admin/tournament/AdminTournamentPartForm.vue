<script lang="ts" setup>
import type { TournamentPart } from "~/types/data";

const part = defineModel<TournamentPart>();
</script>

<template>
  <NCard>
    {{ part }}
  </NCard>
</template>
