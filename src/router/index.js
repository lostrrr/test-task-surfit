import { createRouter, createWebHistory } from "vue-router";
import SeasonsView from "@/views/SeasonsView.vue";
import EpisodeView from "@/views/EpisodeView.vue";
const routes = [
  {
    path: "/",
    name: "seasons",
    component: SeasonsView,
  },
  {
    path: "/episode",
    name: "episode",
    component: EpisodeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
