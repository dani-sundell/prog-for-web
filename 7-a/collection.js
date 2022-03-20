Vue.createApp({ 
    data(){
      return {
        cards: [
            {
                deckName: "3-D Birds",
                deckBox: "imgs/birds-deck.jpg",
                cardBack: "imgs/birds-back.jpg",
                cardFace: "imgs/birds-face.jpg",
                originLocation: "Washington, D.C.",
                methodOfAcquisition: "Gift"
              },
              {
                deckName: "Contraband",
                deckBox: "imgs/contra-deck.jpg",
                cardBack: "imgs/contra-back.jpg",
                cardFace: "imgs/contra-face.jpg",
                originLocation: "Tysons Corner, VA",
                methodOfAcquisition: "Purchased"
              },
              {
                deckName: "Francis Ford Coppola",
                deckBox: "imgs/ffc-deck.jpg",
                cardBack: "imgs/ffc-back.jpg",
                cardFace: "imgs/ffc-face.jpg",
                originLocation: "Geyserville, CA",
                methodOfAcquisition: "Purchased"
              },
              {
                deckName: "Night Sky",
                deckBox: "imgs/night-deck.jpg",
                cardBack: "imgs/night-back.jpg",
                cardFace: "imgs/night-face.jpg",
                originLocation: "Salvo, NC",
                methodOfAcquisition: "Gift"
              },
              {
                deckName: "Fredericks & Mae",
                deckBox: "imgs/f&m-deck.jpg",
                cardBack: "imgs/f&m-back.jpg",
                cardFace: "imgs/f&m-face.jpg",
                originLocation: "Washington, D.C.",
                methodOfAcquisition: "Purchased"
              }
        ]
      }
    }
  }).mount("#app");