<template>
  <Transition name="common" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.common-enter-active,
.common-leave-active {
  transition: all 0.3s;
}
/* .common-leave-active {
  position: absolute;
} */
.common-enter-from,
.common-leave-to {
  opacity: 0;
}
</style>
