<template>
  <div class="board-actions">
    <input type="text" class="search" placeholder="Search" />
    <Button>
      <i class="mdi mdi-plus mr-1"></i>
      Create Task
    </Button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/generics/Button.vue";

export default defineComponent({
  name: "BoardActions",
  components: {
    Button,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.board-actions {
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &_search,
  input {
    width: 100%;
    max-width: 300px;
    height: 40px;
    border: 1px solid $tertiary;
    border-radius: 4px;
    padding: 0 10px;
  }
}
</style>
