<template>
  <ClientOnly>
    <template #default>
      <GameVersionSelect
        v-model:value="gameVersion"
        :clearable="false"
        :full="false"
        class="w-6.25rem"
      />
    </template>
    <template #fallback>
      <NSelect loading placeholder="" class="w-6.25rem" />
    </template>
  </ClientOnly>
</template>

<script lang="ts" setup>
const { gameVersion } = useGameVersion();
</script>
