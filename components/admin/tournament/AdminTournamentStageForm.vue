<script lang="ts" setup>
import type { TournamentStage } from "~/types/data";

const props = defineProps<{
  index: number;
  editing?: boolean;
}>();

defineEmits<{
  (e: "edit"): void;
  (e: "save"): void;
  (e: "add"): void;
  (e: "delete"): void;
}>();

const stage = defineModel<TournamentStage>();

const { t } = useI18n();

const defaultName = computed(() => t("main.tournament.stageNameDefault", [props.index]));
</script>

<template>
  <NCard>
    <template #header>
      <div flex="~ gap-2">
        <span>{{ defaultName }}</span>
        <span v-if="stage?.name?.zh">{{ stage?.name?.zh }}</span>
      </div>
    </template>
    <template #header-extra>
      <div flex="~ gap-2">
        <template v-if="editing">
          <CommonIconButton v-if="!stage" icon="i-carbon:add" @click="$emit('add')" />
          <CommonConfirmButton v-if="stage" :text="t('admin.action.delete')" @click="$emit('delete')">
            <CommonIconButton icon="i-carbon:trash-can" danger>t('admin.action.delete')</CommonIconButton>
          </CommonConfirmButton>
          <!-- <CommonIconButton icon="i-carbon:save" @click="$emit('save')">保存</CommonIconButton> -->
        </template>
        <template v-else>
          <!-- <CommonIconButton icon="i-carbon:edit" @click="$emit('edit')">编辑</CommonIconButton> -->
        </template>
      </div>
    </template>
    <template #default>
      <CommonTransition>
        <div v-if="stage && editing">
          <NInputLocale v-model:value="stage.name" />
        </div>
        <div v-else>
          {{ stage }}
        </div>
      </CommonTransition>
    </template>
  </NCard>
</template>
