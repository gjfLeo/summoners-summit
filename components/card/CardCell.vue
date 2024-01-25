<template>
  <div u-flex="~ items-center justify-center" class="md:hidden">
    <NTooltip>
      <template #default>
        <span>{{ card }}</span>
      </template>
      <template #trigger>
        <CardImage :card="card" class="m-block--2 h-12 border-rd-2px" />
      </template>
    </NTooltip>
  </div>
  <div u-flex="items-center gap-2" class="hidden md:flex">
    <CardImage :card="card" class="m-block--2 h-12 border-rd-2px" />
    <span>{{ card }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { ActionCard, CharacterCard } from "~/utils/cards";

defineProps<{
  card: CharacterCard | ActionCard;
}>();
</script>
