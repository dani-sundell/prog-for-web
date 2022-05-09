<script setup>
import DeckList from "../data/decks.json";
import { useRoute } from "vue-router";

const route = useRoute();
const paramId = route.params.id * 1;
console.log("the id is", paramId);
const item = DeckList.find((item) => {
  return item.id === paramId;
});
</script>

<template>
  <div class="deck-detail__container">
    <div class="deck-detail__body">
      <h1>{{ item.deckName }}</h1>
      <h4>by {{ item.author }}</h4>
      <div class="pill__container">
        <div class="pill tags location">{{ item.originLocation }}</div>
        <div
          class="pill tags"
          v-bind:class="{
            gift: item.methodOfAcquisition.includes('Gift') === true,
            purchased: item.methodOfAcquisition.includes('Purchased') === true,
            inherited: item.methodOfAcquisition.includes('Inherited') === true,
          }"
        >
          {{ item.methodOfAcquisition }}
        </div>
        <div
          class="pill tags"
          v-bind:class="{
            nature: item.theme.includes('Nature') === true,
            novelty: item.theme.includes('Novelty') === true,
            ornate: item.theme.includes('Ornate') === true,
            popCulture: item.theme.includes('Pop Culture') === true,
            travel: item.theme.includes('Travel') === true,
            tarot: item.theme.includes('Tarot') === true,
          }"
        >
          {{ item.theme }}
        </div>
      </div>
      <p v-html="item.body"></p>
    </div>
    <div class="deck-detail__img">
      <div><img :src="item.cardBack" :alt="item.deckName" /></div>
      <div><img :src="item.cardFace" :alt="item.deckName" /></div>
    </div>
  </div>
</template>
