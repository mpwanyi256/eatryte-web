<template>
  <router-link
    to=""
    class="new-orders"
  >
    <div class="new-orders_header">
      <div class="new-orders_header_card">
        25
      </div>
      <span class="new-orders_header_info">
        New Orders
      </span>
      <div class="new-orders_header_dot" />
    </div>
    <p class="new-orders_view">
      View >>>
    </p>
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewOrders",
})
</script>
<style scopped lang="scss">
@import "@/assets/styles/constants.scss";

$lightGreen: #ddf2de;
$darkGreen: #50C878;

.new-orders {
    @include card();
    min-height: 3rem;
    display: flex;
    align-items: center;
    position: relative;
    background-color: $lightGreen;
    margin: 0.5rem;

    &_header {
      position: absolute;
      left: 0;
      display: flex;
      align-items: center;

      &_card {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $darkGreen;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        color: $white;
        margin: 0 0.5rem;
        padding: 0 1rem;
        height: 2rem;
        width: 4rem;
      }

      &_info {
        font-size: 0.8rem;
        font-weight: 500;
        color: $black;
      }

      &_dot {
        background-color: $darkGreen;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        margin-left: 0.6rem;
      }
    }

    &_view {
        position: absolute;
        right: 0;
        font-size: 0.8rem;
        font-weight: 500;
        color: $darkGreen;
        margin-right: 0.5rem;
    }
}
</style>
