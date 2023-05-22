<template>
  <div class="info">
    <div class="info_assignee">
      <div class="info_assignee_header">Details</div>
      <div class="info_assignee_info">
        <div>
          <p>Assignee</p>
          <p>
            <span>
              <v-avatar class="author" :size="24">
                <v-img
                  :src="card.assignee.avatar"
                  :alt="card.assignee.name"
                ></v-img>
              </v-avatar>
            </span>
            {{ card.assignee.name }}
          </p>
        </div>
        <div>
          <p>Column</p>
          <p>{{ cardColumn?.name }}</p>
        </div>
        <div>
          <p>Story Points</p>
          <p>{{ card.total_points }}</p>
        </div>
        <div>
          <p>Created</p>
          <p>{{ dateCreated }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import moment from "moment";
import { Card, Column } from "@/types/generics";
import { State } from "@/store";

export default defineComponent({
  name: "CardAssigneeInfo-component",
  props: {
    card: {
      type: Object as () => Card,
      required: true,
    },
  },
  setup(props) {
    const store = useStore<State>();

    const boardColumns = computed<Column[]>(() => {
      return store.state.board.boardsColumns;
    });

    const cardColumn = computed<Column | undefined>(() => {
      const { card } = props;
      return boardColumns.value.find((column) => column.id === card.column_id);
    });

    const dateCreated = computed(() => {
      return moment(props.card.dateAdded).format("LLL");
    });

    return {
      dateCreated,
      cardColumn,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.info {
  display: flex;
  flex-direction: column;
  margin: 4px;
  padding: 8px;
  color: $secondary;
  font-weight: 400;

  &_assignee {
    border: 1px solid $quaternary;
    border-radius: 4px;

    &_header {
      font-size: 14px;
      font-weight: 600;
      padding: 8px;
      border-bottom: 1px solid $quaternary;
    }

    &_info {
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      > div {
        display: grid;
        grid-template-columns: 40% 60%;
        align-content: center;
      }
    }
  }
}
</style>
