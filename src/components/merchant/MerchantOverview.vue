<template>
  <div class="overview">
    <OverviewHeader
      title="Dashboard"
      :sub-title="`Welcome ${businessName}`"
    >
      <template #actions>
        <PeriodPicker />
      </template>
    </OverviewHeader>
    <OverviewStats />
    <OrdersSummary />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { State } from "@/store";
import OverviewHeader from "@/components/generics/OverviewHeader.vue";
import OverviewStats from "@/components/merchant/overview/OverviewStats.vue";
import OrdersSummary from "@/components/merchant/overview/OrdersSummary.vue";
import PeriodPicker from "@/components/merchant/generics/PeriodPicker.vue";

export default defineComponent({
  name: "MerchantOverview",
  components: {
    OverviewHeader,
    OverviewStats,
    OrdersSummary,
    PeriodPicker,
  },
  setup() {
    const Store = useStore<State>();
    const merchant = computed(() => Store.state.merchant.account);
    const businessName = computed(() => {
      return merchant.value?.businessName;
    })
    const isVerified = computed(() => {
      return merchant.value?.isVerified;
    })

    return {
      merchant,
      businessName,
      isVerified,
    };
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
