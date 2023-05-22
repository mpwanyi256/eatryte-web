<template>
  <Modal title="Create Task" @close="$emit('close')">
    <div class="create-task">
      <v-form fast-fail @submit.prevent="createTicket">
        <div class="frm-control">
          <label for="title">Title</label>
          <TextField v-model.trim="title" placeholder="Title" />
        </div>
        <div class="frm-control">
          <label for="points">Story points</label>
          <TextField
            v-model.trim="points"
            type="number"
            min="0"
            placeholder="Stpry points"
          />
        </div>
        <div class="frm-control">
          <label for="description">Description</label>
          <v-textarea
            v-model.trim="description"
            label="Description"
          ></v-textarea>
        </div>
        <v-btn :disabled="!isValidForm" type="submit" block class="mt-2"
          >Create Task
        </v-btn>
      </v-form>
    </div>
  </Modal>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { State } from "@/store";
import { useStore } from "vuex";
import Modal from "@/components/generics/Modal.vue";
import TextField from "@/components/generics/TextField.vue";
import moment from "moment";

export default defineComponent({
  name: "CreateTaskModal-component",
  components: {
    Modal,
    TextField,
  },
  setup(props, { emit }) {
    const store = useStore<State>();

    const title = ref("");
    const description = ref("");
    const points = ref(0);

    const isValidForm = computed(() => {
      return !!(title.value && description.value);
    });

    const createTicket = async () => {
      const payload = {
        title: title.value,
        description: description.value,
        total_points: points.value,
        column_id: 1,
        dateAdded: moment(new Date().toISOString()),
        assignee: {
          id: 1,
          name: "Samuel Mpwanyi",
          avatar: "https://i.pravatar.cc/300",
        },
        tags: [],
        comments: [],
      };

      await store.dispatch("board/createCard", payload);
      emit("close");
    };

    return {
      title,
      description,
      points,
      isValidForm,
      createTicket,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.create-task {
  padding: 20px;
}
.create-task form {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px;

  .frm-control {
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: $black;
    font-weight: 300;
  }

  ::v-deep .v-form {
    width: 100%;
  }

  ::v-deep .v-textarea .v-field__field {
    background-color: white;
    border: 1px solid $tertiary;
    border-radius: 4px;
  }
}
</style>
