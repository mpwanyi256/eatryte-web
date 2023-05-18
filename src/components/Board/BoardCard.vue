<template>
  <a @click="handleClick" class="card">
    <div class="card__content">
      <div class="card__content_container">
        <p class="mr-2">#{{ card.id }}</p>
        <p class="t-regular card__content_container_title">
          {{ card.title }}
        </p>
      </div>
      <div class="card__body">
        <ul class="card__misc-list t-regular c-secondary">
          <li class="card__members">
            <v-avatar class="author" :size="24">
              <v-img
                :src="card.assignee.avatar"
                :alt="card.assignee.name"
              ></v-img>
            </v-avatar>
          </li>
          <li v-if="card.total_points" class="card__misc-item">
            <i class="mdi mdi-star-circle-outline"></i>
            <p>
              {{ card.total_points }}
            </p>
          </li>
          <li v-if="card.comment_count" class="card__misc-item">
            <i class="mdi mdi-comment-text-outline"></i>
            <p>
              {{ card.comment_count }}
            </p>
          </li>
        </ul>
      </div>
      <!-- <div class="card__footer">
        <ul class="card__misc-list t-regular c-secondary">
          <li class="card__members">
            <v-avatar class="author" :size="24">
              <v-img
                :src="card.assignee.avatar"
                :alt="card.assignee.name"
              ></v-img>
            </v-avatar>
          </li>
        </ul>
      </div> -->
    </div>
  </a>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoardCard-component",
  props: {
    card: {
      type: Object,
      required: true,
    },
    columnLabel: {
      type: String,
      required: true,
    },
  },
  setup() {
    const handleClick = () => {
      console.log("clicked");
    };

    return {
      handleClick,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.card {
  display: grid;
  position: relative;
  padding: 12px 16px;
  background: white;
  border-radius: 4px;
  margin: 8px;
  cursor: pointer;
  color: unset;
  box-shadow: 0px 1px 4px rgba(11, 13, 14, 0.1),
    0px 0px 1px rgba(11, 13, 14, 0.1);
  text-decoration: none;
  transition-duration: 0.2s;
  user-select: none;

  &:hover {
    box-shadow: 0 0 0 1px $accent; // 0 0 0 5px rgba($accent, 0.25) !important;
    background-color: $light-blue;

    /deep/ .more {
      opacity: 1 !important;
    }
  }

  &__content {
    overflow: hidden;

    &_container {
      position: unset;
      width: 100%;
      display: flex;
      align-items: center;
      flex: 1;
      overflow: hidden;

      &_title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left !important;

        & > * + * {
          margin-left: 8px;
        }
      }
    }
  }

  &__body {
    margin-top: 12px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  &__misc-list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: inherit;
    flex-direction: row;

    &.left {
      flex-shrink: 1;
      overflow: hidden;
      flex-wrap: nowrap;
    }

    & > * + * {
      margin-left: 8px;
    }
  }

  &__misc-item {
    display: flex;
    align-items: inherit;
    overflow: hidden;
  }

  &__members {
    flex-shrink: 0;
    display: flex;

    & > * + * {
      margin-left: 2px;
    }

    .author {
      border: 1px solid $violet;
      border-radius: 50%;
    }
  }
}
</style>
