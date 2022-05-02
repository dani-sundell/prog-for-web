<script setup>
import collectedDecks from '../data/decks.json'
import DeckRow from '../components/DeckRow.vue'

function decksAlphaAscend() {
    let sortedDecks = collectedDecks;

    sortedDecks = sortedDecks.sort((a,b) => {
        let fa = a.deckName, fb = b.deckName;
        if (fa < fb) {
            return -1
        }
        if (fa > fb) {
            return 1
        }
        return 0
    })

    console.log(sortedDecks);

    return collectedDecks
};

//decksAlphaAscend();

</script>

<template>
    <div class="deck-row__container">
        <button @click="decksAlphaAscend()">Sort</button>
        <div class="deck-row__grid">
            <DeckRow v-for="(item, index) in collectedDecks"
                :key="index"
                :item="item"
                />
        </div>
    </div>
</template>