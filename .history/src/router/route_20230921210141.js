import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/video",
  },
  {
    path: "/car",
    name: "car",
    component: () => import("../views/CarShow.vue"),
  },
  {
    path: "/video",
    name: "video",
    component: () => import("../views/RealTimeVideo.vue"),
  },
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
