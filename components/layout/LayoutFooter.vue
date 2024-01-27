<template>
  <NLayoutFooter bordered :style="{ height: LAYOUT_FOOTER_HEIGHT }">
    <div
      class="h-full w-full p-4 text-sm"
      u-flex="~ items-center justify-center gap-4"
    >
      <NText depth="3">{{ $t("footer.text") }} {{ $t('footer.author') }}</NText>
      <NText depth="3" class="cursor-pointer underline" @click="showAboutDrawer = true">{{ $t('footer.about') }}</NText>
    </div>
    <NDrawer v-model:show="showAboutDrawer" placement="bottom" :auto-focus="false">
      <NDrawerContent :title="$t('site.name')">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <NText>{{ $t('footer.author') }}</NText>
            <NuxtLinkLocale :to="githubRepositry" target="_blank">
              <NIcon class="text-2xl"><div class="i-carbon:logo-github" /></NIcon>
            </NuxtLinkLocale>
          </div>
          <div class="flex items-center gap-2">
            <NText>{{ $t('footer.suggestion') }}</NText>
            <NuxtLinkLocale :to="contactNGAThread" target="_blank">
              <NTooltip trigger="hover">
                <template #trigger>
                  <NIcon class="text-lg"><div class="i-nga" /></NIcon>
                </template>
                <span>NGA</span>
              </NTooltip>
            </NuxtLinkLocale>
            <div class="cursor-pointer" @click="handleQQClick">
              <NTooltip trigger="hover">
                <template #trigger>
                  <NIcon class="text-lg"><div class="i-mdi:qqchat" /></NIcon>
                </template>
                <span>{{ $t('footer.qq', [contactQQ]) }}</span>
              </NTooltip>
            </div>
          </div>
          <NText>
            <span @click="activeAdminMode">{{ $t('footer.thanks') }}</span>
            <span u-flex="inline gap-2">
              <NuxtLinkLocale class="underline" to="https://space.bilibili.com/24336207" target="_blank"><NA>念冰</NA></NuxtLinkLocale>
              <NuxtLinkLocale class="underline" to="https://space.bilibili.com/8322668" target="_blank"><NA>自古二楼</NA></NuxtLinkLocale>
            </span>
          </NText>
          <NText :depth="3">{{ $t('footer.lastUpdate', [updateTime]) }}</NText>
        </div>
      </NDrawerContent>
    </NDrawer>
  </NLayoutFooter>
</template>

<script lang="ts" setup>
import { LAYOUT_FOOTER_HEIGHT } from "@/configs/layout";

const { t } = useI18n();

const githubRepositry = "https://github.com/gjfLeo/summoners-summit";
const contactQQ = "1272823636";
const contactNGAThread = "https://nga.178.com/read.php?tid=36782766";

const runtimeConfig = useRuntimeConfig();
const updateTime = runtimeConfig.public.updateTime;

const showAboutDrawer = ref(false);

const { copy } = useClipboard();
const message = useMessage();

async function handleQQClick() {
  await copy(contactQQ);
  message.success(t("actions.copied"));
}

const { activeAdminMode } = useAdminMode();
</script>

  <style scoped>
  .i-nga {
    width: 1.2em;
    height: 1.2em;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9btSIVETOIdMhQneyiIuJUqlgEC6Wt0KqDyaUfQpOGJMXFUXAtOPixWHVwcdbVwVUQBD9AXF2cFF2kxP8lhRYxHhz34929x907wN+oMNXsigGqZhnpRFzM5VfE4Ct6EMYgBMxKzNSTmYUsPMfXPXx8vYvyLO9zf45+pWAywCcSx5huWMTrxNObls55n1hgZUkhPiceN+iCxI9cl11+41xy2M8zBSObniMWiMVSB8sdzMqGSjxFHFFUjfL9OZcVzluc1UqNte7JXxgqaMsZrtMMI4FFJJGCCBk1bKACC1FaNVJMpGk/7uEfcfwpcsnk2gAjxzyqUCE5fvA/+N2tWZyccJNCcaD7xbY/RoHgLtCs2/b3sW03T4DAM3Cltf3VBjDzSXq9rUWOgIFt4OK6rcl7wOUOMPykS4bkSAGa/mIReD+jb8oDQ7dA36rbW2sfpw9AlrpaugEODoGxEmWveby7t7O3f8+0+vsB/XZy3jc0RloAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfnBhwRLCqtdPciAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAatJREFUSMftlT9oVEEQh7/TIEJ6hSjKQUjQbqPN4jYBLUUbEwikMQhqICgKNoJiE4vjBBs50WsUPEKq1HdFYHCawGBxCoIgZ7DQRlCRQECbPViO+/vuGuGmmvnt7Pve7My+B2P7L835cDXxrzgfLgyy/0AfgOfAxejngRLwNcaloSHOh7vANeBIlO4Dh4CG82EdOBrzzjofjmeCmEoBeAQUovQTeAVMAXeAHefDDLBhKrvD9ONkB73ofJh1PlSdD2+aFbXLzfUAVIBFYA/4EnvRAJ6ZytuYUwZeAJeBP6byoG+I82Gr2fA2tg8UTeVekl8F1k2l1hfE+XAbKMbwO7AGTAJngOvJvg/ADVPZzjJd6aT8MpWKqbw0lZvAAvAjrp0Cas6HJ1kg9cTPOx+OJRO3CZwDLEoHgVvOh/mBIKZSTh5CPKZ0/b2pzAHlKH0DfneCTHSpchVYAg4Dfzu8zIrz4ampvOt2XLkM9+Yh8Bn42BzjXpYFklZVM5XzQ38gWwAnWqR558PpkUJMpQG8brmUuZFCImgZ+BTDsqnURw6JoGngEvB4/Esfuf0D78qHsw5IfaAAAAAASUVORK5CYII=");
    background-size: 110%;
    background-position: 50%;
    background-repeat: no-repeat;

  }

  .dark .i-nga {
    filter: invert(1);
  }
  </style>
