import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    Path: "/index",
    component: () => import("../src/components/index.vue"),
  },
  {
    Path: "/test1",
    component: () => import("../src/components/test1.vue"),
  },
  {
    Path: "/test2",
    component: () => import("../src/components/test2.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
