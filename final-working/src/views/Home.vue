<script setup>
import decks from '../data/decks.json'
import CarouselRow from '../components/CarouselRow.vue'
</script>

<template>
    <div class="deck-carousel__container">
      <h1 class="carousel__home">Featured Decks</h1>
        <div class="deck-carousel__grid">
            <CarouselRow v-for="(item, index) in decks.slice(6,7)"
                :key="index"
                :item="item"
                />
                <CarouselRow v-for="(item, index) in decks.slice(7,8)"
                :key="index"
                :item="item"
                />
                <CarouselRow v-for="(item, index) in decks.slice(3,4)"
                :key="index"
                :item="item"
                />
        </div>
    </div>
</template>
