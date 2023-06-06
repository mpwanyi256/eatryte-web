<template>
  <div class="wrapper" id="active_promos_stack_list">
    <div
      class="wrapper_stack_list"
      v-for="category in categories"
      :key="category.id"
    >
      <div class="wrapper_stack_list_item">
        <div class="wrapper_stack_list_item_text">
          <h3>{{ category.name }}</h3>
          <p>valid until {{ category.items_count }}</p>
        </div>
        <div class="wrapper_stack_list_item_img">
          <img :src="category.image_url" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ActivePromotions",

  setup() {
    const categories = ref([
      {
        id: 1,
        name: "Upto 12% Off all vegetable items",
        image_url: "https://pos.prodevkampala.com/img/1.png",
        items_count: 10,
      },
      {
        id: 2,
        name: "Buy one get one free",
        image_url: "https://pos.prodevkampala.com/img/2.png",
        items_count: 345,
      },
      {
        id: 3,
        name: "Pamper yourself and getup to 40% off",
        image_url: "https://pos.prodevkampala.com/img/3.png",
        items_count: 345,
      },
      {
        id: 4,
        name: "Up to 40% off",
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
        const container: any = document.getElementById(
            "active_promos_stack_list"
          ),
          containerDivElWidth = 245 * 1,
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
    cursor: pointer;
    opacity: 1;
    width: 100%;
    margin: 1rem 0;

    &_item {
      --bs-white-rgb: 255, 255, 255;
      --bs-body-color-rgb: 33, 37, 41;
      width: 17.12rem;
      height: 100%;
      display: flex;
      flex-direction: row;
      padding-bottom: 1rem !important;
      background: linear-gradient(
        270deg,
        $light-blue,
        rgba(var(--bs-white-rgb), 0)
      );
      border: 0.1px solid rgba(var(--bs-body-color-rgb), 0.075);
      background-clip: padding-box;
      overflow: hidden;
      text-align: center;
      border-radius: 0.375rem;
      box-shadow: 0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb), 0.075) !important;

      @media #{$tablet} {
        width: 14.9rem;
      }

      @media #{$laptop-large} {
        min-width: 17.12rem;
      }

      > div {
        width: 100%;
      }

      &_img {
        width: 88px;
        height: auto;
        text-align: right !important;
        display: inline-block;

        img {
          height: auto;
          width: 100%;
          float: right;
        }
      }

      &_text {
        padding-top: 0 !important;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
        padding: 0.5rem;
        h3 {
          font-size: 1rem;
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
