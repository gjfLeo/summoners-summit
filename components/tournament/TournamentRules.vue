<template>
  <div class="flex gap-2">
    <template v-for="rule in ruleTags" :key="rule.name">
      <NTooltip trigger="hover">
        <template #trigger>
          <NTag round size="small">{{ rule.name }}</NTag>
        </template>
        <span>{{ rule.desc }}</span>
      </NTooltip>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { TournamentRules } from "~/utils/types";

const props = defineProps<{
  rules: TournamentRules;
}>();

const ruleDesc = {
  BO3: "三局两胜",
  BO5: "五局三胜",
  BO7: "七局四胜",
  征服: "取得胜利的阵容不再使用",
  决斗: "每局使用不同阵容",
};

const ruleTags = computed(() => {
  return props.rules.map((rule) => {
    if (typeof rule === "string") {
      return { name: rule, desc: ruleDesc[rule] };
    }
    else {
      return { name: rule[0], desc: rule[1] };
    }
  });
});
</script>
