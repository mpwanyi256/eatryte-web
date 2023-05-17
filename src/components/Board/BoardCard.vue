<template>
  <a @click="handleClick" class="card">
    <div class="card__content">
      <div class="card__content_container">
        <!-- TODO: Remove comment out if card public/private is implemented (no backend) -->
        <!-- <i v-if="!isPrivate" class="mdi mdi-lock-outline c-secondary"></i> -->
        <p class="t-regular card__content_container_title">
          {{ card.title }}
        </p>
        <!-- <Tooltip class="bottom left">
          <p class="-sm">
            {{ card.title }}
          </p>
        </Tooltip> -->
        <!-- <ul class="card__tags">
          <li v-for="tag in initialTags" :key="tag.pk">
            <IssueTag
              size="small"
              :label="tag.name"
              :bg-color="tag.background_hex_color"
              :fg-color="tag.text_hex_color"
            />
          </li>

          <li v-if="remainingTagCount">
            <IssueTag
              size="small"
              :label="`+${remainingTagCount} tag${
                remainingTagCount === 1 ? '' : 's'
              }`"
              bg-color="#F0F2F3"
              fg-color="#444F54"
            />
          </li>
        </ul> -->
      </div>
      <!-- <div v-if="hasBody" class="card__body">
        <ul class="card__misc-list t-regular c-secondary">
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
          <li v-if="card.attachment_count" class="card__misc-item">
            <i class="mdi mdi-attachment"></i>
            <p>
              {{ card.attachment_count }}
            </p>
          </li>
        </ul>
      </div> -->
      <div class="card__footer">
        <ul class="card__misc-list t-regular c-secondary">
          <li class="card__members">
            <!-- <Avatar
              v-for="assignee in truncatedAssignees"
              :class="{ author: checkIsCreator(assignee) }"
              :key="assignee.pk"
              :src="assignee.avatar_url"
              custom-size="24"
            /> -->
            <!-- <div v-if="card.task_assignees_count > 2" class="more">
              <p>+{{ card.task_assignees_count - 2 }}</p>
            </div>
          </li>
           <div v-if="columnLabel === 'Done'">
            <li
              class="card__misc-item due"
              :class="isLate ? 'orange' : 'secondary'"
            >
              <p v-if="isLate">Late</p>
              <p v-else>Done: {{ formatDoneDate(card.moved_at) }}</p>
            </li>
          </div>
          <li v-if="card.date_due === null"></li>
          <li v-else class="card__misc-item due" :class="dueColorCode">
            <i class="mdi mdi-calendar-blank-outline"></i>
            <p class="semibold">
              {{ dueDate }}
            </p> -->
          </li>
        </ul>
        <!-- <ul class="card__misc-list t-regular c-secondary">
          <li>
            <i :class="`icon mdi mdi-${privacyIcon}`"></i>
          </li>
          <li v-if="card.subtasks_count" class="card__misc-item">
            <i
              :class="
                card.finished_subtasks_count == card.subtask_count
                  ? 'mdi mdi-checkbox-multiple-marked-outline'
                  : 'mdi mdi-checkbox-marked-outline'
              "
            >
            </i>
            <p>6</p>
          </li>
        </ul> -->
      </div>
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

      &__title {
        display: flex;
        align-items: center;
        flex: 1;
        overflow: hidden;
        text-align: left;

        .title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left !important;
        }

        & > * + * {
          margin-left: 8px;
        }
      }
    }
  }

  &__tags {
    @include clear-list-formatting();
    display: flex;
    flex-wrap: wrap;
    padding-top: 4px;

    li {
      padding-right: 2px;
    }
  }

  &__body {
    margin-top: 12px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;

    & > * + * {
      margin-left: 8px !important;
    }
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

    &.milestone p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > * + * {
      margin-left: 4px;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;

    & > * + * {
      margin-left: 8px;
    }
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

    .more {
      height: 24px;
      min-width: 24px;
      background: $quaternary;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 24px;
      padding: 0 4px;

      p {
        color: $tertiary;
        font-weight: 500;
        font-size: 12px;
      }
    }
  }

  &__priority {
    display: flex;
    padding: 2px 6px;
    max-height: 22px;
    border-radius: 20px;
    color: $white;
    margin-left: auto;

    p {
      line-height: 125%;
    }

    &.low {
      background-color: $indigo;
    }

    &.medium {
      background-color: $orange;
    }

    &.high {
      background-color: $red;
    }
  }
}

i {
  font-size: 17px;
  color: $tertiary;
}

.due {
  padding: 0 4px 0 2px;
  border-radius: 3px;
  border: 1px solid $accent;
  color: $accent;

  i {
    color: $accent;
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }

  &.secondary {
    border: none;
    background: $success;
    color: $white;

    i {
      color: $white;
    }
  }

  &.yellow {
    border: none;
    background: $warning;
    color: $primary;

    i {
      color: $primary;
    }
  }

  &.red {
    border: none;
    background: $error;
    color: $white;

    i {
      color: $white;
    }
  }

  &.orange {
    border: 1px solid $orange;
    color: $orange;
  }
}

.tooltip-container {
  position: unset;
  width: 100%;
}

.tooltip-container .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tooltip.bottom {
  top: 30%;
  left: 15px;
}

::v-deep .tooltip {
  width: 300px;
}
</style>
