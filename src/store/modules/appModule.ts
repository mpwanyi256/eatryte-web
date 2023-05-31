import { ActionContext } from "vuex";
import config from "@/config/appConfig";
import { State } from "../";

export interface QuickLink {
  title: string;
  icon: string;
  path: string;
  style: string;
}

export interface AppModuleState {
  baseUrl: string;
  name: string;
  drawer: boolean;
  quickLinks: Array<QuickLink>;
}

type Context = ActionContext<AppModuleState, State>;

export default {
  namespaced: true,
  state: (): AppModuleState => ({
    baseUrl: config.app.baseUrl,
    name: config.app.name,
    drawer: false,
    quickLinks: [
      {
        title: "Home",
        icon: "mdi-home-outline",
        path: "home",
        style: "",
      },
      {
        title: "Trending",
        icon: "mdi-map-marker-outline",
        path: "trending",
        style: "hide-on-mobile",
      },
      {
        title: "Cart",
        icon: "mdi-cart-outline",
        path: "cart",
        style: "",
      },
      {
        title: "Favorites",
        icon: "mdi-heart-outline",
        path: "favorites",
        style: "hide-on-mobile",
      },
      {
        title: "Profile",
        icon: "mdi-account-outline",
        path: "profile",
        style: "",
      },
    ],
  }),
  mutations: {
    toggleDrawer(state: AppModuleState) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    toggleDrawer({ commit }: Context) {
      commit("toggleDrawer");
    },
  },
};
