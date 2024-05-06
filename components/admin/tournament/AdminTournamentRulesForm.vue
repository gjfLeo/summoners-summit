<script lang="ts" setup>
import type { TournamentRules } from "~/types/data";

const rules = defineModel<TournamentRules>({ required: true });

const { t } = useI18n();

const banCharacters = computed<boolean>({
  get: () => {
    return rules.value.banCharacters !== undefined;
  },
  set: (v) => {
    rules.value.banCharacters = v ? (rules.value.banCharacters ?? { num: 1 }) : undefined;
  },
});
const banCharactersNum = computed<number>({
  get: () => {
    return rules.value.banCharacters?.num ?? 1;
  },
  set: (v) => {
    rules.value.banCharacters = rules.value.banCharacters ?? { num: v };
  },
});

const submitTeams = computed<boolean>({
  get: () => {
    return rules.value.submitTeams !== undefined;
  },
  set: (v) => {
    rules.value.submitTeams = v ? { num: (rules.value.numGames + 1) / 2 } : undefined;
  },
});
const submitTeamsNum = computed<number>({
  get: () => {
    return rules.value.submitTeams?.num ?? 3;
  },
  set: (v) => {
    if (rules.value.submitTeams) {
      rules.value.submitTeams.num = v;
    }
  },
});

const submitDecks = computed<boolean>({
  get: () => {
    return rules.value.submitTeams?.submitDecks !== undefined;
  },
  set: (v) => {
    if (rules.value.submitTeams) {
      rules.value.submitTeams.submitDecks = v ? {} : undefined;
    }
  },
});
const submitDecksMaxNumForEachTeam = computed<number | undefined>({
  get: () => {
    return rules.value.submitTeams?.submitDecks?.maxNumForEachTeam;
  },
  set: (v) => {
    if (rules.value.submitTeams?.submitDecks) {
      rules.value.submitTeams.submitDecks.maxNumForEachTeam = v;
    }
  },
});
const submitDecksMaxNumInTotal = computed<number | undefined>({
  get: () => {
    return rules.value.submitTeams?.submitDecks?.maxNumInTotal;
  },
  set: (v) => {
    if (rules.value.submitTeams?.submitDecks) {
      rules.value.submitTeams.submitDecks.maxNumInTotal = v;
    }
  },
});

const banTeams = computed<boolean>({
  get: () => {
    return rules.value.submitTeams?.banTeams !== undefined;
  },
  set: (v) => {
    if (rules.value.submitTeams) {
      rules.value.submitTeams.banTeams = v ? { num: 1 } : undefined;
      rules.value.submitTeams.num = Math.max(rules.value.submitTeams.num, (rules.value.numGames + 1) / 2 + 1);
    }
  },
});
const banTeamsNum = computed<number>({
  get: () => {
    return rules.value.submitTeams?.banTeams?.num ?? 1;
  },
  set: (v) => {
    if (rules.value.submitTeams?.banTeams) {
      rules.value.submitTeams.banTeams.num = v;
    }
  },
});
</script>

<template>
  <div class="mt-4 w-full" flex="~ col gap-4">
    <div flex="~ items-center gap-2">
      <div>
        <NInputGroup>
          <NInputGroupLabel>BO</NInputGroupLabel>
          <NInputNumber
            v-model:value="rules.numGames"
            class="w-4rem"
            :min="1"
            :show-button="false"
          />
        </NInputGroup>
      </div>
      <NSelect
        v-model:value="rules.mode"
        class="w-8rem"
        :options="[
          { label: t('main.rules.mode.conquest'), value: 'conquest' },
          { label: t('main.rules.mode.duel'), value: 'duel' },
          { label: t('main.rules.mode.characterConquest'), value: 'characterConquest' },
        ]"
      />
    </div>
    <div class="ml-4 h-34px" flex="~ items-center gap-2">
      <span>禁用角色</span>
      <NSwitch v-model:value="banCharacters" />
      <CommonTransition>
        <div v-if="banCharacters">
          <NInputGroup>
            <NInputGroupLabel>禁用</NInputGroupLabel>
            <NInputNumber
              v-model:value="banCharactersNum"
              class="w-4rem"
              :show-button="false"
              :min="1"
            />
            <NInputGroupLabel>角色</NInputGroupLabel>
          </NInputGroup>
        </div>
      </CommonTransition>
    </div>
    <div class="ml-4 h-34px" flex="~ items-center gap-2">
      <span>提交阵容</span>
      <NSwitch v-model:value="submitTeams" />
      <CommonTransition>
        <div v-if="submitTeams" flex="~ items-center gap-2">
          <div>
            <NInputGroup>
              <NInputNumber
                v-model:value="submitTeamsNum"
                class="w-4rem"
                :show-button="false"
                :min="1"
              />
              <NInputGroupLabel>套</NInputGroupLabel>
            </NInputGroup>
          </div>
          <div>
            <NInputGroup>
              <NInputGroupLabel>至少</NInputGroupLabel>
              <NInputNumber
                class="w-4rem"
                :show-button="false"
                :min="1"
              />
              <NInputGroupLabel>角色</NInputGroupLabel>
            </NInputGroup>
          </div>
        </div>
      </CommonTransition>
    </div>
    <NCollapseTransition :show="submitTeams">
      <div flex="~ col gap-4" class="ml-8">
        <div class="h-34px" flex="~ items-center gap-2">
          <span>提交牌组</span>
          <NSwitch v-model:value="submitDecks" />
          <CommonTransition>
            <div v-if="submitDecks" flex="~ items-center gap-2">
              <div>
                <NInputGroup>
                  <NInputGroupLabel>每个阵容最多</NInputGroupLabel>
                  <NInputNumber
                    v-model:value="submitDecksMaxNumForEachTeam"
                    class="w-4rem"
                    :show-button="false"
                    :min="1"
                  />
                  <NInputGroupLabel>套</NInputGroupLabel>
                </NInputGroup>
              </div>
              <div>
                <NInputGroup>
                  <NInputGroupLabel>总计最多</NInputGroupLabel>
                  <NInputNumber
                    v-model:value="submitDecksMaxNumInTotal"
                    class="w-4rem"
                    :show-button="false"
                    :min="1"
                  />
                  <NInputGroupLabel>套</NInputGroupLabel>
                </NInputGroup>
              </div>
            </div>
          </CommonTransition>
        </div>
        <div class="h-34px" flex="~ items-center gap-2">
          <span>禁用阵容</span>
          <NSwitch v-model:value="banTeams" />
          <CommonTransition>
            <div v-if="banTeams">
              <NInputGroup>
                <NInputGroupLabel>禁用</NInputGroupLabel>
                <NInputNumber
                  v-model:value="banTeamsNum"
                  class="w-4rem"
                  :show-button="false"
                  :min="1"
                />
                <NInputGroupLabel>套</NInputGroupLabel>
              </NInputGroup>
            </div>
          </CommonTransition>
        </div>
      </div>
    </NCollapseTransition>
  </div>
</template>
