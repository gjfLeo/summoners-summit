<template>
  <div>
    <VChart
      class="mt h-[calc(100vh-16rem)] min-h-30rem"
      :option="option" autoresize
    />
    <!--
      选取率计算方式：
      选取率 = （作为角色被禁用次数 * 2 + 阵容中被禁用次数 + 阵容比赛中上场次数） / (总场数 * 2)

      误差：选手选择了阵容但未上场（比如另一套阵容多次战败直接淘汰）的情况未记录
    -->
  </div>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";

const { gameVersion } = useGameVersion();
const { t } = useLocales();
const { characterCardStats, numMatches } = await useApiGetCharacterCardStats({ gameVersion: gameVersion.value });
const { getCardAvatar } = await useAsyncSharedData();
const themeVars = useThemeVars();

const data = computed(() => {
  return characterCardStats.value
    .map(item => ({
      cardId: item.cardId,
      pickRate: divide(item.numMatches, numMatches.value * 2),
      avatar: getCardAvatar(item.cardId),
    }))
    .sort(sorter("pickRate"))
    .reverse();
});

const option = computed<ECOption>(() => {
  return {
    grid: {
      top: remToPx(3),
      left: remToPx(1),
      right: remToPx(1),
      bottom: 0,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: data.value.map(card => card.cardId),
      axisLabel: {
        interval: 0,
        formatter: (value) => {
          return `{${value}| }`;
        },
        color: themeVars.value.textColor2,
        margin: remToPx(0.5),
        rich: {
          ...Object.fromEntries(
            data.value.map((item) => {
              return [item.cardId, {
                height: remToPx(2),
                width: remToPx(2),
                backgroundColor: {
                  image: item.avatar,
                },
              }];
            }),
          ),
        },
      },
    },
    yAxis: {
      type: "value",
      name: t("main.cards.characterPickRateBarChart.pickRatePercentage"),
      axisLabel: {
        color: themeVars.value.textColor2,
        formatter: value => toPercentageValue(value).toString(),
      },
      splitLine: {
        lineStyle: {
          color: themeVars.value.borderColor,
        },
      },
    },
    series: [
      {
        name: "pickRate",
        type: "bar",
        data: data.value.map(item => item.pickRate),
        label: {
          show: true,
          position: "top",
          formatter: (params) => {
            if (params.dataIndex > 0) return "";
            const value = params.value as number;
            return value > 0 ? toPercentageString(value) : "";
          },
        },
        emphasis: {
          focus: "self",
          label: {
            show: true,
            position: "top",
            formatter: (params) => {
              const value = params.value as number;
              return value > 0 ? toPercentageString(value) : "";
            },
          },
        },
        barWidth: remToPx(1),
        color: themeVars.value.infoColor,
      },
    ],
  } satisfies ECOption;
});
</script>
