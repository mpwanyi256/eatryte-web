<template>
  <div class="overview_header">
    <div class="overview_header_title">
      <h3>{{ title }}</h3>
      <p>{{ subTitle }}</p>
    </div>
    <div
      v-if="$slots.actions"
      class="overview_header_actions"
    >
      <slot name="actions" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "OverviewHeader",
    props: {
      title: {
        type: String,
        default: "Dashboard",
      },
      subTitle: {
        type: String,
        default: "Welcome",
      },
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

    @media #{$tablet} {
      flex-direction: column;
      position: unset;
      gap: 1rem;
      align-items: flex-start;
    }

    > div {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 0;
      @media #{$tablet} {
        position: unset;
      }
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