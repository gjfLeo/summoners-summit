<template>
  <SiteRoot>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </SiteRoot>
</template>

<style>
.layout-transition-enter-active,
.layout-transition-leave-active {
  /* position: absolute;
  width: 100%; */
  transition: all 0.2s;
}
.layout-transition-enter-from,
.layout-transition-leave-to {
  opacity: 0;
}

.common-transition-group-move,
.common-transition-group-enter-active,
.common-transition-group-leave-active {
  transition: all 0.3s;
}
.common-transition-group-enter-from {
  opacity: 0;
  transform: translateX(-1rem);
}
.common-transition-group-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}
.common-transition-group-leave-active {
  height: 0;
}
</style>
