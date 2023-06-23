<template>
  <div class="revenue">
    <p>Revenue Graph</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RevenueGraph",
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.revenue {
    display: flex;
    flex-direction: column;
    width: 100%;
    @include card();
    padding: 0;
    overflow: hidden;
    min-height: 16rem;
}
</style>
