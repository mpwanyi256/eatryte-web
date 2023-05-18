<template>
  <Page title="Board">
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
import Page from "@/components/generics/Page.vue";
import BoardColumn from "@/components/Board/BoardColumn.vue";
import BoardCard from "@/components/Board/BoardCard.vue";
import { Card, Column, MoveCardPayload } from "@/types/generics";

export default defineComponent({
  name: "HomeView",
  components: {
    Page,
    BoardColumn,
    BoardCard,
  },
  setup() {
    const boardColumns = ref<Column[]>([
      { id: 1, name: "Backlog" },
      { id: 2, name: "Blocked" },
      { id: 3, name: "In Progress" },
      { id: 4, name: "In Review" },
      { id: 5, name: "Done" },
    ]);

    const list = ref<HTMLElement | null>(null);
    const lists = ref<Element[]>([]);

    function getRandomNumberFromArray(numbers: number[]) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      return numbers[randomIndex];
    }

    const generateCards = () => {
      const array = [];
      for (let i = 1; i <= 100; i++) {
        const points = Math.random() * 10;
        const item: Card = {
          id: i,
          title: `Card ${i}`,
          description: "This is a card description",
          total_points: Math.round(points),
          column_id: getRandomNumberFromArray(
            boardColumns.value.map((c) => c.id)
          ),
          assignee: {
            id: 1,
            name: "John Doe",
            avatar: "https://i.pravatar.cc/300",
          },
          comment_count: 1,
          tags: [
            { id: 1, name: "dev" },
            { id: 2, name: "design" },
          ],
        };
        array.push(item);
      }
      return array;
    };

    const cards = ref<Card[]>([]);

    const getColumnCards = (columnId: number) => {
      return cards.value.filter((card) => card.column_id === columnId);
    };

    const moveCard = (data: MoveCardPayload) => {
      console.log("move card", data);
      // update card column_id
      const card = cards.value.find((c) => c.id === data.card.id);
      if (card) {
        card.column_id = data.to_column_id;
      }
    };

    onMounted(() => {
      cards.value = generateCards();
      lists.value = [].slice.call(list.value);
    });

    return {
      list,
      lists,
      boardsColumns: boardColumns.value,
      loadedCards: computed(() => cards.value),
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
