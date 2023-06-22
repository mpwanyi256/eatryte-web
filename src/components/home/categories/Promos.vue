<template>
  <div class="promos">
    <div class="promos_container">
      <v-btn
        size="small"
        icon="true"
        class="promos_container_btn left"
        @click="scrollToLeft"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        size="small"
        icon="true"
        class="promos_container_btn right"
        @click="scrollRight"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <ActivePromotions ref="ActivePromotions" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import ActivePromotions from "./ActivePromotions.vue";

export default defineComponent({
  name: "PromosSection",
  components: {
    ActivePromotions,
  },
  setup() {
    const ActivePromotions = ref(null);

    const scroll = (direction: string) => {
      if (ActivePromotions.value)
        (ActivePromotions.value as any).scrollToPosition(direction);
    };

    const scrollToLeft = () => {
      scroll("left");
    };
    const scrollRight = () => {
      scroll("right");
    };

    const screenWidth = computed(() => {
      return window.innerWidth;
    });

    return {
      ActivePromotions,
      screenWidth,
      scrollToLeft,
      scrollRight,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.promos {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background: $white;
  height: auto;
  min-height: 11.875rem;
  color: $black;
  width: 100%;

  &_container {
    height: 100%;
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
