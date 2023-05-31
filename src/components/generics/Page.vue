<template>
  <div class="page">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Page-component",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.page {
  width: 100%;
  height: 100%;
  background-color: $gray-300;
  overflow: hidden;
  display: block;

  @media #{$tablet} {
    margin-top: 2.5rem;
  }

  @media #{$mobile} {
    margin-top: 2.5rem;
  }
}
</style>
