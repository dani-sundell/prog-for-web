<script setup>
import DeckList from '../data/decks.json';
import { useRoute } from 'vue-router';
const route = useRoute();
const paramId = route.params.id * 1;
console.log('the id is', paramId);
const item = DeckList.find(item => {
  return item.id === paramId;
});
</script>

<template>
  <div class="deck-detail__container">
    <div class="deck-detail__img">
      <div><img :src="item.deckBox" :alt="item.deckName" /></div>
      <div><img :src="item.cardBack" :alt="item.deckName" /></div>
      <div><img :src="item.cardFace" :alt="item.deckName" /></div>
    </div>
    <div class="deck-detail__body">
      <h1>{{item.deckName}}</h1>
      <h2>{{item.originLocation}}</h2>
      <h3>{{item.methodOfAcquisition}}</h3>
      <p>{{item.body}}</p>
  </div>
  </div>
</template>
