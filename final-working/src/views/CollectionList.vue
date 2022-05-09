<script setup>
import { reactive } from "vue";
import collectedDecks from "../data/decks.json";
import DeckRow from "../components/DeckRow.vue";

const state = reactive({ collectedDecks });

// Deck Theme Groups

let natureTheme = state.collectedDecks.filter(function (deck) {
  return deck.theme === "Nature";
});

let ornateTheme = state.collectedDecks.filter(function (deck) {
  return deck.theme === "Ornate";
});

let noveltyTheme = state.collectedDecks.filter(function (deck) {
  return deck.theme === "Novelty";
});

let popCultureTheme = state.collectedDecks.filter(function (deck) {
  return deck.theme === "Pop Culture";
});

let tarotTheme = state.collectedDecks.filter(function (deck) {
  return deck.theme === "Tarot";
});

let travelTheme = state.collectedDecks.filter(function (deck) {
  return deck.theme === "Travel";
});

let everyTheme = state.collectedDecks.filter(function (deck) {
  return (
    deck.theme === "Travel" ||
    deck.theme === "Tarot" ||
    deck.theme === "Pop Culture" ||
    deck.theme === "Novelty" ||
    deck.theme === "Ornate" ||
    deck.theme === "Nature"
  );
});


// Alphabetical Sort

function decksAlphaAscend() {
  let sortedDecks = state.collectedDecks;

  sortedDecks = sortedDecks.sort((a, b) => {
    let fa = a.deckName,
      fb = b.deckName;
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return state.collectedDecks;
}

function decksAlphaDescend() {
  let sortedDecks = state.collectedDecks;

  sortedDecks = sortedDecks.sort((a, b) => {
    let fa = a.deckName,
      fb = b.deckName;
    if (fa > fb) {
      return -1;
    }
    if (fa < fb) {
      return 1;
    }
    return 0;
  });

  return state.collectedDecks;
}

// Theme Sort

function decksNatureTheme() {
  state.collectedDecks = natureTheme;

  return state.collectedDecks;
}

function decksOrnateTheme() {
  state.collectedDecks = ornateTheme;

  return state.collectedDecks;
}

function decksNoveltyTheme() {
  state.collectedDecks = noveltyTheme;

  return state.collectedDecks;
}

function decksPopCultureTheme() {
  state.collectedDecks = popCultureTheme;

  return state.collectedDecks;
}

function decksTarotTheme() {
  state.collectedDecks = tarotTheme;

  return state.collectedDecks;
}

function decksTravelTheme() {
  state.collectedDecks = travelTheme;

  return state.collectedDecks;
}

function decksEveryTheme() {
  state.collectedDecks = everyTheme;

  return state.collectedDecks;
}
</script>

<template>
  <div class="deck-row__container">
    <h1>The Collection</h1>
    <div class="sort__container">
      <!-- alpha sort -->

      <div class="btn__sort">
        <div class="tags pill">Sort:</div>
        <button class="btn tags btn__arrow" @click="decksAlphaAscend()">
          &#8593;
        </button>
        <button class="btn tags btn__arrow" @click="decksAlphaDescend()">
          &#8595;
        </button>
      </div>

      <!-- theme sort -->

      <div class="pill__container">
        <div class="tags pill">Filter:</div>
        <button class="btn btn__text tags nature" @click="decksNatureTheme()">
          Nature
        </button>
        <button class="btn btn__text tags ornate" @click="decksOrnateTheme()">
          Ornate
        </button>
        <button class="btn btn__text tags novelty" @click="decksNoveltyTheme()">
          Novelty
        </button>
        <button
          class="btn btn__text tags popCulture"
          @click="decksPopCultureTheme()"
        >
          Pop Culture
        </button>
        <button class="btn btn__text tags travel" @click="decksTravelTheme()">
          Travel
        </button>
        <button class="btn btn__text tags tarot" @click="decksTarotTheme()">
          Tarot
        </button>

        <!-- all sort -->

        <button
          class="btn btn__text tags pill location"
          @click="decksEveryTheme()"
        >
          all
        </button>
      </div>
    </div>

    <div class="deck-row__grid">
      <DeckRow
        v-for="(item, index) in state.collectedDecks"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>
