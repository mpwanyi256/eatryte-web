<template>
  <div class="merchant_dashboard">
    <template v-if="loading || !userAccount">
      <LoadingSpinner />
    </template>
    <template v-else>
      <MerchantRegisteration v-if="!merchant && !loading" />
      <MerchantOverview v-else />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { State } from "@/store";
import MerchantRegisteration from "@/components/merchant/MerchantRegisteration.vue";
import MerchantOverview from "@/components/merchant/MerchantOverview.vue";

export default defineComponent({
  name: "MerchantDashboard",
  components: {
    MerchantRegisteration,
    MerchantOverview,
  },
  setup() {
    const store = useStore<State>();
    const userAccount = computed(() => store.state.auth.user);
    const merchant = computed(() => store.state.merchant.account);
    const loading = computed(() => store.state.merchant.loading);

    return {
      merchant,
      loading,
      userAccount,
    };
  },
});
</script>
