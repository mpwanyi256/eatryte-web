<template>
  <Page title="Board">
    <template #content>
      <div class="board">
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
      </div>
    </template>
  </Page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Page from "@/components/generics/Page.vue";
import BoardColumn from "@/components/Board/BoardColumn.vue";

@Options({
  components: {
    Page,
    BoardColumn,
  },
  props: {
    msg: String,
  },
})
export default class HomeView extends Vue {}
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
