import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
