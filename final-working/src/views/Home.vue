<script setup>
import { reactive } from "vue";
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import decks from "../data/decks.json";
import CarouselRow from "../components/CarouselRow.vue";
import "vue3-carousel/dist/carousel.css";

const state = reactive({ decks });

let selectedDecks = [decks[22], decks[30], decks[33], decks[10], decks[0]]; // decks selected by index to appear on homepage

state.decks = selectedDecks;

let carouselItems = 3; 

function carouselResize(x) { // Makes carousel responsive
  if (x.matches) {
    carouselItems = 1;
  } else {
    carouselItems = 3;
  }
}

var x = window.matchMedia("(max-width: 900px)");
carouselResize(x);
</script>

<template>
  <div class="deck-carousel__container">
    <h1 class="carousel__home">Featured Decks</h1>
    <div class="deck-carousel__grid">
      <carousel :items-to-show="carouselItems" :wrapAround="true">
        <slide v-for="(item, index) in selectedDecks" :key="index" :item="item">
          <div class="carousel__item">
            <RouterLink :to="'/collection/' + item.id">
              <div class="carousel-row">
                <div class="carousel-img"><img :src="item.cardBack" /></div>
                <div class="carousel-name">{{ item.deckName }}</div>
              </div>
            </RouterLink>
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.7;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 0.7;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.8) translate(-10px);
  opacity: 0.7;
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.8) translate(10px);
  opacity: 0.7;
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.2);
  opacity: 1;
}
</style>
