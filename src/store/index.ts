import { createStore } from "vuex";
import BoardModule, { BoardState } from "./modules/BoardModule";

export interface State {
  board: BoardState;
}

export default createStore<State>({
  modules: {
    board: BoardModule,
  },
});
