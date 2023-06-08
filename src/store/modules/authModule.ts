import { ActionContext } from "vuex";

import { State } from "../";

export interface AuthModuleState {
  user: any;
}
type Context = ActionContext<AuthModuleState, State>;

const state: AuthModuleState = {
  user: null,
};

const mutations = {};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
