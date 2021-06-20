import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Music from "@/views/Music.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home-music",
    component: Music
  },
  {
    path: "/music",
    name: "music",
    component: Music
  },
  {
    path: "/music",
    name: "movies",
    component: () => import("@/views/Movies.vue")
  },
  {
    path: "/tv-shows",
    name: "tv-shows",
    component: () => import("@/views/TvShows.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
