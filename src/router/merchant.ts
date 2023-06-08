import { RouteRecordRaw } from "vue-router";

const machertRoutes: Array<RouteRecordRaw> = [
  {
    path: "/merchant",
    name: "merchant",
    component: () => import("@/views/Merchant/MerchantHomePage.vue"),
    meta: {
      title: "Merchant",
      icon: "mdi-account",
      authRequired: true,
    },
    children: [],
  },
];

export default machertRoutes;
