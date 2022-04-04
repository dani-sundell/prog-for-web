<script setup>
import decks from '../data/decks.json';
import DeckRow from '../components/DeckRow.vue';
console.log(decks);
</script>

<template>
    <div class="deck-row__container">
        <div class="deck-row__grid">
            <DeckRow v-for="(item, index) in decks"
                :key="index"
                :item="item"
                />
        </div>
    </div>
</template>
