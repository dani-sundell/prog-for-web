import { createRouter, createWebHashHistory } from 'vue-router';
import home from "../views/home.vue";
import about from "../views/about.vue";
import themes from "../views/themes.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/themes",
      name: "themes",
      component: themes
    }
  ]
});

export default router;
