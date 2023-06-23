<template>
  <div class="orders-summary">
    <DeliverySummary />
    <RevenueGraph />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DeliverySummary from "@/components/merchant/overview/DeliverySummary.vue";
import RevenueGraph from "@/components/merchant/graphs/RevenueGraph.vue";

export default defineComponent({
    name: "OrdersSummary",
    components: {
        DeliverySummary,
        RevenueGraph,
    },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.orders-summary {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 1rem;

    @media #{$tablet} {
        grid-template-columns: 100%;
    }
}
</style>