<template>
  <NInput v-model:value="shareCode" class="font-mono" />

  <NText>减混淆码前</NText>
  <div class="flex gap-1 font-mono">
    <NText v-for="(byte, i) in hexArray" :key="i">{{ byte }}</NText>
  </div>
  <NText>减混淆码后</NText>
  <div class="flex gap-1 font-mono font-mono">
    <NText v-for="(byte, i) in originHexArray" :key="i">{{ byte }}</NText>
  </div>

  <NText>减混淆码前</NText>
  <div class="grid grid-cols-10 gap-1 font-mono">
    <NText v-for="(byte, i) in hexArray.map(hex => Number.parseInt(hex, 16).toString(2).padStart(8, '0'))" :key="i">{{ byte }}</NText>
  </div>
  <NText>减混淆码后</NText>
  <div class="grid grid-cols-10 gap-1 font-mono">
    <NText v-for="(byte, i) in originHexArray.map(hex => Number.parseInt(hex, 16).toString(2).padStart(8, '0'))" :key="i">{{ byte }}</NText>
  </div>
</template>

<script lang="ts" setup>
import { NInput, NText } from "naive-ui";
import Crypto from "crypto-js";

const shareCode = ref("AxBQ9BAPA0Aw9UwPBGDA9rwPC5DA+cEPDMCQ/MkPDdDg/eEQDqEQC+IQDrEgDvEQD+AA");

const hexArray = computed(() => splitString(Crypto.enc.Base64.parse(shareCode.value).toString(), 2));

const diffValue = computed(() => Number.parseInt(hexArray.value[hexArray.value.length - 1], 16));

const originHexArray = computed(() => hexArray.value.slice(0, hexArray.value.length - 1).map((hex) => {
  const u8a = new Uint8Array(1);
  u8a[0] = Number.parseInt(hex, 16) - diffValue.value;
  return u8a[0].toString(16).padStart(2, "0");
}));

function splitString(s: string, l: number): string[] {
  return s.match(new RegExp(`.{1,${l}}`, "g")) || [];
}
</script>
