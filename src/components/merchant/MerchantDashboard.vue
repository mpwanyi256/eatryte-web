<template>
  <div class="merchant_dashboard">
    <MerchantRegisteration v-if="!merchant" />
    <template v-else>
      <p>{{ merchant }}</p>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { useStore } from "vuex";
import { MerchantAccount } from "@/store/types";
import { State } from "@/store";
import MerchantRegisteration from "@/components/merchant/MerchantRegisteration.vue";

export default defineComponent({
  name: "MerchantDashboard",
  components: {
    MerchantRegisteration,
  },
  setup() {
    const store = useStore<State>();
    const merchant = computed(() => store.state.merchant.account);

    return {
      merchant,
    };
  },
});
</script>
