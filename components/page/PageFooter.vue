<template>
  <div class="h-full w-full p-4 text-sm" flex="~ items-center justify-center gap-4">
    <NText depth="3">召唤之巅——七圣召唤赛事资料 by gjfLeo</NText>
    <NText depth="3" class="cursor-pointer underline" @click="showAboutDrawer = true">关于本站</NText>
  </div>
  <NDrawer v-model:show="showAboutDrawer" placement="bottom" :auto-focus="false">
    <NDrawerContent title="召唤之巅">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <NText>by gjfLeo</NText>
          <NuxtLink :to="githubRepositry" target="_blank">
            <NIcon class="text-2xl"><div class="i-carbon:logo-github" /></NIcon>
          </NuxtLink>
        </div>
        <div class="flex items-center gap-2">
          <NText>欢迎建议和纠错</NText>
          <NuxtLink :to="contactNGAThread" target="_blank">
            <NTooltip trigger="hover">
              <template #trigger>
                <NIcon class="text-lg"><div class="i-nga" /></NIcon>
              </template>
              <span>NGA</span>
            </NTooltip>
          </NuxtLink>
          <div class="cursor-pointer" @click="handleQQClick">
            <NTooltip trigger="hover">
              <template #trigger>
                <NIcon class="text-lg"><div class="i-mdi:qqchat" /></NIcon>
              </template>
              <span>QQ: {{ contactQQ }}</span>
            </NTooltip>
          </div>
        </div>
        <NText>
          <span @click="activeAdminMode">感谢帮助：</span>
          <NuxtLink class="underline" to="https://nga.178.com/nuke.php?func=ucp&uid=41364075" target="_blank"><NA>念冰</NA></NuxtLink>
        </NText>
        <NText :depth="3">更新时间：{{ updateTime }}</NText>
      </div>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
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
  message.success("已复制");
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
