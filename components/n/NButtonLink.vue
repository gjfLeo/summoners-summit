<script lang="ts" setup>
withDefaults(
  defineProps<{
    to: string;
    prefetch?: boolean;
  }>(),
  {
    prefetch: false,
  },
);
</script>

<template>
  <NuxtLinkLocale :to="to" :prefetch="prefetch">
    <NButton v-bind="$attrs">
      <slot />
    </NButton>
  </NuxtLinkLocale>
</template>
