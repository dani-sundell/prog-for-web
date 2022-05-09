<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["item", "index"]);
</script>

<template>
  <RouterLink :to="'/collection/' + item.id">
    <div class="deck-row">
      <div class="deck-img"><img :src="item.cardBack" /></div>
      <div class="deck-name">{{ item.deckName }}</div>
    </div>
  </RouterLink>
</template>
