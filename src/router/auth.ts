import { RouteRecordRaw } from "vue-router";
import LoginPage from "@/views/Auth/Login.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import CreateAccount from "@/components/auth/CreateAccount.vue";

const authRoute: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    name: "auth",
    component: LoginPage,
    meta: {
      title: "Login",
      icon: "mdi-account",
      authRequired: false,
    },
    children: [
      {
        path: "login",
        name: "login",
        component: LoginForm,
        meta: {
          title: "User Login",
          icon: "mdi-account",
          authRequired: false,
        },
      },
      {
        path: "signup",
        name: "signup",
        component: CreateAccount,
        meta: {
          title: "Create account",
          icon: "mdi-account",
          authRequired: false,
        },
      },
    ],
  },
];

export default authRoute;
