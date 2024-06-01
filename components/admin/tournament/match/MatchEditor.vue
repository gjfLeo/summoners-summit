<script lang="ts" setup>
import type { MatchSaveParams } from "~/server/utils/match";
import type { Game, Match, TournamentId } from "~/types/data";
import type { NForm } from "#components";

const props = defineProps<{
  tournamentId: TournamentId;
}>();

const { t } = useI18n();
const message = useMessage();

const visible = ref(false);
const match = ref<MatchSaveParams>({} as MatchSaveParams);
const editorResolve = ref<(v: string) => void>();
const editorReject = ref<() => void>();

const formRef = ref<InstanceType<typeof NForm>>();
const formRules: FormRules = {
  "playerA.nickname": { required: true, message: "选手1昵称不能为空", trigger: "input" },
  "playerB.nickname": { required: true, message: "选手2昵称不能为空", trigger: "input" },
  "games": {
    validator: () => {
      if (match.value.games.length === 0) {
        return new Error("至少需要包含1场对局");
      }
      const i = match.value.games.findIndex(g =>
        g.playerADeck.characters.filter(c => c).length < 3
        || g.playerBDeck.characters.filter(c => c).length < 3,
      );
      if (i !== -1) {
        return new Error(`第\u2006${i + 1}\u2006局阵容不完整`);
      }
      return true;
    },
  },
};

async function create(params: { stageIndex: number; partIndex: number }) {
  match.value = {
    ...params,
    tournamentId: props.tournamentId,
    playerA: {
      nickname: "",
    },
    playerB: {
      nickname: "",
    },
    games: [],
  };
  addGame();

  visible.value = true;

  return new Promise<string>((resolve, reject) => {
    editorResolve.value = resolve;
    editorReject.value = reject;
  });
};

async function confirm() {
  try {
    await formRef.value?.validate();
  }
  catch (error: any) {
    (error as ValidateError[][])
      .flatMap(e => e).flatMap(e => e)
      .forEach(e => message.warning(e.message!));
    return;
  }
  const res = await $fetch("/api/v3/matches/save", {
    method: "POST",
    body: match.value,
  });
  console.log(res);
}

function cancel() {
  editorReject.value?.();
  visible.value = false;
}

function addBan() {
  // if (!match.value.bans) match.value.bans = [];
  // match.value.bans.push({
  //   playerACharacters: [],
  //   playerBCharacters: [],
  // });
}
let key = 0;
function addGame() {
  match.value.games.push({
    _key: key++,
    playerADeck: {
      characters: [],
    },
    playerBDeck: {
      characters: [],
    },
  });
}
function deleteGame(gameIndex: number) {
  match.value.games.splice(gameIndex, 1);
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
      <NForm
        ref="formRef" :model="match" :rules="formRules"
        :show-label="false" :show-feedback="false"
      >
        <NTable>
          <thead>
            <tr>
              <th />
              <th>
                <div un-grid="~ cols-[auto_1fr] items-center gap-x-4 gap-y-2">
                  <div un-grid="row-span-2 justify-self-end">选手1</div>
                  <NFormItem path="playerA.nickname">
                    <NInput
                      v-model:value.trim="match.playerA.nickname"
                      placeholder="昵称"
                      clearable
                    />
                  </NFormItem>
                  <AdminPlayerSelect
                    v-model:value="match.playerA.playerId"
                    :players="players"
                    :nickname="match.playerA.nickname"
                    placeholder="绑定选手数据"
                  />
                </div>
              </th>
              <th />
              <th>
                <div un-grid="~ cols-[auto_1fr] items-center gap-x-4 gap-y-2">
                  <div un-grid="row-span-2 justify-self-end">选手2</div>
                  <NFormItem path="playerB.nickname">
                    <NInput
                      v-model:value.trim="match.playerB.nickname"
                      placeholder="昵称"
                      clearable
                    />
                  </NFormItem>
                  <AdminPlayerSelect
                    v-model:value="match.playerB.playerId"
                    :players="players"
                    :nickname="match.playerB.nickname"
                    placeholder="绑定选手数据"
                  />
                </div>
              </th>
              <th />
            </tr>
          </thead>
          <TransitionGroup tag="tbody" name="common-transition-group">
            <tr key="B+">
              <th>禁用</th>
              <td :colspan="3">
                <NButton class="w-full" dashed @click="addBan">
                  <template #icon><div class="i-carbon-add" /></template>
                  <template #default>{{ t('admin.match.addBan') }}</template>
                </NButton>
              </td>
              <td />
            </tr>
            <tr v-for="(game, gameIndex) in match.games" :key="`G${game._key}`">
              <th>{{ t('main.tournament.gameName', [gameIndex + 1]) }}</th>
              <td>
                <AdminTournamentMatchGameSideEditor
                  v-model:deck="game.playerADeck"
                  v-model:starter="game.starter"
                  v-model:winner="game.winner"
                  player="A"
                />
              </td>
              <td>
                <NPopover trigger="click">
                  <template #trigger>
                    <NTextSwitch
                      :value="game.winner === 'DRAW-W' || game.winner === 'DRAW-L'"
                      @update:value="() => {}"
                    >
                      平
                    </NTextSwitch>
                  </template>
                  <template #default>
                    <div un-flex="~ gap-2">
                      <NTextSwitch :value="game.winner === 'DRAW-W'" @update:value="game.winner = 'DRAW-W'">胜</NTextSwitch>
                      <NTextSwitch :value="game.winner === 'DRAW-L'" @update:value="game.winner = 'DRAW-L'">负</NTextSwitch>
                    </div>
                  </template>
                </NPopover>
              </td>
              <td>
                <AdminTournamentMatchGameSideEditor
                  v-model:deck="game.playerBDeck"
                  v-model:starter="game.starter"
                  v-model:winner="game.winner"
                  player="B"
                />
              </td>
              <td />
            </tr>
            <tr key="G+">
              <th />
              <td :colspan="3">
                <NFormItem path="games">
                  <NButton class="w-full" dashed @click="addGame">
                    <template #icon><div class="i-carbon-add" /></template>
                    <template #default>{{ t('admin.match.addGame') }}</template>
                  </NButton>
                </NFormItem>
              </td>
              <td />
            </tr>
          </TransitionGroup>
        </NTable>
      </NForm>
    </template>
    <template #action>
      <NButton type="primary" secondary @click="confirm">{{ t('admin.action.confirm') }}</NButton>
      <NButton secondary @click="cancel">{{ t('admin.action.cancel') }}</NButton>
    </template>
  </NModal>
</template>

<style scoped>
th {
  text-align: center;
}
</style>
