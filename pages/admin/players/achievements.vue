<template>
  <div un-flex="~ col gap-4">
    <NCard v-for="achievement in achievementList" :key="achievement.id">
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
      <div un-grid="~ cols-4 gap-x-8 gap-y-2" class="mt">
        <div v-for="playerId in achievement.playerIds" :key="playerId" un-flex="~ items-center">
          <span>{{ players.find((player) => player.id === playerId)?.uniqueName }}</span>
          <CommonIconButton icon="i-mingcute:delete-2-line" danger class="ml" />
        </div>
        <NButton primary @click="showAdd(achievement.id)">添加</NButton>
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

const { data, refresh } = await useFetch("/api/v3/achievements/getAchievementList");

const achievementList = computed(() => data.value?.achievementList);

const { data: playerData } = await useFetch("/api/v3/players/list");
const players = computed(() => playerData.value?.players ?? []);

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
  const res = await $fetch("/api/v3/achievements/addPlayers", {
    method: "POST",
    body: addForm.value,
  });
  if (res.success) {
    message.success(t("admin.message.SUCCESS"));
    addDialogVisible.value = false;
    refresh();
  }
  else {
    message.error(t(`admin.message.${res.code}`));
  }
  submitLoading.value = false;
}
</script>
