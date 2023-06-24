<template>
  <div class="grid gap-4 transition lg:grid-cols-3 md:grid-cols-2">
    <template v-for="id in list" :key="id">
      <TournamentListItem :id="id" />
    </template>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  list: string[];
}>();
</script>
