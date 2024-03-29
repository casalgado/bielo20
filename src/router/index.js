import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "custom",
    component: () => import("../views/CustomRouter.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  // {
  //   path: "/club",
  //   name: "club",
  //   component: () => import("../views/TheClub.vue"),
  // },
  {
    path: "/estado",
    name: "estado",
    component: () => import("../views/Estado.vue"),
  },
  {
    path: "/single",
    name: "single",
    component: () => import("../views/SinglePodcast.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
