<template>
  <input
    :type="type"
    v-bind="$attrs"
    v-model="input"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TextField-component",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },
  setup() {
    const input = ref("");

    return {
      input,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

input {
  width: 100%;
  height: 40px;
  border: 1px solid $tertiary;
  border-radius: 4px;
  padding: 0 10px;
}
</style>
