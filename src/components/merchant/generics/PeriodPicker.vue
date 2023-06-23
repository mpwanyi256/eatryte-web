<template>
  <div class="period-picker">
    <v-icon
      size="28"
      class="period-picker_icon"
    >
      mdi-calendar
    </v-icon>
    <div class="period-picker_content">
      <p>Filter period</p>
      <span>4 Jun 2023 - 20 Jun 2023</span>
    </div>
    <v-icon
      size="28"
      class="period-picker_dropdown_icon"
    >
      mdi-chevron-down
    </v-icon>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "PeriodPicker",
    setup() {
        return {};
    },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.period-picker {
    height: 100%;
    width: 100%;
    background-color: $gray-100;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border: 1px solid $gray-200;

    &_icon {
      color: $menuRed;
    }

    &_dropdown_icon {
      color: $gray-700;
    }

    &_content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        p {
          margin: 0;
          font-size: 0.75rem;
          font-weight: 500;
          color: $gray-800;
        }

        span {
          font-size: 0.7rem;
          font-weight: 500;
          color: $gray-600;
        }
    }
}
</style>