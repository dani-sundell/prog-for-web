<script setup>
import { reactive } from 'vue';
import collectedDecks from '../data/decks.json'
import DeckRow from '../components/DeckRow.vue'

const state = reactive({collectedDecks});

function decksResetSort() {
    let sortedDecks = state.collectedDecks;

    sortedDecks = sortedDecks.sort((a,b) => {
        let fa = a.id, fb = b.id;
        if (fa < fb) {
            return -1
        }
        if (fa > fb) {
            return 1
        }
        return 0
    })

    return state.collectedDecks
};

function decksAlphaAscend() {
    let sortedDecks = state.collectedDecks;

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

    return state.collectedDecks
};

function decksAlphaDescend() {
    let sortedDecks = state.collectedDecks;

    sortedDecks = sortedDecks.sort((a,b) => {
        let fa = a.deckName, fb = b.deckName;
        if (fa > fb) {
            return -1
        }
        if (fa < fb) {
            return 1
        }
        return 0
    })

    return state.collectedDecks
};

function decksNatureTheme() {
    
    state.collectedDecks = state.collectedDecks.filter(function (e) {
        return e.theme === 'Nature';
    });

    console.log(state.collectedDecks);

    return state.collectedDecks
}

function decksShowAll() {
    // state.collectedDecks = state.collectedDecks.filter(function (e) {
    //     return e.theme === 'Nature' || e.theme === 'Novelty' || e.theme === 'Ornate' || e.theme === 'Pop Culture' || e.theme === 'Travel' || e.theme === 'Tarot';
    // });

    // console.log(state.collectedDecks);

    // return state.collectedDecks

    state.collectedDecks.push(collectedDecks[16]);

}

</script>

<template>
    <div class="deck-row__container">
        <button @click="decksAlphaAscend()">Sort &#8593;</button>
        <button @click="decksAlphaDescend()">Sort &#8595;</button>
        <button @click="decksNatureTheme()">Nature</button>
        <button @click="decksShowAll()">Reset</button>
        <div class="deck-row__grid">
            <DeckRow v-for="(item, index) in state.collectedDecks"
                :key="index"
                :item="item"
                />
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  watch: {
    $route(to, from) {
      console.log("route changed");
      this.decksResetSort();
    },
  }
}
</script>
