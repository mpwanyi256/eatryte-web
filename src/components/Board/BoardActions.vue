<template>
  <div class="board-actions">
    <input
      type="text"
      class="search"
      @input="$emit('input', $event)"
      placeholder="Search card by title"
    />
    <Button @click="toggleModal(true)">
      <i class="mdi mdi-plus mr-1"></i>
      Create Task
    </Button>
  </div>
  <CreateTaskModal v-if="dialog" @close="toggleModal(false)" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/generics/Button.vue";
import CreateTaskModal from "@/components/Board/CreateTaskModal.vue";

export default defineComponent({
  name: "BoardActions",
  components: {
    Button,
    CreateTaskModal,
  },
  setup() {
    const dialog = ref(false);

    const toggleModal = (status: boolean) => {
      dialog.value = status;
    };

    return {
      dialog,
      toggleModal,
    };
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
