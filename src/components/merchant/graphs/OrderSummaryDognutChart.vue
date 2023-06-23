<template>
  <div class="orders-summary">
    <p>Dognurt Chart</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "OrderSummaryDognutChart",
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.orders-summary {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 0.5rem;
    min-height: 16rem;
}
</style>