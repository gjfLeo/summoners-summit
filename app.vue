<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { appName } from "~/constants";

useHead({
  title: appName,
});
</script>

<style>
:root {
  font-size: 14px;
}

html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #f2f4f2;
  @apply font-sans text-base;
}

html.dark {
  background: #222;
  color: white;
}

pre {
  @apply font-mono;
}
</style>
