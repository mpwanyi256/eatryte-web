import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import appConfig from "@/config/appConfig";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
      icon: "mdi-home",
      authRequired: false,
    },
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(appConfig.app.baseUrl),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = `${appConfig.app.name} | ${to.meta.title}`;
  next();
});

export default router;
