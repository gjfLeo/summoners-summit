<script lang="ts" setup>
const props = defineProps<{
  player: Player;
}>();

const emit = defineEmits<{
  (e: "done"): void;
}>();

async function confirm() {
  try {
    await $fetch("/api/v3/players/deletePlayer", {
      method: "POST",
      query: { id: props.player.id },
    });
  }
  catch (error) {
    console.error(error);
  }
  emit("done");
}
</script>

<template>
  <AdminDeleteButton @confirm="confirm">确认删除选手信息？</AdminDeleteButton>
</template>
