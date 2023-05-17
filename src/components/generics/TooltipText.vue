<template>
  <div class="tooltip">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TooltipText-component",
  props: {
    width: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.tooltip {
  position: absolute;
  width: max-content;
  background-color: rgba($secondary, 0.8);
  color: $white;
  border-radius: $corner-radius;
  padding: 4px 8px;
  z-index: 5;

  &.right {
    right: 0;
  }

  &.left {
    left: 0;
  }

  &.center {
    left: 50%;
    transform: translateX(-50%);
  }

  &.top {
    bottom: calc(100% + 4px);
  }

  &.bottom {
    top: calc(100% + 4px);
  }

  &.side {
    &#{-left} {
      top: 0;
      right: calc(100% + 4px);
    }

    &#{-right} {
      top: 0;
      left: calc(100% + 4px);
    }
  }
}
</style>
