import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/HomePage";
import Installation from "@/views/Installation.vue";
import Support from "@/views/Support.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/installation",
    name: "Installation",
    component: Installation,
  },
  {
    path: "/support",
    name: "Support",
    component: Support,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
