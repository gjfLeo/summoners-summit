<template>
  <div v-if="achievements" un-flex="~ col gap-4">
    <NCard v-for="achievement in achievements" :key="achievement.id">
      <div class="flex items-center gap-4">
        <NImage
          :src="achievement.imageUrl" :alt="currentLocalized(achievement.name)"
          class="inline-block aspect-ratio-200/343 h-30 object-cover"
        />
        <div class="flex flex-col gap-2">
          <NText :depth="1" class="text-120%">{{ currentLocalized(achievement.name) }}</NText>
          <NText :depth="2">{{ currentLocalized(achievement.description) }}</NText>
          <NText :depth="3">{{ currentLocalized(achievement.flavorText) }}</NText>
        </div>
      </div>
      <div un-grid="~ cols-4 gap-x-8 gap-y-2 items-center" class="mt">
        <div v-for="playerId in achievement.playerIds" :key="playerId" un-flex="~ items-center" class="h-8">
          <span class="min-w-24">{{ players?.find((player) => player.id === playerId)?.uniqueName }}</span>
          <CommonIconButton
            icon="i-mingcute:delete-2-line" danger class="ml"
            @click="removePlayer(achievement.id, playerId)"
          />
        </div>
        <NButton primary class="h-8 w-fit" size="small" @click="showAdd(achievement.id)">添加</NButton>
      </div>
    </NCard>
    <NModal
      v-model:show="addDialogVisible"
      preset="dialog"
      :title="t('admin.player.achievements.addPlayers')"
      :show-icon="false"
    >
      <AdminPlayerSelect v-model:value="addForm.playerIds" :players="players" multiple />
      <template #action>
        <NButton secondary type="primary" :loading="submitLoading" @click="addSubmit">{{ t("admin.action.submit") }}</NButton>
        <NButton secondary @click="addDialogVisible = false">{{ t("admin.action.cancel") }}</NButton>
      </template>
    </NModal>
  </div>
</template>

<script lang="ts" setup>
const { t, currentLocalized } = useLocales();
useHead({ title: t("site.titles.admin.achievements") });

const { data: achievements, refresh } = await useFetch("/api/v4/achievements");

const { data: players } = useLazyFetch("/api/v4/players", {
  query: { includeIgnored: "1" },
});

const addDialogVisible = ref(false);
const addForm = ref<{
  achievementId: string;
  playerIds: string[];
}>({
  achievementId: "",
  playerIds: [],
});

function showAdd(achievementId: string) {
  addForm.value.playerIds = [];
  addForm.value.achievementId = achievementId;
  addDialogVisible.value = true;
}

const submitLoading = ref(false);
const message = useMessage();
async function addSubmit() {
  submitLoading.value = true;
  try {
    await $fetch(`/api/v4/achievements/${addForm.value.achievementId}`, {
      method: "POST",
      body: {
        action: "addPlayers",
        playerIds: addForm.value.playerIds,
      },
    });
    message.success(t("admin.message.SUCCESS"));
    addDialogVisible.value = false;
    refresh();
  }
  catch (error) {
    console.error(error);
    message.error(t("admin.message.FAILED"));
  }
  submitLoading.value = false;
}

async function removePlayer(achievementId: string, playerId: PlayerId) {
  try {
    await $fetch(`/api/v4/achievements/${achievementId}`, {
      method: "POST",
      body: {
        action: "removePlayers",
        playerIds: [playerId],
      },
    });
    message.success(t("admin.message.SUCCESS"));
    refresh();
  }
  catch (error) {
    console.error(error);
    message.error(t("admin.message.FAILED"));
  }
}
</script>
