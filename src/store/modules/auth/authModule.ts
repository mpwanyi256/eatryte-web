import actions from "./actions";
import mutations from "./mutations";
import { User } from "@/store/types";

export interface AuthModuleState {
  user: User | null;
  loading: boolean;
  alertMessage: string;
}

const state: AuthModuleState = {
  user: null,
  loading: false,
  alertMessage: "",
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
