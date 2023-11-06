import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    Path: "/index",
    name: "index",
    component: () => import("../src/components/index.vue"),
  },
  {
    Path: "/test1",
    name: "test1",
    component: () => import("../src/components/test1.vue"),
  },
  {
    Path: "/test2",
    name: "test2",
    component: () => import("../src/components/test2.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
