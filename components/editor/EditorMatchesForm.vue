<template>
  <TransitionGroup name="games" tag="div" flex="~ col gap-4">
    <template v-for="(match, matchIndex) in matches" :key="match.tempId">
      <NTable>
        <thead>
          <tr>
            <th />
            <th :colspan="2">
              <div class="text-center">
                <NText :depth="1" class="text-lg">第 {{ matchIndex + 1 }} 场</NText>
              </div>
            </th>
            <th>
              <div class="items-center justify-center text-center">
                <NButton text size="small" @click="matches = matches.filter(({ tempId }) => tempId !== match.tempId)">
                  <div class="i-carbon:trash-can" />
                </NButton>
              </div>
            </th>
          </tr>
          <tr>
            <th class="w-15%" />
            <th class="w-35%"><NInput v-model:value="match.playerA" placeholder="玩家1昵称" /></th>
            <th class="w-35%"><NInput v-model:value="match.playerB" placeholder="玩家2昵称" /></th>
            <th class="w-15%">
              <NInput v-model:value="match.video" placeholder="视频链接" size="small">
                <template #prefix>
                  <NText class="mr-1" :depth="3">
                    <div class="i-carbon:video" />
                  </NText>
                </template>
              </NInput>
            </th>
          </tr>
        </thead>
        <TransitionGroup name="games" tag="tbody">
          <tr v-for="(game, gameIndex) in match.games" :key="game.tempId">
            <td class="text-center">第{{ gameIndex + 1 }}局</td>
            <td>
              <EditorGameSideInput
                v-model:characters="game.playerACharacters"
                v-model:actions="game.playerAActions"
                v-model:starter="game.starter"
                v-model:winner="game.winner"
                player="A"
              />
            </td>
            <td>
              <EditorGameSideInput
                v-model:characters="game.playerBCharacters"
                v-model:actions="game.playerBActions"
                v-model:starter="game.starter"
                v-model:winner="game.winner"
                player="B"
              />
            </td>
            <td class="text-center vertical-middle">
              <NButton text size="small" @click="match.games = match.games.filter(({ tempId }) => tempId !== game.tempId)">
                <div class="i-carbon:trash-can" />
              </NButton>
            </td>
          </tr>
          <tr :key="-1">
            <td />
            <td :colspan="2">
              <NButton class="w-full" dashed @click="match.games.push(newGame())">
                <template #icon>
                  <div class="i-carbon:add" />
                </template>
                添加对局
              </NButton>
            </td>
            <td />
          </tr>
        </TransitionGroup>
        <tbody />
      </NTable>
      <NHr v-if="matchIndex < matches.length" />
    </template>
    <NButton :key="-1" dashed @click="matches.push(newMatch())">
      <template #icon>
        <div class="i-carbon:add" />
      </template>
      添加场次
    </NButton>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { NButton, NHr, NInput, NTable, NText } from "naive-ui";
import type { ActionCard, CharacterCard } from "~/utils/types";

interface MatchData {
  tempId: number;
  playerA: string;
  playerB: string;
  video: string;
  games: GameData[];
}
interface GameData {
  tempId: number;
  playerACharacters: CharacterCard[];
  playerAActions?: Partial<Record<ActionCard, number>>;
  playerBCharacters: CharacterCard[];
  playerBActions?: Partial<Record<ActionCard, number>>;
  winner?: "A" | "B";
  starter?: "A" | "B";
}

let tempId = 1;
function newMatch(): MatchData {
  return { tempId: tempId++, playerA: "", playerB: "", video: "", games: [newGame()] };
}
function newGame(): GameData {
  return { tempId: tempId++, playerACharacters: [], playerBCharacters: [] };
}

const matches = ref<MatchData[]>([newMatch()]);

const output = computed<string[]>(() => matches.value.flatMap(match => [
  "{",
  `  playerA: "${match.playerA}",`,
  `  playerB: "${match.playerB}",`,
  `  video: "${match.video}",`,
  "  games: [",
  ...match.games.flatMap(game => [
    "    {",
    `      playerACharacters: ["${game.playerACharacters[0] ?? ""}", "${game.playerACharacters[1] ?? ""}", "${game.playerACharacters[2] ?? ""}"],`,
    ...(game.playerAActions
      ? [
          "      playerAActions: defineActions({",
          ...Object.entries(game.playerAActions).map(([card, count]) => `        "${card}": ${count},`),
          "      }),",
        ]
      : []),
    `      playerBCharacters: ["${game.playerBCharacters[0] ?? ""}", "${game.playerBCharacters[1] ?? ""}", "${game.playerBCharacters[2] ?? ""}"],`,
    ...(game.playerBActions
      ? [
          "      playerBActions: defineActions({",
          ...Object.entries(game.playerBActions).map(([card, count]) => `        "${card}": ${count},`),
          "      }),",
        ]
      : []),
    `      starter: "${game.starter ?? ""}",`,
    `      winner: "${game.winner ?? ""}",`,
    "    },",
  ]),
  "  ],",
  "},",
]));
defineExpose({
  output,
  matchCount: computed(() => matches.value.length),
  gameCount: computed(() => matches.value.flatMap(m => m.games).length),
});
</script>

<style>
.games-move,
.games-enter-active,
.games-leave-active {
  transition: all 0.5s ease;
}
.games-enter-from {
  opacity: 0;
  transform: translateX(-1rem);
}
.games-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}
</style>
