<template>
  <NTooltip>
    <template #trigger>
      <NuxtLinkLocale :to="`/deck/${toBase64Url(deckCode)}`" no-prefetch>
        <CommonIconButton
          :scale="0.8"
          icon-data-url="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE5IDBIOUM3LjkgMCA3IC45IDcgMnYxNmMwIDEuMS45IDIgMiAyaDEwYzEuMSAwIDItLjkgMi0yVjJjMC0xLjEtLjktMi0yLTJtMCAxOEg5VjJoMTB6TTMgNHYxOGMwIDEuMS45IDIgMiAyaDEydi0ySDVWNHptMTEgMWwtMyA1bDMgNWwzLTV6Ii8+PC9zdmc+"
        />
      </NuxtLinkLocale>
    </template>
    <span>{{ $t('main.gameInfo.viewDeck') }}</span>
  </NTooltip>
</template>

<script lang="ts" setup>
defineProps<{
  deckCode: string;
}>();
</script>

<style scoped>
/* .icon {
  height: 1.2em;
  width: 1.2em;

  background-image: URL("https://static.wikia.nocookie.net/gensin-impact/images/6/63/Icon_Dialogue_TCG.png");
  background-size: 100%;
  background-repeat: no-repeat;

  transform: translateY(2px);
} */
</style>
