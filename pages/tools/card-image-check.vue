<template>
  <div u-grid="~ cols-20 gap-1">
    <template v-for="card in ALL_CHARACTER_CARDS" :key="card">
      <div>
        <CardAvatar :card="card" />
      </div>
    </template>
  </div>
  <div u-grid="~ cols-20 gap-1" mt>
    <template v-for="card in ALL_CHARACTER_CARDS" :key="card">
      <div>
        <CardImage :card="card" />
      </div>
    </template>
  </div>
  <div u-grid="~ cols-20 gap-1" mt>
    <template v-for="card in ALL_ACTION_CARDS" :key="card">
      <div>
        <CardImage :card="card" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ALL_ACTION_CARDS, ALL_CHARACTER_CARDS } from "~/utils/cards";

useHead({ title: "卡牌图片检查 - 召唤之巅" });
</script>
