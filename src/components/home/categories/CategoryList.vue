<template>
  <div class="wrapper" id="wrapper_stack_list" ref="wrapperStackList">
    <div
      class="wrapper_stack_list"
      v-for="category in categories"
      :key="category.id"
    >
      <div class="wrapper_stack_list_item">
        <div class="wrapper_stack_list_item_img">
          <img :src="category.image_url" alt="img" />
        </div>
        <div class="wrapper_stack_list_item_text">
          <h3>{{ category.name }}</h3>
          <p>{{ category.items_count }} items</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CategoryList",

  setup() {
    const categories = ref([
      {
        id: 1,
        name: "Diaries",
        image_url: "https://pos.prodevkampala.com/img/1.png",
        items_count: 10,
      },
      {
        id: 2,
        name: "Vegetables",
        image_url: "https://pos.prodevkampala.com/img/2.png",
        items_count: 345,
      },
      {
        id: 3,
        name: "Fruits & Vegetables",
        image_url: "https://pos.prodevkampala.com/img/3.png",
        items_count: 345,
      },
      {
        id: 4,
        name: "Bakery & Diary",
        image_url: "https://pos.prodevkampala.com/img/4.png",
        items_count: 605,
      },
      {
        id: 5,
        name: "Beverages",
        image_url: "https://pos.prodevkampala.com/img/5.png",
        items_count: 605,
      },
      {
        id: 6,
        name: "Breakfast & Snacks",
        image_url: "https://pos.prodevkampala.com/img/6.png",
        items_count: 100,
      },
      {
        id: 7,
        name: "Oils & Masaalas",
        image_url: "https://pos.prodevkampala.com/img/7.png",
        items_count: 80,
      },
      {
        id: 5,
        name: "Beverages",
        image_url: "https://pos.prodevkampala.com/img/5.png",
        items_count: 605,
      },
      {
        id: 6,
        name: "Breakfast & Snacks",
        image_url: "https://pos.prodevkampala.com/img/6.png",
        items_count: 100,
      },
      {
        id: 7,
        name: "Oils & Masaalas",
        image_url: "https://pos.prodevkampala.com/img/7.png",
        items_count: 80,
      },
    ]);
    const wrapperStackList = ref<any | null>(null);

    const scrollToPosition = (direction: string) => {
      try {
        const container: any = document.getElementById("wrapper_stack_list"),
          containerDivElWidth = 160 * 1,
          leftVal =
            direction === "right"
              ? container.scrollLeft + containerDivElWidth
              : container.scrollLeft - containerDivElWidth;

        container.scrollTo({
          top: 0,
          left: leftVal,
          behavior: "smooth",
        });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      categories,
      wrapperStackList,
      scrollToPosition,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.wrapper {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  @include scrollbar-hidden();
  scroll-behavior: smooth;
  gap: 0.5rem;
  color: $black;
  margin: 0;
  padding: 0 1.8rem;

  &_stack_list {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    opacity: 1;
    width: 100%;

    &_item {
      width: 9.5rem;
      min-width: 9.5rem;
      margin: 1rem 0;
      min-height: 9.875;
      max-height: 9.875;
      display: block;
      padding-bottom: 1rem !important;
      background-color: $white;
      border-radius: 0.575rem !important;
      border: 4px solid transparent;
      background-clip: padding-box;
      overflow: hidden;
      text-align: center;

      @media #{$tablet} {
        min-width: 6.813rem;
      }

      @media #{$mobile} {
        min-width: 6.813rem;
      }

      &_img {
        width: 88px;
        height: auto;
        text-align: center !important;
        display: inline-block;

        img {
          height: auto;
          width: 100%;
        }
      }

      &_text {
        padding-top: 0 !important;
        display: block;
        h3 {
          font-size: 0.875rem;
          margin-bottom: 0.25rem !important;
          color: $black;
          font-weight: 500;
          line-height: 1.2;
        }

        p {
          --bs-success-rgb: 25, 135, 84;
          --bs-text-opacity: 1;
          font-size: 0.688rem !important;
          color: rgba(25, 135, 84, 1) !important;
        }
      }
    }
  }
}
</style>
