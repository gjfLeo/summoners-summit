<template>
  {{ width }}
  {{ height }}
</template>

<script lang="ts" setup>
const { width, height } = useWindowSize();
</script>
