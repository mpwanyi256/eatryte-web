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
    children: [
      {
        path: "dashboard",
        name: "merchant-dashboard",
        component: () => import("@/components/merchant/MerchantDashboard.vue"),
        meta: {
          title: "Merchant Dashboard",
          icon: "mdi-dashboard",
          authRequired: true,
        },
      },
      {
        path: "outlets",
        name: "merchant-outlets",
        component: () => import("@/components/merchant/MerchantOutlets.vue"),
        meta: {
          title: "Merchant Outlets",
          icon: "mdi-dashboard",
          authRequired: true,
        },
      },
    ],
  },
];

export default machertRoutes;
