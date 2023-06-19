<template>
  <div>
    <NuxtLink to="/tournament/t0001">七圣召唤主播邀请赛</NuxtLink>
    <!-- <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry /> -->
  </div>
</template>

<script setup lang="ts">
// const online = useOnline();

definePageMeta({
  redirect: "/teams",
});
</script>
