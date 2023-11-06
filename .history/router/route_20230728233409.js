import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    Path: "/index",
    component: () => import("../src/components/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
