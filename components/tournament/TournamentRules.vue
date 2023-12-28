<template>
  <div class="flex gap-2">
    <template v-if="rules.numGames === 1">
      <NTag round size="small">一局决胜</NTag>
    </template>
    <template v-else>
      <!-- 准备和禁用 -->
      <NTooltip>
        <template #default>
          <span>对战双方各准备&#x2006;{{ rules.numDecks }}&#x2006;套阵容</span>
          <span v-if="rules.numDecksBanned">，并禁用对手其中&#x2006;{{ rules.numDecksBanned }}&#x2006;套</span>
        </template>
        <template #trigger>
          <NTag round size="small">
            <span>{{ rules.numDecks }}</span>
            <span>&#x2006;套阵容</span>
            <span v-if="rules.numDecksBanned">&#x2002;禁&#x2006;{{ rules.numDecksBanned }}&#x2006;套</span>
          </NTag>
        </template>
      </NTooltip>

      <!-- 禁用角色 -->
      <template v-if="rules.numCharactersBanned">
        <NTooltip>
          <template #default>
            <span>对战双方各禁用&#x2006;{{ rules.numCharactersRequired }}&#x2006;张角色牌</span>
          </template>
          <template #trigger>
            <NTag round size="small">禁用&#x2006;{{ rules.numCharactersRequired }}&#x2006;角色</NTag>
          </template>
        </NTooltip>
      </template>

      <!-- 角色要求 -->
      <template v-if="rules.numCharactersRequired">
        <NTooltip>
          <template #default>
            <span>不同阵容可以重复使用角色牌，但总计至少包含&#x2006;{{ rules.numCharactersRequired }}&#x2006;张</span>
          </template>
          <template #trigger>
            <NTag round size="small">至少&#x2006;{{ rules.numCharactersRequired }}&#x2006;角色</NTag>
          </template>
        </NTooltip>
      </template>

      <!-- 场数 -->
      <NTag round size="small">{{ rules.numGames }}&#x2006;局&#x2006;{{ (rules.numGames + 1) / 2 }}&#x2006;胜</NTag>
      <!-- 模式 -->
      <NTooltip>
        <template #default>
          <span>{{ modes[rules.mode].description }}</span>
        </template>
        <template #trigger>
          <NTag round size="small">{{ modes[rules.mode].name }}</NTag>
        </template>
      </NTooltip>

      <!-- 额外规则 -->
      <NTooltip v-for="(rule, i) of rules.extra ?? []" :key="i">
        <template #default>
          <span>{{ rule[1] }}</span>
        </template>
        <template #trigger>
          <NTag round size="small">{{ rule[0] }}</NTag>
        </template>
      </NTooltip>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { TournamentRules } from "~/utils/types";

defineProps<{
  rules: TournamentRules;
}>();

const modes: Record<TournamentRules["mode"], { name: string; description: string }> = {
  Conquest: { name: "征服", description: "获胜的阵容不能再使用" },
  Duel: { name: "决斗", description: "每个阵容只能使用一次" },
};
</script>
