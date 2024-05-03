<script lang="ts" setup>
import type { TournamentRules } from "~/types/data";

const rules = defineModel<Partial<TournamentRules>>();
const hasRules = defineModel<boolean>("hasRules");

syncRef(rules, hasRules, {
  transform: {
    ltr: (rules) => {
      return rules !== undefined;
    },
    rtl: (hasRules) => {
      return hasRules ? rules.value ?? { numGames: 3, mode: "conquest" } : undefined;
    },
  },
});

const submitTeams = computed({
  get: () => {
    return rules.value?.submitTeams !== undefined;
  },
  set: (v) => {
    if (rules.value) {
      rules.value.submitTeams = v ? { num: rules.value.numGames ?? 3 } : undefined;
    }
  },
});

const formRules = {

};
</script>

<template>
  <div v-if="hasRules" class="mt-2 w-full" flex="~ col gap-4">
    <div flex="~ items-center gap-2">
      <div>
        <NInputGroup>
          <NInputGroupLabel>BO</NInputGroupLabel>
          <NInputNumber class="w-4rem" :show-button="false" :min="1" />
        </NInputGroup>
      </div>
      <NSelect
        class="w-8rem"
        :options="[
          { label: '征服', value: 'conquest' },
        ]"
      />
    </div>
    <div class="ml-4" flex="~ items-center gap-2">
      <span>禁用角色</span>
      <NSwitch />
      <div>
        <NInputGroup>
          <NInputGroupLabel>禁用</NInputGroupLabel>
          <NInputNumber class="w-4rem" :show-button="false" :min="1" />
          <NInputGroupLabel>角色</NInputGroupLabel>
        </NInputGroup>
      </div>
    </div>
    <div class="ml-4" flex="~ items-center gap-2">
      <span>提交阵容</span>
      <NSwitch />
      <div>
        <NInputGroup>
          <NInputNumber class="w-4rem" :show-button="false" :min="1" />
          <NInputGroupLabel>套</NInputGroupLabel>
        </NInputGroup>
      </div>
      <div>
        <NInputGroup>
          <NInputGroupLabel>至少</NInputGroupLabel>
          <NInputNumber class="w-4rem" :show-button="false" :min="1" />
          <NInputGroupLabel>角色</NInputGroupLabel>
        </NInputGroup>
      </div>
    </div>
    <div class="ml-8" flex="~ items-center gap-2">
      <span>提交牌组</span>
      <NSwitch />
      <div>
        <NInputGroup>
          <NInputGroupLabel>每个阵容最多</NInputGroupLabel>
          <NInputNumber class="w-4rem" :show-button="false" :min="1" />
          <NInputGroupLabel>套</NInputGroupLabel>
        </NInputGroup>
      </div>
      <div>
        <NInputGroup>
          <NInputGroupLabel>总计最多</NInputGroupLabel>
          <NInputNumber class="w-4rem" :show-button="false" :min="1" />
          <NInputGroupLabel>套</NInputGroupLabel>
        </NInputGroup>
      </div>
    </div>
    <div class="ml-8" flex="~ items-center gap-2">
      <span>禁用阵容</span>
      <NSwitch />
      <div>
        <NInputGroup>
          <NInputGroupLabel>禁用</NInputGroupLabel>
          <NInputNumber class="w-4rem" :show-button="false" :min="1" />
          <NInputGroupLabel>套</NInputGroupLabel>
        </NInputGroup>
      </div>
    </div>
  </div>
</template>
