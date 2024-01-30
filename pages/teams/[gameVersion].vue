<template>
  <div u-flex="~ col gap-8">
    <div class="flex flex-wrap gap-2">
      <CharacterSelector v-model="includedCharacters" />
    </div>
    <NDataTable
      size="small"
      :columns="columns"
      :data="data"
      :scroll-x="1400"
      max-height="calc(100vh - 18rem)"
    />
    <template v-if="gameVersion">
      <TeamMatchupTable v-bind="teamMatchups" />
      <ClientOnly>
        <TeamRelationsGraph :relations="relations" :team-stats-map="teamStatsMap" />
      </ClientOnly>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { NTooltip, NuxtLinkLocale, TeamAvatars } from "#components";
import type { CharacterCard } from "~/utils/types";
import { getCharactersByTeamId } from "~/utils/cards";

const { t } = useI18n();
useHead({ title: t("site.titleFormat", [t("menu.teams"), t("site.name")]) });

const { gameVersion, gameVersionPath } = useGameVersion({ detect: true });
const { teamStatsMap } = await useTeamStatsMap(gameVersion);

const { relations } = await useApiTeamRelations(gameVersion.value);
const teamMatchups = await useApiTeamMatchups(gameVersion.value);

const includedCharacters = ref<CharacterCard[]>([]);
const data = computed(() =>
  Object.values(teamStatsMap)
    .filter((stats) => {
      const characters = getCharactersByTeamId(stats.teamId);
      return includedCharacters.value.every(character => characters.includes(character));
    })
    .map(statistics => ({ key: statistics.teamId, ...statistics })),
);

function winRateRender(win: number, total: number, winRate: number) {
  return h(
    NTooltip,
    {
      trigger: "hover",
      placement: "right",
    },
    {
      trigger: () => h("span", toPercentageString(winRate)),
      default: () => h("span", `${win} / ${total}`),
    },
  );
}

const columns: DataTableColumn<typeof data["value"][number]>[] = [
  {
    key: "teamId",
    width: "7rem",
    fixed: "left",
    align: "center",
    render: (row, rowIndex) => h(
      NuxtLinkLocale,
      {
        to: `/team/${row.teamId}/${gameVersionPath.value}`,
        prefetch: rowIndex < 5,
      },
      () => h(TeamAvatars, { team: row.teamId }),
    ),
  },
  {
    title: t("stats.gamesPlayed"),
    key: "total",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5, 10].map(v => ({ label: t("stats.atLeast", [v]), value: v })),
    defaultFilterOptionValue: null,
    filter: (value, row) => row.total >= Number(value),
  },
  ...data.value.some(item => item.banned > 0)
    ? [{
        title: t("stats.gamesBanned"),
        key: "banned",
        width: "6rem",
        align: "center" as const,
        sorter: "default" as const,
      }, {
        title: t("stats.gamesBP"),
        key: "bp",
        width: "6rem",
        align: "center" as const,
        sorter: "default" as const,
      }]
    : [],
  {
    title: t("stats.winRate"),
    key: "winRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.win, row.total, row.winRate),
  },
  {
    title: t("stats.gamesWin"),
    key: "win",
    width: "6rem",
    align: "center",
    defaultSortOrder: "descend",
    sorter: "default",
  },
  {
    title: t("stats.gamesNetWins"),
    key: "winDiff",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("stats.gamesPlayedExcludeSame"),
    key: "totalExcludeSame",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("stats.gamesWinExcludeSame"),
    key: "winExcludeSame",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("stats.winRateExcludeSame"),
    key: "winRateExcludeSame",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.winExcludeSame, row.totalExcludeSame, row.winRateExcludeSame),
  },
  {
    title: t("stats.starterWinRate"),
    key: "starterWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.starterWin, row.starterTotal, row.starterWinRate),
  },
  {
    title: t("stats.followerWinRate"),
    key: "followerWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.followerWin, row.followerTotal, row.followerWinRate),
  },
];
</script>
