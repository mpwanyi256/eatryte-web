<template>
  <div class="overview_header">
    <div class="overview_header_title">
      <h3>Dashboard</h3>
      <p>Welcome {{ businessName }}</p>
    </div>
    <div class="overview_header_actions">
      <PeriodPicker />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { State } from "@/store";

import PeriodPicker from "@/components/merchant/generics/PeriodPicker.vue";

export default defineComponent({
    name: "OverviewHeader",
    components: {
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
@import "@/assets/styles/constants.scss";

.overview_header {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    min-height: 3rem;

    > div {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    &_title {
        left: 0;
        h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0;
            line-height: 1.5;
            color: $gray-800;
        }
        p {
            font-size: 0.8rem;
            font-weight: 400;
            margin: 0;
            line-height: 1.5;
            color: $gray-600;
        }
    }

    &_actions {
        right: 0;
    }
}
</style>