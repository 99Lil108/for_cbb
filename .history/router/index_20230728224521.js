import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    Path: "/index",
    name: "index",
    component: () => import("../views/index/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
