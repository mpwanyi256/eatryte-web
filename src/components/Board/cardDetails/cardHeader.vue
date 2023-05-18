<template>
  <div class="details justify-left align-left">
    <h2>{{ card.title }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Card } from "@/types/generics";

export default defineComponent({
  name: "Header-component",
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

details {
  width: 100%;
  min-height: 52px;
  background-color: $secondary;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 18px;
  text-align: left;

  h2 {
    font-size: 14px;
    color: $secondary;
  }
}
</style>
