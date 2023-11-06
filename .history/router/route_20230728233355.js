import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    Path: "/index",
    component: () => import("../src/components/index"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
