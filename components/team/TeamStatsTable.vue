<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <TeamCharacterSelector v-model="includeCharacters" />
    </div>
    <NDataTable
      size="small"
      :columns="columns"
      :data="teamStatsList"
      :scroll-x="1400"
      max-height="calc(100vh - 12rem)"
      class="mt"
    />
  </div>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { CardId } from "~/types";
import { NTooltip, NuxtLinkLocale, TeamAvatars } from "#components";

const { gameVersion } = useGameVersion();
const { teamStatsRecords } = await useApiGetTeamStatsRecords({ gameVersion: gameVersion.value });
const { t } = useLocales();

const includeCharacters = ref<CardId[]>([]);

const teamStatsList = computed(() => {
  return Object.values(teamStatsRecords.value)
    .filter((stats) => {
      const characters = getCharacterCardsByTeamId(stats.teamId);
      return includeCharacters.value.every(character => characters.includes(character));
    })
    .map((stats) => {
      const { games, gamesWin, gamesMirror } = stats;

      const gamesExcludeMirror = games - gamesMirror;
      const gamesWinExcludeMirror = gamesWin - Math.floor(gamesMirror / 2);
      const winRateExcludeMirror = divide(gamesWinExcludeMirror, gamesExcludeMirror);

      return {
        key: stats.teamId,
        ...stats,
        bp: games + stats.banned,
        gamesNetWin: gamesWin - (games - gamesWin),

        gamesExcludeMirror,
        gamesWinExcludeMirror,
        winRateExcludeMirror,

        winRate: divide(gamesWin, games),
        starterWinRate: divide(stats.gamesStarterWin, stats.gamesStarter),
        followerWinRate: divide(stats.gamesFollowerWin, stats.gamesFollower),
      };
    });
});

function renderWinRate(win: number, total: number, winRate?: number) {
  return h(
    NTooltip,
    {
      trigger: "hover",
      placement: "right",
    },
    {
      trigger: () => h("span", toPercentageString(winRate ?? divide(win, total))),
      default: () => h("span", `${win} / ${total}`),
    },
  );
}

const columns: DataTableColumn<typeof teamStatsList["value"][0]>[] = [
  {
    key: "teamId",
    width: "7rem",
    fixed: "left",
    align: "center",
    render: (row, rowIndex) => h(
      NuxtLinkLocale,
      {
        to: `/team/${row.teamId}`,
        prefetch: rowIndex < 5,
      },
      () => h(TeamAvatars, { team: row.teamId }),
    ),
  },
  {
    title: t("main.stats.gamesPlayed"),
    key: "games",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5, 10].map(v => ({ label: t("main.stats.atLeast", [v]), value: v })),
    defaultFilterOptionValue: null,
    filter: (value, row) => row.games >= Number(value),
  },
  ...teamStatsList.value.some(item => item.banned > 0)
    ? [{
      title: t("main.stats.gamesBanned"),
      key: "banned",
      width: "6rem",
      align: "center",
      sorter: "default",
    }, {
      title: t("main.stats.gamesBP"),
      key: "bp",
      width: "6rem",
      align: "center",
      sorter: "default",
    }] satisfies typeof columns
    : [],
  {
    title: t("main.stats.winRate"),
    key: "winRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => renderWinRate(row.gamesWin, row.games, row.winRate),
  },
  {
    title: t("main.stats.gamesWin"),
    key: "gamesWin",
    width: "6rem",
    align: "center",
    defaultSortOrder: "descend",
    sorter: "default",
  },
  {
    title: t("main.stats.gamesNetWin"),
    key: "gamesNetWin",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.stats.gamesExcludeMirror"),
    key: "gamesExcludeMirror",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.stats.gamesWinExcludeMirror"),
    key: "gamesWinExcludeMirror",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.stats.winRateExcludeMirror"),
    key: "winRateExcludeMirror",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => renderWinRate(row.gamesWinExcludeMirror, row.gamesExcludeMirror, row.winRateExcludeMirror),
  },
  {
    title: t("main.stats.starterWinRate"),
    key: "starterWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => renderWinRate(row.gamesStarterWin, row.gamesStarter, row.starterWinRate),
  },
  {
    title: t("main.stats.followerWinRate"),
    key: "followerWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => renderWinRate(row.gamesFollowerWin, row.gamesFollower, row.followerWinRate),
  },
];

onMounted(() => {
  if (import.meta.client && history.state?.includeCharacters) {
    includeCharacters.value = history.state.includeCharacters;
  }
});
</script>
