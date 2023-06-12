<template>
  <pre>{{ deck }}</pre>
</template>

<script lang="ts" setup>
import { findDeck } from "~/data/decks";

const route = useRoute();
const id = route.params.id as string;

const deck = findDeck(id);
</script>
