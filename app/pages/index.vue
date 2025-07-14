<template>
  <div un-flex="~ col gap-4">
    <div class="p-4 text-center">
      <template v-if="locale === 'zh'">
        欢迎来到召唤之巅！<br />
        近期本站代码进行了一次大幅度修改，如遇问题欢迎反馈。
      </template>
      <template v-else>
        Welcome to <i>Summoners' Summit</i> !<br />
        Recently, the code of this site has been significantly modified. Feedback is welcome if you encounter any problems.
      </template>
    </div>
    <Home_Overview :overview="overview" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocales();

const { overview } = await useApiGetOverviewStats();
</script>
