<template>
  <a @click="handleClick" class="card" ref="cardRef">
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
    </div>
  </a>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  computed,
  ref,
  Ref,
  defineEmits,
  PropType,
} from "vue";
import { Card, Column, MoveCardPayload } from "@/types/generics";

export default defineComponent({
  name: "BoardCard-component",
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
    column: {
      type: Object as PropType<Column>,
      required: true,
    },
    lists: {
      type: Array as PropType<Element[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const cardRef: Ref<null | HTMLElement> = ref(null);
    const moved = ref(false);

    const handleClick = (e: any) => {
      e.preventDefault();
      console.log("Handle view card details");
    };

    const triggerMoveCard = (data: MoveCardPayload) => emit("move-card", data);

    // Card event listeners
    const addCardEventListeners = () => {
      if (!cardRef.value) return;
      cardRef.value.addEventListener("dragstart", (e) => {
        e.preventDefault();
      });

      cardRef.value.addEventListener("mousedown", (e) => {
        let HTMLElement = document.querySelector("html");

        if (!HTMLElement || !cardRef.value) return;
        let scrollHeight = HTMLElement.scrollTop;
        let cardWidth = cardRef.value.clientWidth;
        if (e.button != 0) return;

        let placeholderElement: HTMLDivElement = document.createElement("div");

        let shiftX = e.clientX - cardRef.value.getBoundingClientRect().left;
        let shiftY = e.clientY - cardRef.value.getBoundingClientRect().top;

        let moveAt = (x: number, y: number) => {
          placeholderElement.style.position = "fixed";
          placeholderElement.style.zIndex = "20";
          placeholderElement.style.width = `${cardWidth}px`;
          placeholderElement.style.left = `${x - shiftX}px`;
          placeholderElement.style.top = `${y - shiftY - scrollHeight}px`;
        };

        let onMouseMove = (e: MouseEvent) => {
          if (!moved.value && cardRef.value) {
            placeholderElement = document.createElement("div");
            placeholderElement.innerHTML = cardRef.value.outerHTML;
            if (placeholderElement.firstChild)
              (placeholderElement.firstChild as HTMLElement).classList.add(
                "moved-card"
              );
            placeholderElement.addEventListener("mousedown", () => {
              resetElementStyles();
            });
            if (cardRef.value.parentElement)
              cardRef.value.parentElement.append(placeholderElement);
            cardRef.value.style.opacity = "0";
            moved.value = true;
          }
          moveAt(e.pageX, e.pageY);
        };

        let resetElementStyles = () => {
          if (moved.value && placeholderElement && cardRef.value) {
            if (cardRef.value.parentElement) {
              cardRef.value.parentElement.removeChild(placeholderElement);
            }
            cardRef.value.style.opacity = "1";
            placeholderElement.onmouseup = null;
            placeholderElement.style.position = "";
            placeholderElement.style.zIndex = "";
            placeholderElement.style.width = "unset";
            placeholderElement.style.transform = "rotate(0deg)";
            placeholderElement.style.left = "";
            placeholderElement.style.top = "";
          }
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
          moved.value = false;
        };

        let onMouseUp = (e: MouseEvent) => {
          const collection: HTMLCollection =
            document.getElementsByClassName("column");

          for (let i = 0; i < collection.length; i++) {
            const item: Element = collection[i];
            const container: DOMRect = item.getBoundingClientRect();

            // Access the bounding rectangle values
            const { top, left, right, bottom } = container;
            if (
              e.pageX >= left &&
              e.pageX <= right &&
              e.pageY >= top &&
              e.pageY <= bottom
            ) {
              const data: MoveCardPayload = {
                card: props.card,
                from_column: props.column,
                to_column_id: parseInt((item.id as string).split("column-")[1]),
              };
              if (data.from_column.id === data.to_column_id) {
                resetElementStyles();
                return;
              }
              triggerMoveCard(data);
              resetElementStyles();
              return;
            }
          }
          resetElementStyles();
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    };

    onMounted(() => {
      addCardEventListeners();
    });

    return {
      cardRef,
      handleClick,
      columnLabel: computed(() => props.column.name),
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
