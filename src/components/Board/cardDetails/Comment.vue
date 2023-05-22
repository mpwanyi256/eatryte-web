<template>
  <div class="comment">
    <v-avatar class="author" :size="40">
      <v-img :src="comment.author.avatar" :alt="comment.author.name"></v-img>
    </v-avatar>
    <div class="comment_body">
      <p>
        {{ comment.author.name }}
        <span class="ml-1">{{ commentDate }}</span>
      </p>
      <div class="comment_body_content">
        <p class="t-regular">{{ comment.content }}</p>
      </div>
      <div class="comment_body_actions">
        <p>Edit</p>
        <p @click="deleteComment">Delete</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Comment } from "@/types/generics";
import moment from "moment";

export default defineComponent({
  name: "Comment-component",
  props: {
    comment: {
      type: Object as PropType<Comment>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const commentDate = moment(props.comment.dateAdded).fromNow();

    const deleteComment = () => {
      emit("delete", props.comment.id);
    };

    return {
      commentDate,
      deleteComment,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.comment {
  display: flex;
  flex-direction: row;
  gap: 6px;

  &_body {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: $black;

    p {
      overflow-wrap: break-word;
      line-height: 1.5;
      top: 0;
      margin: 0;
    }

    &_actions {
      display: flex;
      flex-direction: row;
      gap: 8px;
      color: $tertiary;
      p {
        cursor: pointer;
      }
    }
  }
}
</style>
