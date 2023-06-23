<template>
  <div class="overview">
    <OverviewHeader />
    <OverviewStats />
    <OrdersSummary />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OverviewHeader from "@/components/merchant/overview/OverviewHeader.vue";
import OverviewStats from "@/components/merchant/overview/OverviewStats.vue";
import OrdersSummary from "@/components/merchant/overview/OrdersSummary.vue";

export default defineComponent({
  name: "MerchantOverview",
  components: {
    OverviewHeader,
    OverviewStats,
    OrdersSummary,
  },
});
</script>
<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
