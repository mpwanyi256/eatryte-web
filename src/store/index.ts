import { createStore } from "vuex";
import BoardModule, { BoardState } from "./modules/BoardModule";
import AppModule, { AppModuleState } from "./modules/appModule";

export interface State {
  board: BoardState;
  app: AppModuleState;
}

export default createStore<State>({
  modules: {
    board: BoardModule,
    app: AppModule,
  },
});
