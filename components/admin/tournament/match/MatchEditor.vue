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
const editorResolve = ref<(v: string) => void>();
const editorReject = ref<() => void>();

// const rules: FormRules = {

// };

const playerANickname = computed<string>({
  get: () => match.value.playerA?.nickname ?? "",
  set: v => (match.value.playerA = { nickname: v }),
});
const playerAId = computed<string | undefined>({
  get: () => match.value.playerA?.playerId,
  set: v => match.value.playerA ? (match.value.playerA.playerId = v) : undefined,
});
const playerBNickname = computed<string>({
  get: () => match.value.playerB?.nickname ?? "",
  set: v => (match.value.playerB = { nickname: v }),
});
const playerBId = computed<string | undefined>({
  get: () => match.value.playerB?.playerId,
  set: v => match.value.playerB ? (match.value.playerB.playerId = v) : undefined,
});

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
    editorResolve.value = resolve;
    editorReject.value = reject;
  });
};

function confirm() {
}

function cancel() {
  editorReject.value?.();
  visible.value = false;
}

defineExpose({
  create,
});

const { data } = await useFetch("/api/v3/players/list");
const players = computed(() => data.value?.players ?? []);
</script>

<template>
  <NModal
    v-model:show="visible"
    preset="dialog" :show-title="false" :show-icon="false"
    :closable="false" :mask-closable="false"
    style="width: 80vw"
  >
    <template #default>
      <NTable>
        <thead>
          <tr>
            <th />
            <th>
              <div un-grid="~ cols-[8rem_1fr] items-center gap-x-4 gap-y-2">
                <div un-grid="row-span-2 justify-self-end">选手1</div>
                <NInput
                  v-model:value="playerANickname"
                  placeholder="昵称"
                  clearable
                />
                <AdminPlayerSelect
                  v-model:value="playerAId"
                  :players="players"
                  :nickname="playerANickname"
                  placeholder="绑定选手数据"
                />
              </div>
            </th>
            <th>
              <div un-grid="~ cols-[8rem_1fr] items-center gap-x-4 gap-y-2">
                <div un-grid="row-span-2 justify-self-end">选手2</div>
                <NInput
                  v-model:value="playerBNickname"
                  placeholder="昵称"
                  clearable
                />
                <AdminPlayerSelect
                  v-model:value="playerBId"
                  :players="players"
                  :nickname="playerBNickname"
                  placeholder="绑定选手数据"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody />
      </NTable>
    </template>
    <template #action>
      <NButton type="primary" secondary @click="confirm">{{ t('admin.action.confirm') }}</NButton>
      <NButton secondary @click="cancel">{{ t('admin.action.cancel') }}</NButton>
    </template>
  </NModal>
</template>
