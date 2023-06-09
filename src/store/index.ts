import { createStore } from "vuex";
import AppModule, { AppModuleState } from "./modules/appModule";
import AuthModule, { AuthModuleState } from "./modules/auth/authModule";

export interface State {
  app: AppModuleState;
  auth: AuthModuleState;
}

export default createStore<State>({
  modules: {
    app: AppModule,
    auth: AuthModule,
  },
});
