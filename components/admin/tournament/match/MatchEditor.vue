<script lang="ts" setup>
import type { MatchId, TournamentId } from "~/types";
import type { AdminTournamentMatchActionCardsEditor, AdminTournamentMatchVideoEditor, NForm } from "#components";
import type { MatchSaveParams } from "~/server/service";

const props = defineProps<{
  tournamentId: TournamentId;
}>();

const emit = defineEmits<{
  (e: "done", matchId: MatchId): void;
}>();

const { t } = useLocales();
const message = useMessage();

const visible = ref(false);
const match = ref<MatchSaveParams>({} as MatchSaveParams);

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

async function create(params: { stageIndex: number; partIndex: number; matchIndex: number }) {
  match.value = {
    ...params,
    tournamentId: props.tournamentId,
    playerA: {
      nickname: "",
    },
    playerB: {
      nickname: "",
    },
    bans: [],
    games: [],
  };
  addGame();

  visible.value = true;
};
async function edit(params: MatchSaveParams) {
  match.value = params;
  visible.value = true;
}

defineExpose({
  create,
});

const { data, refresh: refreshPlayers } = await useFetch("/api/v3/players/list");
const players = computed(() => data.value?.players ?? []);
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
  try {
    const res = await $fetch("/api/v3/matches/save", {
      method: "POST",
      body: match.value,
    });
    if (res?.success) {
      message.success(t("admin.message.SUCCESS"));
      refreshPlayers();
      emit("done", res.id);
      visible.value = false;
    }
    else {
      message.error(t(`admin.message.${res?.code}`));
    }
  }
  catch (error) {
    console.error(error);
  }
}

function cancel() {
  visible.value = false;
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
function addBan() {
  match.value.bans.push({
    _key: key++,
    playerACardIds: [],
    playerBCardIds: [],
  });
}
function deleteBan(banIndex: number) {
  match.value.bans.splice(banIndex, 1);
}
const videoEditor = ref<InstanceType<typeof AdminTournamentMatchVideoEditor>>();
function inputVideo(video: string | undefined) {
  return videoEditor.value?.input(video);
}

const actionCardsEditor = ref<InstanceType<typeof AdminTournamentMatchActionCardsEditor>>();
provide("actionCardsEditor", actionCardsEditor);
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
                <div un-grid="~ items-center gap-x-4 gap-y-2" class="grid-cols-[auto_1fr]">
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
                <div un-grid="~ items-center gap-x-4 gap-y-2" class="grid-cols-[auto_1fr]">
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
              <th>
                <CommonIconButton
                  icon="i-carbon:video" can-active
                  :active="Boolean(match.video)"
                  @click="async () => match.video = await inputVideo(match.video)"
                />
              </th>
            </tr>
          </thead>
          <TransitionGroup tag="tbody" name="common-transition-group">
            <tr v-for="(ban, banIndex) in match.bans" :key="`B${ban._key}`">
              <th class="text-center!">{{ t('main.tournament.ban') }}</th>
              <td>
                <AdminTournamentMatchBanSideEditor
                  v-model:card-ids="ban.playerACardIds"
                />
              </td>
              <td />
              <td>
                <AdminTournamentMatchBanSideEditor
                  v-model:card-ids="ban.playerBCardIds"
                />
              </td>
              <td>
                <div un-flex="~ gap-2">
                  <template v-if="match.games.length > 1">
                    <CommonConfirmButton :text="t('admin.action.delete')" @click="deleteBan(banIndex)">
                      <CommonIconButton icon="i-carbon:trash-can" danger />
                    </CommonConfirmButton>
                  </template>
                </div>
              </td>
            </tr>
            <tr key="B+">
              <th class="text-center!">禁用</th>
              <td :colspan="3">
                <NButton class="w-full" dashed @click="addBan">
                  <template #icon><div class="i-carbon-add" /></template>
                  <template #default>{{ t('admin.match.addBan') }}</template>
                </NButton>
              </td>
              <td />
            </tr>
            <tr v-for="(game, gameIndex) in match.games" :key="`G${game._key}`">
              <th class="text-center!">{{ t('main.tournament.gameName', [gameIndex + 1]) }}</th>
              <td>
                <AdminTournamentMatchGameSideEditor
                  v-model:deck="game.playerADeck"
                  v-model:starter="game.starter"
                  v-model:winner="game.winner"
                  player="A"
                />
              </td>
              <td class="text-center">
                <NPopover trigger="click">
                  <template #trigger>
                    <CommonTextButton
                      :primary="game.winner === 'DRAW-W' || game.winner === 'DRAW-L'"
                      text="平"
                    />
                  </template>
                  <template #default>
                    <div un-flex="~ gap-2">
                      <CommonTextButton
                        :primary="game.winner === 'DRAW-W'"
                        text="胜"
                        @click="game.winner = 'DRAW-W'"
                      />
                      <CommonTextButton
                        :primary="game.winner === 'DRAW-L'"
                        text="负"
                        @click="game.winner = 'DRAW-L'"
                      />
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
              <td>
                <div un-flex="~ gap-2">
                  <CommonIconButton
                    icon="i-carbon:video" can-active
                    :active="Boolean(game.gameVideo)"
                    @click="async () => game.gameVideo = await inputVideo(game.gameVideo)"
                  />
                  <template v-if="match.games.length > 1">
                    <CommonConfirmButton :text="t('admin.action.delete')" @click="deleteGame(gameIndex)">
                      <CommonIconButton icon="i-carbon:trash-can" danger />
                    </CommonConfirmButton>
                  </template>
                </div>
              </td>
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
      <AdminTournamentMatchVideoEditor ref="videoEditor" />
      <AdminTournamentMatchActionCardsEditor ref="actionCardsEditor" />
    </template>
    <template #action>
      <NButton type="primary" secondary @click="confirm">{{ t('admin.action.confirm') }}</NButton>
      <NButton secondary @click="cancel">{{ t('admin.action.cancel') }}</NButton>
    </template>
  </NModal>
</template>
