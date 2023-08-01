<template>
  {{ player }}
</template>

<script lang="ts" setup>
defineProps<{
  player: string | number;
}>();
</script>
