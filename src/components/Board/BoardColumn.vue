<template>
  <div class="column">
    <div class="column-container">
      <div class="column-header">
        <h3 class="t-regular c-secondary column-label">Column name</h3>
        <div class="tooltip-container">
          <Button
            class="iconic tertiary"
            icon="plus"
            @click="$emit('open-create')"
          />
        </div>
      </div>
      <div class="column-body">
        <slot />

        <div class="column-empty-state">
          <div>
            <i class="mdi mdi-selection-search"></i>
            <p class="t-regular bold">No results found in this column.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/generics/Button.vue";

export default defineComponent({
  name: "BoardColumn-component",
  components: {
    Button,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.column {
  @include scrollbar-thin();
  overflow-y: auto;
  border-radius: 4px;
  background: #f8f8f8;
  position: relative;
  border: 1px solid $quaternary;

  &-container {
    min-height: 100%;
  }

  &-header {
    position: sticky;
    top: 0;
    z-index: 4;
    background: #fcfcfc;
    box-shadow: 0 1px 0 0 $quaternary;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 12px 0 16px;
    border-radius: 4px 4px 0 0;
    transition-duration: 0.2s;

    h3 {
      flex: 1;
      text-align: left;
    }

    button {
      border-radius: $corner-radius;
      height: 36px;
      width: 36px;
    }

    .view-dropdown {
      display: inline-block;
      position: relative;

      .dropdown-menu {
        width: 240px;
        right: 0;
        left: unset;
      }
    }

    &-label {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &-body {
    .card {
      margin: 8px;
    }

    &-empty-state {
      @include flex-align-justify-center;
      height: 100%;

      > div {
        @include flex-align-center;
        margin: 40px 0px auto;
        color: $tertiary;

        i {
          font-size: 38px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
