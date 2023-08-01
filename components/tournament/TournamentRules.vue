<template>
  {{ rules }}
</template>

<script lang="ts" setup>
import type { TournamentRules } from "~/utils/types";

defineProps<{
  rules: TournamentRules;
}>();
</script>
