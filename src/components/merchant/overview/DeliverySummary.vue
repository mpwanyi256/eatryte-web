<template>
  <div class="delivery">
    <div class="delivery_header">
      <h3 class="delivery_header_title">
        Orders Summary
      </h3>
    </div>
    <NewOrders />
    <OrdersBreakdown />
    <OrderSummaryDognutChart />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NewOrders from "@/components/merchant/overview/NewOrders.vue";
import OrdersBreakdown from "@/components/merchant/overview/OrdersBreakdown.vue";
import OrderSummaryDognutChart from "@/components/merchant/graphs/OrderSummaryDognutChart.vue";

export default defineComponent({
    name: "DeliverySummary",
    components: {
      NewOrders,
      OrdersBreakdown,
      OrderSummaryDognutChart,
    },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.delivery {
    display: flex;
    flex-direction: column;
    width: 100%;
    @include card();
    padding: 0;
    overflow: hidden;

    &_header {
        display: flex;
        min-height: 3rem;
        align-items: center;

        &_title {
          padding-left: 0.5rem;
          font-size: 0.8rem;
          font-weight: 500;
        }
    }
}
</style>