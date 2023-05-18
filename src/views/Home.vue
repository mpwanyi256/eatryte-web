<template>
  <Page title="Board">
    <template #content>
      <div class="board">
        <BoardColumn
          v-for="column in boardsColumns"
          :key="column"
          :columnLabel="column"
          :hasCards="loadedCards.length > 0"
        >
          <BoardCard
            :columnLabel="column"
            v-for="card in loadedCards"
            :key="card.id"
            :card="card"
          />
        </BoardColumn>
      </div>
    </template>
  </Page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Page from "@/components/generics/Page.vue";
import BoardColumn from "@/components/Board/BoardColumn.vue";
import BoardCard from "@/components/Board/BoardCard.vue";
import { Card } from "@/types/generics";

export default defineComponent({
  name: "HomeView",
  components: {
    Page,
    BoardColumn,
    BoardCard,
  },
  setup() {
    const boardColumns = ref<string[]>([
      "Backlog",
      "To Do",
      "Blocked",
      "In Progress",
      "In Review",
      "Done",
    ]);

    const generateCards = () => {
      const array = [];
      for (let i = 1; i <= 100; i++) {
        const points = Math.random() * 10;
        const item: Card = {
          id: i,
          title: `Card ${i}`,
          description: "This is a card description",
          total_points: Math.round(points),
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

    const cards = ref<Card[]>(generateCards());

    return {
      boardsColumns: boardColumns.value,
      loadedCards: cards.value,
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
