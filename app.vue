<script setup lang="ts">
import { appName } from "~/constants";

useHead({
  title: appName,
});
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
</style>
