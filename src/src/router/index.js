import { createRouter, createWebHistory } from "vue-router";
import Landing from "../Landing.vue";
import Kayak from "../Kayak.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    {
      path: "/kayak",
      name: "kayak",
      component: Kayak,
    },
    {
      path: '/cgv',
      beforeEnter() {location.href = 'https://www.canalo.fr/CGVCANALO6.pdf'}
 }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

export default router;
