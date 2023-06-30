<template>
  <div class="orders-brekdown">
    <div
      v-for="item in items"
      :key="item.label"
      class="orders-brekdown_card"
    >
      <h3 class="orders-brekdown_card_count">
        {{ item.count }}
      </h3>
      <p class="orders-brekdown_card_label">
        {{ item.label }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "OrdersBreakdown",
    setup() {
        const items = ref([
            {
              label: "On Delivery",
              count: 3
            },
            {
              label: "Delivered",
              count: 8
            },
            {
              label: "Cancelled",
              count: 0
            },
        ])

        return {
            items,
        };
    },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.orders-brekdown {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    gap: 1rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 0.5rem;

    &_card {
      @include card();
      width: 100%;

        &_count {
          font-size: 1.5rem;
          font-weight: 500;
          color: $black;
        }

        &_label {
          font-size: 0.8rem;
          font-weight: 400;
          color: $gray-500;
        }
    }

    @media #{$tablet} {
      grid-template-columns: 100%;
    }
}
</style>
