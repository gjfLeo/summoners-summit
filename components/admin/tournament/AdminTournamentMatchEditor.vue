<script lang="ts" setup>
import type { Match, TournamentId } from "~/types/data";

const props = defineProps<{
  tournamentId: TournamentId;
}>();

const { t } = useI18n();

const visible = ref(false);
const match = ref<Partial<Match>>({
  tournamentId: props.tournamentId,
});
const resolveRef = ref<(v: string) => void>();
const rejectRef = ref<() => void>();

// const rules: FormRules = {

// };

async function create() {
  match.value = {
    tournamentId: props.tournamentId,
    playerA: {
      nickname: "",
    },
    playerB: {
      nickname: "",
    },
    gameIds: [],
    isFinal: undefined,
    video: undefined,
    winner: undefined,
  };

  visible.value = true;

  return new Promise<string>((resolve, reject) => {
    resolveRef.value = resolve;
    rejectRef.value = reject;
  });
};

function confirm() {
}

function cancel() {
  rejectRef.value?.();
  visible.value = false;
}

defineExpose({
  create,
});
</script>

<template>
  <NModal
    v-model:show="visible"
    preset="dialog" :show-title="false" :show-icon="false"
    :closable="false" :mask-closable="false"
  >
    <template #action>
      <NButton type="primary" secondary @click="confirm">{{ t('admin.action.confirm') }}</NButton>
      <NButton secondary @click="cancel">{{ t('admin.action.cancel') }}</NButton>
    </template>
  </NModal>
</template>
