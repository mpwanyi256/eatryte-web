<template>
  <div class="page">
    <div class="page_header">
      <div class="page_header_title">{{ title }}</div>
      <div class="page_header_options" v-if="$slots.options">
        <slot name="options"></slot>
      </div>
    </div>
    <div class="page-content">
      <slot name="content"></slot>
    </div>
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
    // const props = defineProps<Props>();

    return {};
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.page {
  height: calc(100vh - 52px);
  width: 100vw;
  background-color: $page-bg-color;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &_header {
    height: 52px;
    background-color: $white;
    padding-left: 15px;
    border-bottom: 1px solid $light-grey;
    display: grid;
    grid-template-columns: 60% 40%;
    text-align: left;
    align-items: center;
    color: $black;

    &_title {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }

    &_options {
      display: inline-flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
      padding-right: 16px;

      > div {
        justify-content: flex-end;
        padding-right: 16px;
        overflow: hidden;
      }
    }
  }

  .page-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
}
</style>
