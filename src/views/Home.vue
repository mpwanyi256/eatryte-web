<template>
  <Page title="Board">
    <template #options>
      <BoardActions />
    </template>
    <template #content>
      <div class="board">
        <BoardColumn
          v-for="column in boardsColumns"
          ref="list"
          :id="`column-${column.id}`"
          :key="column.id"
          :column="column"
          :hasCards="loadedCards.length > 0"
        >
          <BoardCard
            :columnLabel="column"
            v-for="card in getColumnCards(column.id)"
            :key="card.id"
            :card="card"
            :column="column"
            :lists="[].slice.call(lists)"
            @move-card="moveCard"
          />
        </BoardColumn>
      </div>
      <router-view />
    </template>
  </Page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { State } from "@/store";
import { useStore } from "vuex";
import mitt from "mitt";

import { Card, Column, MoveCardPayload } from "@/types/generics";
import Page from "@/components/generics/Page.vue";
import BoardColumn from "@/components/Board/BoardColumn.vue";
import BoardCard from "@/components/Board/BoardCard.vue";
import BoardActions from "@/components/Board/BoardActions.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Page,
    BoardCard,
    BoardColumn,
    BoardActions,
  },
  setup() {
    const store = useStore<State>();
    const emitter = mitt();

    const list = ref<HTMLElement | null>(null);
    const lists = ref<Element[]>([]);

    const cards = computed<Card[]>(() => {
      return store.state.board.cards;
    });

    const boardColumns = computed<Column[]>(() => {
      return store.state.board.boardsColumns;
    });

    const getColumnCards = (columnId: number) => {
      return cards.value.filter((card) => card.column_id === columnId);
    };

    const moveCard = async (data: MoveCardPayload) => {
      const cardIdx = cards.value.findIndex((card) => card.id === data.card.id);
      if (cardIdx >= 0) {
        cards.value[cardIdx].column_id = data.to_column_id;
      }
      await store.dispatch("board/updateCard", data);
      emitter.emit("scroll-to-card", data);
    };

    const fetchColumns = async () => {
      await store.dispatch("board/fetchBoardColumns");
    };

    const fetchCards = async () => {
      await store.dispatch("board/fetchCards");
    };

    onMounted(async () => {
      await Promise.all([fetchColumns(), fetchCards()]);
      lists.value = [].slice.call(list.value);
    });

    return {
      list,
      lists,
      boardsColumns: boardColumns,
      loadedCards: cards,
      moveCard,
      getColumnCards,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.board {
  display: flex;
  flex-wrap: nowrap;
  padding: 16px 20px;
  height: 100%;
  overflow-x: auto;
  @include scrollbar();

  .column {
    width: 360px;
    flex-shrink: 0;
  }

  & > * + * {
    margin-left: 8px;
  }
}
</style>
