<script lang="ts" setup>
import type { TournamentStage } from "~/types/data";

const props = defineProps<{
  index: number;
  editing?: boolean;
}>();

defineEmits<{
  (e: "delete"): void;
}>();

const stage = defineModel<TournamentStage>({ required: true });

const { t } = useI18n();

const defaultName = computed(() => t("main.tournament.stageNameDefault", [props.index]));
</script>

<template>
  <NCard>
    <template #header>
      <div flex="~ gap-2">
        <span>{{ defaultName }}</span>
        <span v-if="stage.name?.zh">{{ stage.name?.zh }}</span>
      </div>
    </template>
    <template #header-extra>
      <div flex="~ gap-2">
        <template v-if="editing">
          <CommonConfirmButton :text="t('admin.action.delete')" @click="$emit('delete')">
            <CommonIconButton icon="i-carbon:trash-can" danger>{{ t('admin.action.delete') }}</CommonIconButton>
          </CommonConfirmButton>
        </template>
      </div>
    </template>
    <template #default>
      <CommonTransition v-if="stage">
        <div v-if="editing">
          <NInputLocale v-model:value="stage.name" />
        </div>
        <div v-else>
          {{ stage }}
        </div>
      </CommonTransition>
    </template>
  </NCard>
</template>
