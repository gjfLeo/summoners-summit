<template>
  <div grid grid-cols-5 items-center text-center>
    <div class="sticky top-0 z-2 mt--4 h-14 bg-#f2f2f2 pt" />
    <div
      v-for="field in fields" :key="field.key"
      class="sticky top-0 z-2 mt--4 h-14 bg-#f2f2f2 pt"
    >
      <button
        inline-flex flex-col items-center justify-center
        @click="orderBy = field.key"
      >
        {{ field.label }}
        <div
          class="i-carbon:caret-sort-down mb--3 ml-1 inline-block translate-y--3 transition"
          :class="orderBy === field.key ? '' : 'text-gray'"
        />
      </button>
    </div>

    <TransitionGroup>
      <template v-for="team in orderedTeamList" :key="team">
        <div m-block-1>
          <NuxtLink :to="`/team/${team}`">
            <template v-for="card in (team.split('-') as CharacterCard[])" :key="card">
              <CharacterAvatar :card="card" mr-1 w-8 />
            </template>
          </NuxtLink>
        </div>
        <div>{{ teamGrades[team].pick }}</div>
        <div>{{ teamGrades[team].pickRate }}%</div>
        <div>{{ teamGrades[team].win }}</div>
        <div>{{ teamGrades[team].winRate }}%</div>
      </template>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { number, subtract } from "mathjs/number";
import { teamList as allTeamList, findGamesByTeam, gameList } from "~/data";
import type { CharacterCard } from "~/utils/types";

const fields = [
  { label: "登场数", key: "pick" },
  { label: "登场率", key: "pickRate" },
  { label: "胜场", key: "win" },
  { label: "胜率", key: "winRate" },
] as const;

const teamList = [...allTeamList];

const teamGrades = Object.fromEntries(
  teamList.map((teamId) => {
    const teamGameList = findGamesByTeam(teamId);
    const grades = {
      pick: teamGameList.length,
      win: teamGameList.filter(game => game.winner === "A").length,
      pickRate: percentage(teamGameList.length, gameList.length),
      winRate: percentage(teamGameList.filter(game => game.winner === "A").length, teamGameList.length),
    };
    return [teamId, grades];
  }),
);

const orderBy = ref<typeof fields[number]["key"]>("pick");

const orderedTeamList = computed(() => {
  return teamList.sort((team1, team2) =>
    subtract(
      number(teamGrades[team2][orderBy.value]),
      number(teamGrades[team1][orderBy.value]),
    ),
  );
});
</script>
