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
      <NTable class="mt">
        <tbody>
          <template v-for="(matchId, matchIndex) in part.matchIds" :key="matchId">
            <tr class="text-center">
              <th class="text-center!">{{ t('main.tournament.matchName', [matchIndex + 1]) }}</th>
              <td class="w-40%">
                <div un-grid="~ cols-[1fr_min-content_1fr] gap-2">
                  <div :class="{ 'text-orange-500': getMatchWinner(matches[matchId], games) === 'A' }" class="justify-self-end">{{ matches[matchId].playerA.nickname }}</div>
                  <div>VS</div>
                  <div :class="{ 'text-orange-500': getMatchWinner(matches[matchId], games) === 'B' }" class="justify-self-start">{{ matches[matchId].playerB.nickname }}</div>
                </div>
              </td>
              <td>{{ t('admin.tournament.games', [countGames(matchId)]) }}</td>
              <td>{{ t('admin.tournament.decks', [countDecks(matchId), countGames(matchId) * 2]) }}</td>
              <td>
                <template v-if="matches[matchId].video">{{ t('admin.tournament.matchVideo') }}</template>
                <template v-else>{{ t('admin.tournament.gameVideos', [countGameVideos(matchId), countGames(matchId)]) }}</template>
              </td>
              <td>
                <CommonIconButton icon="i-carbon:edit" @click="handleEdit(matchId)" />
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
    </template>
  </div>
</template>

<script lang="ts" setup>
import type AdminTournamentMatchEditor from "./match/MatchEditor.vue";
import { NForm } from "#components";
import type { Game, GameId, Match, MatchId, TournamentPart } from "~/types/data";
import type { MatchSaveParams } from "~/server/service";

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
const message = useMessage();
async function handleEdit(matchId: MatchId) {
  const loading = message.loading(t("admin.action.loading"), { duration: 0 });
  const { match, games } = await $fetch("/api/v3/matches/getDetail", { query: { id: matchId } });
  loading.destroy();
  const params = {
    ...match,
    games: match.gameIds.map((gameId, i) => ({
      ...games[gameId],
      _key: i,
    })),
    bans: match.bans?.map<MatchSaveParams["bans"][0]>((ban, i) => {
      if (ban.banType === "character") {
        return {
          _key: i,
          playerACardIds: [ban.playerACardId],
          playerBCardIds: [ban.playerBCardId],
        };
      }
      else {
        return {
          _key: i,
          playerACardIds: getCharacterCardsByTeamId(ban.playerATeamId),
          playerBCardIds: getCharacterCardsByTeamId(ban.playerBTeamId),
        };
      }
    }) ?? [],
  } satisfies MatchSaveParams;
  matchEditor?.value.edit(params);
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
