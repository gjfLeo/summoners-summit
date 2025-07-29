<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <TeamCharacterSelector v-model="includeCharacters" />
    </div>
    <NDataTable
      size="small"
      :columns="columns"
      :data="data"
      :scroll-x="1400"
      max-height="calc(100vh - 12rem)"
      class="mt"
    />
  </div>
</template>

<script lang="ts" setup>
import { NuxtLinkLocale, RenderWinRate, TeamAvatars } from "#components";
import { divide } from "mathjs/number";

const { gameVersion } = useGameVersion();
const { t } = useLocales();

const { data: teamsStatsData } = await useFetch("/api/v4/teams-stats", {
  query: { gameVersion },
});

const includeCharacters = ref<CardId[]>([]);

const teamStatsList = computed(() => {
  if (!teamsStatsData.value) {
    return [];
  }
  return teamsStatsData.value
    .map((stats) => {
      const { numGames, numGamesWin, numGamesMirror } = stats;

      const numGamesExcludeMirror = numGames - numGamesMirror;
      const numGamesWinExcludeMirror = numGamesWin - Math.floor(numGamesMirror / 2);
      const winRateExcludeMirror = divide(numGamesWinExcludeMirror, numGamesExcludeMirror);

      return {
        key: stats.teamId,
        ...stats,
        numBP: numGames + stats.numBanned,
        numGamesNetWin: numGamesWin - (numGames - numGamesWin),

        numGamesExcludeMirror,
        numGamesWinExcludeMirror,
        winRateExcludeMirror,

        winRate: divide(numGamesWin, numGames),
        starterWinRate: divide(stats.numGamesStarterWin, stats.numGamesStarter),
        followerWinRate: divide(stats.numGamesFollowerWin, stats.numGamesFollower),
      };
    });
});

const data = computed(() => {
  return teamStatsList.value
    .filter((stats) => {
      const characters = getCharacterCardsByTeamId(stats.teamId);
      return includeCharacters.value.every(character => characters.includes(character));
    });
});

const columns: DataTableColumn<typeof teamStatsList["value"][0]>[] = [
  {
    key: "teamId",
    width: "7rem",
    fixed: "left",
    align: "center",
    render: (row, rowIndex) => h(
      NuxtLinkLocale,
      {
        to: { path: `/team/${row.teamId}` },
        prefetch: rowIndex < 8,
      },
      () => h(TeamAvatars, { team: row.teamId }),
    ),
  },
  {
    title: t("main.stats.gamesPlayed"),
    key: "numGames",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5, 10].map(v => ({ label: t("main.stats.atLeast", [v]), value: v })),
    defaultFilterOptionValue: null,
    filter: (value, row) => row.numGames >= Number(value),
  },
  ...teamStatsList.value.some(item => item.numBanned > 0)
    ? [{
      title: t("main.stats.gamesBanned"),
      key: "numBanned",
      width: "6rem",
      align: "center",
      sorter: "default",
    }, {
      title: t("main.stats.gamesBP"),
      key: "numBP",
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
    render: row => RenderWinRate(row.numGamesWin, row.numGames, row.winRate),
  },
  {
    title: t("main.stats.gamesWin"),
    key: "numGamesWin",
    width: "6rem",
    align: "center",
    defaultSortOrder: "descend",
    sorter: "default",
  },
  {
    title: t("main.stats.gamesNetWin"),
    key: "numGamesNetWin",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.stats.gamesExcludeMirror"),
    key: "numGamesExcludeMirror",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("main.stats.gamesWinExcludeMirror"),
    key: "numGamesWinExcludeMirror",
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
    render: row => RenderWinRate(row.numGamesWinExcludeMirror, row.numGamesExcludeMirror, row.winRateExcludeMirror),
  },
  {
    title: t("main.stats.starterWinRate"),
    key: "starterWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => RenderWinRate(row.numGamesStarterWin, row.numGamesStarter, row.starterWinRate),
  },
  {
    title: t("main.stats.followerWinRate"),
    key: "followerWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => RenderWinRate(row.numGamesFollowerWin, row.numGamesFollower, row.followerWinRate),
  },
];

onMounted(() => {
  if (import.meta.client && history.state?.includeCharacters) {
    includeCharacters.value = history.state.includeCharacters;
  }
});
</script>
