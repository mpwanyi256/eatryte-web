import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import appConfig from "@/config/appConfig";
import Home from "@/views/Home.vue";
import Listing from "@/views/Listing.vue";

import authRoute from "./authRoutes";
import machertRoutes from "./merchantRoutes";

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

router.beforeEach(async (to, _, next) => {
  const isLoggedin = localStorage.getItem("isLoggedin");
  const { authRequired } = to.meta;
  scrollTop();
  document.title = `${appConfig.app.name} | ${to.meta.title}`;
  if (isLoggedin) {
    next();
  } else if (!isLoggedin) {
    if (authRequired) {
      router.replace({ name: "home" });
      return;
    }
    //router.replace({ name: "home" });
    next();
  }
});

export default router;
