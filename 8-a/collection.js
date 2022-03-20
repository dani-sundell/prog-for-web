let acquisitionType = {
    typeGift: "Gift",
    typePurchase: "Purchased"
  };
const vm = Vue.createApp({ 
    data(){
      return {
        newDeckObj: {
          deckName: "",
          deckBox: "",
          cardBack: "",
          cardFace: "",
          originLocation: "",
          methodOfAcquisition: ""
        },
        cards: [
            {
                deckName: "3-D Birds",
                deckBox: "imgs/birds-deck.jpg",
                cardBack: "imgs/birds-back.jpg",
                cardFace: "imgs/birds-face.jpg",
                originLocation: "Washington, D.C.",
                methodOfAcquisition: acquisitionType.typeGift
              },
              {
                deckName: "Contraband",
                deckBox: "imgs/contra-deck.jpg",
                cardBack: "imgs/contra-back.jpg",
                cardFace: "imgs/contra-face.jpg",
                originLocation: "Tysons Corner, VA",
                methodOfAcquisition: acquisitionType.typePurchase
              },
              {
                deckName: "Francis Ford Coppola",
                deckBox: "imgs/ffc-deck.jpg",
                cardBack: "imgs/ffc-back.jpg",
                cardFace: "imgs/ffc-face.jpg",
                originLocation: "Geyserville, CA",
                methodOfAcquisition: acquisitionType.typePurchase
              },
              {
                deckName: "Night Sky",
                deckBox: "imgs/night-deck.jpg",
                cardBack: "imgs/night-back.jpg",
                cardFace: "imgs/night-face.jpg",
                originLocation: "Salvo, NC",
                methodOfAcquisition: acquisitionType.typeGift
              },
              {
                deckName: "Fredericks & Mae",
                deckBox: "imgs/f&m-deck.jpg",
                cardBack: "imgs/f&m-back.jpg",
                cardFace: "imgs/f&m-face.jpg",
                originLocation: "Washington, D.C.",
                methodOfAcquisition: acquisitionType.typePurchase
              }
        ]
      }
    },
    methods: {
      submitHandler: () => {
        console.log("submitted");
        vm.cards = vm.cards.concat(vm.newDeckObj);
        vm.resetForm();
      },
      resetForm: () => {
        vm.newDeckObj = {
          deckName: "",
          deckBox: "",
          cardBack: "",
          cardFace: "",
          originLocation: "",
          methodOfAcquisition: ""
        };
      },
      deleteItem: item => {
        vm.cards = vm.cards.filter(cards => 
          { return cards !== item;
          });
          console.log("deleted");
        }
    }
  }).mount("#app");