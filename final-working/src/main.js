import { createApp } from "vue";
import { reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import collectedDecks from "./data/decks.json";

const state = reactive({ collectedDecks });

const app = createApp(App);

app.directive("inline", (element) => {
  element.replaceWith(...element.children);
});

app.use(router);

app.mount("#app");
