<template>
  <div class="card">
    <div class="card_title">
      <h3>#{{ card.id }}</h3>
    </div>
    <div class="card_actions">
      <!-- <v-btn>share</v-btn> -->
      <v-icon class="" @click="copyToClipboard">mdi-share-variant</v-icon>
      <v-icon class="" @click="handleClose">mdi-close</v-icon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import router from "@/router";
import { Card } from "@/types/generics";

export default defineComponent({
  name: "Header-component",
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handleClose = async (e: Event) => {
      e.preventDefault();
      emit("close");
    };

    const copyToClipboard = () => {
      const currentPath = router.currentRoute.value;
      const url = `${window.location.origin}${currentPath.fullPath}`;
      navigator.clipboard.writeText(url);
      alert("Copied to clipboard");
      console.log("Current path", url);
    };

    return {
      handleClose,
      copyToClipboard,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.card {
  width: 100%;
  min-height: 52px;
  position: relative;
  background-color: $white;
  border-bottom: 1px solid $quaternary;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  color: $tertiary;
  font-weight: 700;

  &_title {
    position: absolute;
    left: 0;
    padding: 8px;
    width: 100%;
    h3 {
      margin-right: 20px;
      font-size: 18px;
      line-height: 28px;
      margin: 0;
      padding: 0;
    }
  }

  &_actions {
    position: absolute;
    right: 0;
    margin: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    i {
      cursor: pointer;
    }
  }
}
</style>
