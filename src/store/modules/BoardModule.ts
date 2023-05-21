import { ActionContext } from "vuex";
import axios, { AxiosResponse } from "axios";

import { Card, Column, MoveCardPayload, Comment } from "@/types/generics";
import { State } from "../";

export interface BoardState {
  cards: Array<Card>;
  boardsColumns: Array<Column>;
  selectedCard: Card | null;
}

type Context = ActionContext<BoardState, State>;

export default {
  namespaced: true,
  state: (): BoardState => ({
    cards: Array<Card>(),
    boardsColumns: Array<Column>(),
    selectedCard: null,
  }),
  mutations: {
    setCards: function (state: BoardState, cards: Array<Card>): void {
      state.cards = cards;
    },
    setColumns: function (state: BoardState, columns: Array<Column>): void {
      state.boardsColumns = columns;
    },
    setCard: function (state: BoardState, card: Card): void {
      state.selectedCard = card;
    },
  },
  actions: {
    fetchCards: async function (context: Context): Promise<void> {
      const response: AxiosResponse = await axios.get("cards");
      const cards = await response.data;
      context.commit("setCards", cards);
    },
    fetchBoardColumns: async (context: Context): Promise<void> => {
      const response: AxiosResponse = await axios.get("columns");
      const columns = await response.data;
      context.commit("setColumns", columns);
    },
    updateCard: async (
      context: Context,
      { card, to_column_id }: MoveCardPayload
    ): Promise<void> => {
      const idx = context.state.cards.findIndex((c) => c.id === card.id);

      if (idx >= 0) {
        const updatedCard = { ...card, column_id: to_column_id };
        context.state.cards[idx] = card;

        await axios.patch(`${`cards`}/${card.id}`, updatedCard);
      }
    },
    createCard: async (context: Context, payload: Card): Promise<void> => {
      const response: AxiosResponse = await axios.post("cards", payload);
      const card = await response.data;
      context.state.cards.push(card);
    },
    fetchCardDetails: async (context: Context, id: number): Promise<void> => {
      const response: AxiosResponse = await axios.get(`${`cards`}/${id}`);
      const card = await response.data;
      context.commit("setCard", card);
    },
    resetSelectedCard(context: Context): void {
      context.commit("setCard", null);
    },
    addComment: async (context: Context, payload: Comment): Promise<void> => {
      const response: AxiosResponse = await axios.post("comments", payload);
      return await response.data;
    },
    fetchCardComments: async (
      context: Context,
      cardId: number
    ): Promise<void> => {
      const response: AxiosResponse = await axios.get(
        `${`comments`}?card_id=${cardId}&_sort=id&_order=desc`
      );
      return await response.data;
    },
    deleteComment: async (context: Context, id: number): Promise<void> => {
      const response: AxiosResponse = await axios.delete(`${`comments`}/${id}`);
      return await response.data;
    },
  },
  getters: {
    loadedCards: function (state: BoardState): Array<Card> {
      return state.cards;
    },
  },
};
