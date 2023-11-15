<template>
  <div class="flex items-center justify-center md:display-none">
    <NTooltip trigger="hover" placement="top">
      <template #default>
        <span>{{ card }}</span>
      </template>
      <template #trigger>
        <CardImage :card="card" class="m-block--2 h-12" />
      </template>
    </NTooltip>
  </div>
  <div class="display-none items-center gap-2 md:flex">
    <CardImage :card="card" class="m-block--2 h-12" />
    <span>{{ card }}</span>
  </div>
</template>

<script lang="ts" setup>
import { NTooltip } from "naive-ui";
import type { ActionCard, CharacterCard } from "~/utils/cards";

defineProps<{
  card: CharacterCard | ActionCard;
}>();
</script>
