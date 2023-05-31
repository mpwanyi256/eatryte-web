import { ActionContext } from "vuex";
import config from "@/config/appConfig";
import { State } from "../";

export interface AppModuleState {
  baseUrl: string;
  name: string;
  drawer: boolean;
}

type Context = ActionContext<AppModuleState, State>;

export default {
  namespaced: true,
  state: (): AppModuleState => ({
    baseUrl: config.app.baseUrl,
    name: config.app.name,
    drawer: false,
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
