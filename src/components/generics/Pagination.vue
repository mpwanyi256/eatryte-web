<template>
  <div
    v-if="count > 0"
    class="pagination"
  >
    <v-pagination
      v-bind="$attrs"
      class="my-4"
      density="compact"
      :length="count"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.pagination {
    position: relative;
    min-height: 3rem;
    width: 100%;

    :deep(.v-pagination) {
        float: right;
        width: 30%;
    }
}
</style>
