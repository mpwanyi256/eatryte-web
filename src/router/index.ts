import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

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
  const isLoggedin = localStorage.getItem("token");
  const { authRequired } = to.meta;

  const setNavTitle = () => {
    scrollTop();
    document.title = `${appConfig.app.name} | ${to.meta.title}`;
  }

  if (authRequired) {
    if(isLoggedin) {
      next();
      setNavTitle();
    } else {
      router.replace({ name: "login" })
        .then(() => {
          store.commit("app/toggleAlert", "Please login to continue");
          setNavTitle(); 
        }); 
    }
  } else {
    next();
    setNavTitle();
    return;
  }
});

// Disable error logging
router.onError(() => {})

export default router;
