import { createRouter, createWebHistory } from "vue-router";
import SeasonsView from "@/views/SeasonsView.vue";
import EpisodeView from "@/views/EpisodeView.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "seasons",
    component: SeasonsView,
  },
  {
    path: "/episode/:episodeId",
    name: "episode",
    component: EpisodeView,
    props: true,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
