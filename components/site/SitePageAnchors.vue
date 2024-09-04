<template>
  <ClientOnly>
    <Teleport to="#layout-right-sider">
      <NScrollbar
        class="side-scroll"
        style="
        position: fixed;
        /* top: var(--g-header-height); */
        max-height: calc(100dvh - var(--g-header-height));
        width: 192px;
      "
      >
        <NAnchor
          ref="refAnchor"
          offset-target="#content-layout"
          ignore-gap
        >
          <slot />
        </NAnchor>
      </NScrollbar>
    </Teleport>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { NAnchor } from "#components";

const refAnchor = ref<InstanceType<typeof NAnchor>>();
function scrollTo(href: string) {
  return refAnchor.value?.scrollTo(href);
}

defineExpose({
  scrollTo,
});
</script>
