<script lang="ts" setup>
import type AdminTournamentMatchEditor from "./match/MatchEditor.vue";
import { NForm } from "#components";
import type { Game, GameId, Match, MatchId, TournamentPart } from "~/types/data";

const props = defineProps<{
  stageIndex: number;
  stageKey: number;
  partIndex: number;
  editing?: boolean;
  isOnlyPart: boolean;
}>();
defineEmits<{
  (e: "delete"): void;
}>();
const part = defineModel<TournamentPart>({ required: true });

const formRef = ref<InstanceType<typeof NForm>>();

const { t } = useLocales();

const defaultName = computed(() => t("main.tournament.partNameDefault", [props.partIndex + 1]));

const matches = inject<Ref<Record<MatchId, Match>>>("matches", ref({}));
const games = inject<Ref<Record<GameId, Game>>>("games", ref({}));

const rules = {
  name: {
    trigger: "blur",
    validator: async () => {
      if (!props.isOnlyPart && !part.value.name.zh) {
        throw new Error(t("admin.validate.pleaseInput", [t("main.tournament.partName")]));
      }
    },
  },
  date: {
    trigger: "change",
    validator: async () => {
      if (!part.value.date) {
        throw new Error(t("admin.validate.pleaseSelect", [t("main.tournament.date")]));
      }
    },
  },
};

const matchEditor = inject<Ref<InstanceType<typeof AdminTournamentMatchEditor>>>("matchEditor");
function addMatch() {
  matchEditor?.value.create({
    stageIndex: props.stageIndex,
    partIndex: props.partIndex,
    matchIndex: part.value.matchIds.length,
  });
}

function validate() {
  return validateForm(formRef);
}

defineExpose({ validate });

function countGames(matchId: MatchId) {
  return matches.value[matchId].gameIds.length;
}
function countGameVideos(matchId: MatchId) {
  return matches.value[matchId].gameIds
    .map(gameId => games.value[gameId])
    .filter(game => game.gameVideo)
    .length;
}
function countDecks(matchId: MatchId) {
  return matches.value[matchId].gameIds
    .map(gameId => games.value[gameId])
    .flatMap(game => [game.playerADeck, game.playerBDeck])
    .filter(deck => deck.deckCode)
    .length;
}
</script>

<template>
  <div class="mt">
    <NH4 v-if="!isOnlyPart" :id="`S${stageKey}P${part._key}`" un-flex="~ gap-2">
      <span>{{ defaultName }}</span>
      <span v-if="part.name.zh">{{ part.name.zh }}</span>

      <div class="ml-auto" un-flex="~ gap-2">
        <template v-if="editing">
          <CommonConfirmButton :text="t('admin.action.delete')" @click="$emit('delete')">
            <CommonIconButton icon="i-carbon:trash-can" danger>{{ t('admin.action.delete') }}</CommonIconButton>
          </CommonConfirmButton>
        </template>
      </div>
    </NH4>

    <CommonTransition>
      <NForm v-if="editing" ref="formRef" :model="part" :rules="rules">
        <NGrid class="gap-2!">
          <NFormItemGi v-if="!isOnlyPart" :span="24" :label="t('main.tournament.partName')" path="name">
            <NInputLocale v-model:value="part.name" />
          </NFormItemGi>
          <NFormItemGi :span="6" :label="t('main.tournament.date')" path="date">
            <NDatePicker v-model:formatted-value="part.date" value-format="yyyy-MM-dd" type="date" />
          </NFormItemGi>
        </NGrid>
      </NForm>
      <NDescriptions v-else label-placement="left" :column="1" separator="&emsp;">
        <NDescriptionsItem :label="t('main.tournament.date')">{{ part.date }}</NDescriptionsItem>
      </NDescriptions>
    </CommonTransition>

    <template v-if="!editing">
      <NTable v-if="part.matchIds.length" class="mt">
        <tbody>
          <template v-for="(matchId, matchIndex) in part.matchIds" :key="matchId">
            <tr class="text-center">
              <th class="text-center!">{{ t('main.tournament.matchName', [matchIndex + 1]) }}</th>
              <td class="w-40%">
                <div un-grid="~ cols-[1fr_min-content_1fr] gap-2">
                  <div :class="{ 'text-orange-500': matches[matchId].winner === 'A' }" class="justify-self-end">{{ matches[matchId].playerA.nickname }}</div>
                  <div>VS</div>
                  <div :class="{ 'text-orange-500': matches[matchId].winner === 'B' }" class="justify-self-start">{{ matches[matchId].playerB.nickname }}</div>
                </div>
              </td>
              <td>{{ t('admin.tournament.games', [countGames(matchId)]) }}</td>
              <td>{{ t('admin.tournament.decks', [countDecks(matchId), countGames(matchId) * 2]) }}</td>
              <td>
                <template v-if="matches[matchId].video">{{ t('admin.tournament.matchVideo') }}</template>
                <template v-else>{{ t('admin.tournament.gameVideos', [countGameVideos(matchId), countGames(matchId)]) }}</template>
              </td>
              <td>
                <CommonIconButton icon="i-carbon:edit" />
              </td>
            </tr>
          </template>
          <tr>
            <th />
            <td :colspan="4">
              <NButton class="w-full" dashed @click="addMatch">
                <template #icon><div class="i-carbon-add" /></template>
                <template #default>{{ t('admin.tournament.addMatch') }}</template>
              </NButton>
            </td>
            <td />
          </tr>
        </tbody>
      </NTable>

      <template v-else>
        <div class="mt">
          <NText :depth="3">该分组下暂无场次</NText>
        </div>
      </template>
    </template>
  </div>
</template>
