<template>
  <section class="page">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Page-component",
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.page {
  width: 100%;
  height: auto;
  background-color: $pageBgColor;
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
