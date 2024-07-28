<template>
  <div class="w-full">
    <NInput v-bind="$attrs" v-model:value="value.zh">
      <template #suffix>
        <NButton text><div class="i-mingcute:translate-2-line" @click="i18nVisible = true" /></NButton>
      </template>
    </NInput>
    <NModal
      v-model:show="i18nVisible"
      preset="dialog"
      :show-icon="false"
      :show-title="false"
      :closable="false"
    >
      <NForm
        :model="value"
        :show-feedback="false"
        label-placement="left"
      >
        <NFormItem label="zh" path="zh">
          <NInput v-model:value="value.zh" />
        </NFormItem>
        <NFormItem label="en" path="en" class="mt-2">
          <NInput v-model:value="value.en" />
        </NFormItem>
      </NForm>
    </NModal>
  </div>
</template>

<script lang="ts" setup>
import type { Locales } from "~/types/data";

const value = defineModel<Partial<Record<Locales, string>>>("value", { required: true });

const i18nVisible = ref(false);
</script>
