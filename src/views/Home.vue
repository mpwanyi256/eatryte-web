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
    </template>
  </Page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { State } from "@/store";
import { useStore } from "vuex";

import { Card, Column, MoveCardPayload } from "@/types/generics";
import Page from "@/components/generics/Page.vue";
import BoardColumn from "@/components/Board/BoardColumn.vue";
import BoardCard from "@/components/Board/BoardCard.vue";
import BoardActions from "@/components/Board/BoardActions.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Page,
    BoardColumn,
    BoardCard,
    BoardActions,
  },
  setup() {
    const store = useStore<State>();

    const boardColumns = ref<Column[]>([
      { id: 1, name: "Backlog" },
      { id: 2, name: "Blocked" },
      { id: 3, name: "In Progress" },
      { id: 4, name: "In Review" },
      { id: 5, name: "Done" },
    ]);

    const list = ref<HTMLElement | null>(null);
    const lists = ref<Element[]>([]);

    const cards = ref<Card[]>(store.state.board.cards);

    const trackCards = computed<Card[]>(() => {
      return store.state.board.cards;
    });

    const getColumnCards = (columnId: number) => {
      return trackCards.value.filter((card) => card.column_id === columnId);
    };

    const moveCard = (data: MoveCardPayload) => {
      // update card column_id
      const card = cards.value.find((c) => c.id === data.card.id);
      if (card) {
        card.column_id = data.to_column_id;
      }
    };

    onMounted(async () => {
      await store.dispatch("board/fetchCards");
      lists.value = [].slice.call(list.value);
      console.log(cards.value);
    });

    return {
      list,
      lists,
      boardsColumns: boardColumns.value,
      loadedCards: trackCards,
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
