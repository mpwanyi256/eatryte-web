import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import appConfig from "@/config/appConfig";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Board",
      icon: "mdi-home",
      authRequired: false,
    },
    children: [
      {
        path: "/card/:id",
        name: "cardDetails",
        component: () =>
          import("@/components/Board/cardDetails/CardDetailsModal.vue"),
        meta: {
          title: "Card Details",
          icon: "mdi-card-text",
          authRequired: false,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(appConfig.app.baseUrl),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = `Kanban | ${to.meta.title}`;
  next();
});

export default router;
