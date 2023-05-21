<template>
  <div class="comments">
    <div class="comments_add">
      <v-avatar class="author" :size="40">
        <v-img :src="loggedInUser.avatar" :alt="loggedInUser.name"></v-img>
      </v-avatar>
      <input
        v-model.trim="comment"
        placeholder="Write a comment..."
        outlined
        rows="1"
        auto-grow
        class="comments_add_textinput"
      />
      <Button
        class="comments_add_btn"
        :disabled="!comment.length"
        rounded="0"
        size="small"
        color="primary"
        @click="addComment"
      >
        Add
      </Button>
    </div>
    <div class="comments_list">
      <CommentComponent
        v-for="comment in loadedComments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, PropType, onMounted } from "vue";
import { State } from "@/store";
import moment from "moment";
import { useStore } from "vuex";
import { Card, Comment } from "@/types/generics";
import Button from "@/components/generics/Button.vue";
import CommentComponent from "./Comment.vue";

export default defineComponent({
  name: "Comments-component",
  components: {
    Button,
    CommentComponent,
  },
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore<State>();
    const comments = ref<Comment[]>([]);
    const loadedComments = computed(() => {
      return comments.value;
    });
    const comment = ref("");
    const loggedInUser = ref({
      id: 1,
      name: "John Doe",
      avatar: "https://i.pravatar.cc/300",
    });

    const fetchComments = async () => {
      try {
        const res = await store.dispatch(
          "board/fetchCardComments",
          props.card.id
        );
        comments.value = res;
      } catch (e) {
        console.log(e);
      }
    };

    const addComment = async () => {
      try {
        const newComment = {
          card_id: props.card.id,
          content: comment.value,
          author: loggedInUser.value,
          dateAdded: moment(new Date().toISOString()),
        };
        const res = await store.dispatch("board/addComment", newComment);
        comments.value = [res, ...comments.value];
        comment.value = "";
      } catch (e) {
        console.error(e);
      }
    };

    onMounted(() => {
      fetchComments();
    });

    return {
      comment,
      loggedInUser,
      loadedComments,
      addComment,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.comments {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;

  &_add {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;

    input {
      width: 100%;
      height: 40px;
      border: 1px solid $tertiary;
      border-radius: 4px;
      padding: 0 10px;
    }
  }

  &_list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
