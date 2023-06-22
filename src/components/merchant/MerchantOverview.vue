<template>
  <div class="overview">
    <OverviewHeader />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OverviewHeader from "@/components/merchant/overview/OverviewHeader.vue";

export default defineComponent({
  name: "MerchantOverview",
  components: {
    OverviewHeader,
  },
});
</script>
