<template>
  <div class="overview">
    <OverviewHeader />
    <DashboardStats />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OverviewHeader from "@/components/merchant/overview/OverviewHeader.vue";
import DashboardStats from "@/components/merchant/overview/OverviewStats.vue";

export default defineComponent({
  name: "MerchantOverview",
  components: {
    OverviewHeader,
    DashboardStats,
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
