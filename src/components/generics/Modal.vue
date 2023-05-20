<template>
  <v-dialog
    v-model="dialog"
    :width="size ? size : 500"
    persistent
    :fullscreen="fullscreen"
  >
    <v-card class="modal_content">
      <template v-slot:title>
        <div class="d-flex align-center">
          <v-icon small @click="$emit('close')">mdi-close</v-icon>
          <p class="ml-2 t-subtitle">{{ title }}</p>
        </div>
      </template>
      <slot></slot>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Modal-component",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    size: {
      type: Number,
      required: false,
      default: 500,
    },
    fullscreen: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    const dialog = ref(true);
    return {
      dialog,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.modal_content {
  overflow: auto;
  @include scrollbar-thin();
}
</style>
