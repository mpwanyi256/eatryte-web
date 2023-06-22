<template>
  <div class="categories">
    <div class="categories_container">
      <v-btn
        size="small"
        icon="true"
        class="categories_container_btn left"
        @click="scrollToLeft"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        size="small"
        icon="true"
        class="categories_container_btn right"
        @click="scrollRight"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <CategoryList ref="CategoryListRef" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import CategoryList from "./CategoryList.vue";

export default defineComponent({
  name: "CompanyCategories",
  components: {
    CategoryList,
  },
  setup() {
    const CategoryListRef = ref(null);

    const scrollRight = () => {
      if (CategoryListRef.value)
        (CategoryListRef.value as any).scrollToPosition("right");
    };

    const scrollToLeft = () => {
      if (CategoryListRef.value)
        (CategoryListRef.value as any).scrollToPosition("left");
    };

    return {
      CategoryListRef,
      scrollRight,
      scrollToLeft,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.categories {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background: $bgGreen;
  height: 11.875rem;
  color: $white;
  width: 100%;

  &_container {
    position: relative;
    justify-content: center;
    align-items: center;
    @include page-flex();

    &_btn {
      position: absolute;
      background-size: 6px;
      width: 34px;
      border-radius: 50px;
      height: 34px;
      margin: 0 2px;
      background-color: #fff;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
      border: 1px solid #e4e7ea;
      z-index: 9;
    }

    .right {
      right: 0;
    }

    .left {
      left: 0;
    }
  }
}
</style>
