// import { ActionContext } from "vuex";

// import { State } from "../..";
import actions from "./actions";
import mutations from "./mutations";

export interface AuthModuleState {
  user: any;
  loading: boolean;
  alertMessage: string;
}

// type Context = ActionContext<AuthModuleState, State>;

const state: AuthModuleState = {
  user: null,
  loading: false,
  alertMessage: "",
};

// const mutations = {};

// const actions: AuthModuleActions = Actions;

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
