import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // {
  //   path: "/index",
  //   name: "index",
  //   component: () => import("../src/components/index.vue"),
  // },
  // {
  //   path: "/test1",
  //   name: "test1",
  //   component: () => import("../src/components/test1.vue"),
  // },
  // {
  //   path: "/test2",
  //   name: "test2",
  //   component: () => import("../src/components/test2.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
