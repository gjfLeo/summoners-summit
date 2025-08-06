<template>
  <NEmpty>
    <template #icon>
      <div class="i-mingcute:empty-box-line" />
    </template>
    <template #default>
      {{ t('site.messages.gameVersionHasNoData') }}
    </template>
  </NEmpty>
</template>

<script lang="ts" setup>
const { t } = useLocales();
</script>
