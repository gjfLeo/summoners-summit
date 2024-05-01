<template>
  <TransitionGroup name="common-transition-group">
    <slot />
  </TransitionGroup>
</template>

<style scoped>
.common-transition-group-move,
.common-transition-group-enter-active,
.common-transition-group-leave-active {
  transition: all 5s;
}
.common-transition-group-enter-from,
.common-transition-group-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.common-transition-group-leave-active {
  position: absolute;
}
</style>
