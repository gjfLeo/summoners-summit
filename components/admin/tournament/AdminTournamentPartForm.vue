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
      <template v-for="(matchId, matchIndex) in part.matchIds" :key="matchId">
        <NCard style="--n-padding-bottom: 0.5rem; --n-padding-top: 0.5rem" class="mt">
          <div un-flex="~ items-baseline gap-2">
            <div>{{ t('main.tournament.matchName', [matchIndex + 1]) }}</div>
            <div :class="{ 'text-orange-500': matches[matchId].winner === 'A' }">
              <PlayerName :id="matches[matchId].playerA.playerId" :nickname="matches[matchId].playerA.nickname" />
            </div>
            <div class="text-sm">VS</div>
            <div :class="{ 'text-orange-500': matches[matchId].winner === 'B' }">
              <PlayerName :id="matches[matchId].playerB.playerId" :nickname="matches[matchId].playerB.nickname" />
            </div>
            <div>{{ matches[matchId].gameIds.length }}局</div>
          </div>
        </NCard>
      </template>

      <template v-if="part.matchIds.length === 0">
        <div class="mt">
          <NText :depth="3">该分组下暂无场次</NText>
        </div>
      </template>

      <NButton
        class="mt w-full" dashed
        @click="addMatch"
      >
        {{ t('admin.tournament.addMatch') }}
      </NButton>
    </template>
  </div>
</template>
