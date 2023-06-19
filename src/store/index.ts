import { createStore } from "vuex";
import AppModule, { AppModuleState } from "./modules/appModule";
import AuthModule, { AuthModuleState } from "./modules/auth/authModule";
import MerchantModule, {
  MerchantModuleState,
} from "./modules/merchant/merchantModule";

export interface State {
  app: AppModuleState;
  auth: AuthModuleState;
  merchant: MerchantModuleState;
}

export default createStore<State>({
  modules: {
    app: AppModule,
    auth: AuthModule,
    merchant: MerchantModule,
  },
});
