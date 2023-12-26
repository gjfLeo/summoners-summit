<template>
  <NLayoutContent
    class="m-inline-auto max-w-6xl p-4"
    :style="{ minHeight: `calc(100vh - ${LAYOUT_HEADER_HEIGHT} - ${LAYOUT_FOOTER_HEIGHT})` }"
  >
    <NuxtPage />
  </NLayoutContent>
</template>

<script lang="ts" setup>
import { LAYOUT_FOOTER_HEIGHT, LAYOUT_HEADER_HEIGHT } from "@/configs/layout";
</script>
