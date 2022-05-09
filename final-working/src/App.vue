<script setup>
import { RouterLink, RouterView } from "vue-router";
import { reactive } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import "normalize.css";
import "./assets/collection.css";
import collectedDecks from "./data/decks.json";
</script>

<template>
  <main>
    <NavBar />
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in"> 
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Footer />
  </main>
</template>

<script>
const state = reactive({ collectedDecks });

// Reset sort order between vue routes

function decksResetSort() {
  let sortedDecks = state.collectedDecks;

  sortedDecks = sortedDecks.sort((a, b) => {
    let fa = a.id,
      fb = b.id;
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

export default {
  data() {
    return {};
  },
  watch: {
    // resets deck order to original state between route changes
    $route(to, from) {
      console.log("route changed");
      decksResetSort();
    },
  },
};
</script>

<style>
/* router transition styles */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
