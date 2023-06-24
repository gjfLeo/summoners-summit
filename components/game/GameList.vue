<template>
  <div class="grid justify-center justify-items-center row-gap-4 lg:grid-cols-3 md:grid-cols-2">
    <GameListItem
      v-for="id in list" :id="id"
      :key="id"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  list: string[];
}>();
</script>
