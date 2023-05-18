import { ActionContext } from "vuex";
import axios, { AxiosResponse } from "axios";

import { Card } from "@/types/generics";
import { State } from "../";

export interface BoardState {
  cards: Array<Card>;
}

type Context = ActionContext<BoardState, State>;

export default {
  namespaced: true,
  state: (): BoardState => ({
    cards: Array<Card>(),
  }),
  mutations: {
    setCards: function (state: BoardState, cards: Array<Card>): void {
      state.cards = cards;
    },
  },
  actions: {
    fetchCards: async function (context: Context): Promise<void> {
      const response: AxiosResponse = await axios.get("cards"); //fetch("/api/cards");
      const cards = await response.data;
      context.commit("setCards", cards);
    },
  },
  getters: {
    loadedCards: function (state: BoardState): Array<Card> {
      return state.cards;
    },
  },
};
