import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import appConfig from "@/config/appConfig";
import Home from "@/views/Home.vue";
import Listing from "@/views/Listing.vue";
import store from "@/store";

import authRoute from "./authRoutes";
import machertRoutes from "./merchant";

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
  {
    path: "/listing",
    name: "listing",
    component: Listing,
    meta: {
      title: "Listing",
      icon: "mdi-home",
      authRequired: false,
    },
  },
  ...authRoute,
  ...machertRoutes,
];

const router = createRouter({
  history: createWebHistory(appConfig.app.baseUrl),
  routes,
});

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

router.beforeEach((to, _, next) => {
  scrollTop();
  document.title = `${appConfig.app.name} | ${to.meta.title}`;
  const { authRequired } = to.meta;
  const authData = store.state.auth.user;
  if (authRequired && (!authData || !authData.id)) {
    router.replace({ name: "home" });
    return;
  }
  next();
});

export default router;
