<script lang="ts" generic="Data" setup>
const data = defineModel<Data>();

const editing = ref(false);
</script>

<template>
  <NCard title="1">
    <template #header-extra>
      <template v-if="!editing">
        <NButton text @click="editing = true"><div class="i-carbon:edit" /></NButton>
      </template>
      <template v-else>
        <NButton text @click="editing = false"><div class="i-carbon:save" /></NButton>
      </template>
    </template>

    <template #default>
      <template v-if="!editing">
        <slot name="view" :data="data" />
      </template>
      <template v-else>
        <slot name="edit" :data="data" />
      </template>
    </template>
  </NCard>
</template>
