<template>
  <ClientOnly>
    <Teleport to="#right-sider">
      <NAnchor
        offset-target="#content-layout"
        ignore-gap
      >
        <slot />
      </NAnchor>
    </Teleport>
  </ClientOnly>
</template>
