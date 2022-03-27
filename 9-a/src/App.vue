<script setup>
import { reactive } from 'vue';
import DeckRow from './components/DeckRow.vue';

const acquisitionType = {
  typeGift: "Gift",
  typePurchase: "Purchased"
};
  
const cards = [
  {
    deckName: "3-D Birds",
    deckBox: "imgs/birds-deck.jpg",
    cardBack: "imgs/birds-back.jpg",
    cardFace: "imgs/birds-face.jpg",
    originLocation: "Washington, D.C.",
    methodOfAcquisition: acquisitionType.typeGift,
    id: 1
  },
  {
    deckName: "Contraband",
    deckBox: "imgs/contra-deck.jpg",
    cardBack: "imgs/contra-back.jpg",
    cardFace: "imgs/contra-face.jpg",
    originLocation: "Tysons Corner, VA",
    methodOfAcquisition: acquisitionType.typePurchase,
    id: 2
  },
  {
    deckName: "Francis Ford Coppola",
    deckBox: "imgs/ffc-deck.jpg",
    cardBack: "imgs/ffc-back.jpg",
    cardFace: "imgs/ffc-face.jpg",
    originLocation: "Geyserville, CA",
    methodOfAcquisition: acquisitionType.typePurchase,
    id: 3
  },
  {
    deckName: "Night Sky",
    deckBox: "imgs/night-deck.jpg",
    cardBack: "imgs/night-back.jpg",
    cardFace: "imgs/night-face.jpg",
    originLocation: "Salvo, NC",
    methodOfAcquisition: acquisitionType.typeGift,
    id: 4
  },
  {
    deckName: "Fredericks & Mae",
    deckBox: "imgs/f&m-deck.jpg",
    cardBack: "imgs/f&m-back.jpg",
    cardFace: "imgs/f&m-face.jpg",
    originLocation: "Washington, D.C.",
    methodOfAcquisition: acquisitionType.typePurchase,
    id: 5
  }
];

const newDeckObj = {
  deckName: "",
  deckBox: "",
  cardBack: "",
  cardFace: "",
  originLocation: "",
  methodOfAcquisition: ""
};

const state = reactive({cards: cards, newDeckObj: newDeckObj});

function addNewDeck() {
  state.cards.push({
  deckName: state.newDeckObj.deckName,
  deckBox: state.newDeckObj.deckBox,
  cardBack: state.newDeckObj.cardBack,
  cardFace: state.newDeckObj.cardFace,
  originLocation: state.newDeckObj.originLocation,
  methodOfAcquisition: state.newDeckObj.methodOfAcquisition,
  id: state.cards.length + 1
  });
  state.newDeckObj.deckName = "";
  state.newDeckObj.deckBox = "";
  state.newDeckObj.cardBack = "";
  state.newDeckObj.cardFace = "";
  state.newDeckObj.originLocation = "";
  state.newDeckObj.methodOfAcquisition = "";
};

function handleDelete(itemToDelete) {
  console.log(itemToDelete.id, itemToDelete.deckName);
  state.cards = state.cards.filter((itemToCheck) => {
    return itemToDelete !== itemToCheck;
  });
};
</script>

<template>
  <div class="container">
    <h1 class="header">My Playing Card Collection</h1>
      <div class="legend">
          <div class="legend-item">Gift = <div class="box gift"></div></div>
          <div class="legend-item">Purchased = <div class="box purchased"></div></div>
      </div>
    
    <table>
        <tr>
            <th>Deck Name</th>
            <th>Card Box</th>
            <th>Card Back</th>
            <th>Card Front</th>
            <th>Location of Origin</th>
            <th>Acquisition Method</th>
            <th>Actions</th>
        </tr>
        <DeckRow v-for="(cards, index) in state.cards"
        v-bind:key="index"
        v-bind:item="cards"
        v-on:delete-item="handleDelete"
        />
    </table>

    <form v-on:submit.prevent="addNewDeck" class="collection-form">
        <fieldset>
          <legend class="header">Add a card deck to the collection</legend>
          <div class="form-field">
              <label class="form-padding form-label" for="deckName">Deck Name</label>
              <input class="input-field" type="text" name="" id="deckName" v-model="newDeckObj.deckName" placeholder="Bicycle Red">
          </div>
          <div class="form-field">
              <div><label class="form-padding form-label" for="deckBox">Deck Box</label>
              <div class="label-desc">Please provide the url of a square image</div>
              </div>
              <input class="input-field" type="text" name="" id="deckBox" v-model="newDeckObj.deckBox" placeholder="https:/example.com/deck-box.jpg">
          </div>
          <div class="form-field">
              <div>
                  <label class="form-padding form-label" for="cardBack">Card Back</label>
                  <div class="label-desc">Please provide the url of a square image</div>
              </div>
              <input class="input-field" type="text" name="" id="cardBack" v-model="newDeckObj.cardBack" placeholder="https:/example.com/deck-back.jpg">
          </div>
          <div class="form-field">
              <div>
                  <label class="form-padding form-label" for="cardFace">Card Face</label>
                  <div class="label-desc">Please provide the url of a square image</div>
              </div>
              <input class="input-field" type="text" name="" id="cardFace" v-model="newDeckObj.cardFace" placeholder="https:/example.com/deck-face.jpg">
          </div>
          <div class="form-field">
              <label class="form-padding form-label" for="originLocation">Location of Origin</label>
              <input class="input-field" type="text" name="" id="originLocation" v-model="newDeckObj.originLocation" placeholder="Portland, ME">
          </div>
          <div class="form-field radio">
              <span class="form-label">Acquisition Method</span><br>
              <div class="input-field">
                  <div class="radio-options">
                      <input
                      type="radio"
                      id="acquisitionType.typeGift"
                      value="Gift"
                      v-model="newDeckObj.methodOfAcquisition"
                      name="acquisition">
                      <label class="form-padding" for="acquisitionType.typeGift">Gift</label>
                  </div>

                  <div class="radio-options">
                      <input
                      type="radio"
                      id="acquisitionType.typePurchase"
                      value="Purchased"
                      v-model="newDeckObj.methodOfAcquisition"
                      name="acquisition">
                      <label class="form-padding" for="acquisitionType.typePurchase">Purchased</label>
                  </div>

              </div>
          </div>
          <div class="button-wrap"><button type="submit">Submit</button></div>
        </fieldset>
    </form>
  </div>
</template>

<style>
@import './assets/collection.css';
</style>
