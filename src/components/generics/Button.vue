<template>
  <button
    v-bind="$attrs"
    :disabled="disabled"
    :class="{ 'text-center': !icon }"
  >
    <i
      v-if="icon"
      :class="'icon mdi mdi-' + icon"
    />
    <slot />
    <i
      v-if="iconRight"
      :class="'icon right mdi mdi-' + iconRight"
    />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    icon: {
      type: String,
      required: false,
    },

    iconRight: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

button {
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 $sp-20;
  border: 1px solid $quaternary;
  background: $white;
  outline: none;
  transition-duration: 0.2s;
  border-radius: $corner-radius;
  color: $primary;
  cursor: pointer;
  user-select: none;

  .icon {
    font-size: 18px;
    padding-bottom: 2px;
    padding-right: 10px;
    display: inline-block;
    transform: translateY(1px);

    &.right {
      padding-left: 8px;
      padding-right: 0;
    }
  }

  p,
  span {
    display: inline-block;
  }

  .badge {
    margin-left: 8px;
  }

  &.rounded {
    border-radius: 56px;
  }

  &.square {
    border-radius: 4px !important;
  }

  &.compact {
    padding: 0 12px;
  }

  &.bold {
    font-weight: 600;
  }

  &.dash {
    border-style: dashed;
  }

  &.thick {
    border-width: 2px;
  }

  &:hover {
    background: lighten($quaternary, 5%);
  }

  @media #{$tablet} {
    height: 36px;
    padding: 0 14px;
  }

  @media #{$mobile-small} {
    height: 34px;
    padding: 0 8px;
  }

  &[disabled] {
    background: #fafafa;
    color: #6d7679;
    border-color: #e4e7e8;
    cursor: not-allowed;
  }

  &.c-error {
    color: $error;

    &:hover {
      background: #fdeaee;
      border-color: $error;
    }

    &[disabled] {
      color: #f9abbb;
    }
  }

  &.c-success {
    color: $success;

    &:hover {
      background: #e6f8f0;
      border-color: $success;
    }

    &[disabled] {
      color: #9de2c5;
    }
  }

  &.c-accent {
    color: $accent;

    &:hover {
      background: #eaf6fc;
      border-color: $accent;
    }

    &[disabled] {
      color: #98d1ee;
    }
  }

  &.c-disabled {
    color: $error;

    &[disabled] {
      color: #f9abbb;
    }
  }

  // Sizes

  &.small {
    height: 32px;
    padding: 0 14px;

    @media #{$tablet} {
      height: 30px;

      .icon {
        font-size: 13px;
      }
    }
  }

  &.regular {
    // this is the default, no need to define
  }

  &.large {
    height: 48px;

    &.compact {
      padding: 0 16px;
    }

    @media #{$tablet} {
      height: 42px;
      font-size: 14px;
      padding: 0 $sp-16;

      .icon {
        font-size: 17px;
      }
    }
  }

  &.x-large {
    height: 64px;
  }

  &.block {
    display: block;
    width: 100%;
  }

  // Colors

  &.primary {
    background: $accent;
    color: $white;
    border: 0;

    &:hover {
      background: darken($accent, 10%);
    }

    &[disabled] {
      background: #98d1ee;
    }
  }

  &.secondary {
    // this is the default appearance, no need to define in the class
  }

  &.tertiary {
    background: none;
    border: 0;

    &:hover {
      background: lighten($quaternary, 5%);
    }

    &[disabled] {
      background: #fafafa;
      color: #b4b9bb;
    }
  }

  &.success {
    background: $success;
    color: $white;
    border: 0;

    &:hover {
      background: darken($success, 6%);
    }

    &[disabled] {
      background: #9de2c5;
    }
  }

  &.error {
    background: $error;
    color: $white;
    border: 0;

    &:hover {
      background: darken($error, 6%);
    }

    &[disabled] {
      background: #f9abbb;
    }
  }

  &.white {
    background: none;
    color: $white;
    border: 0;

    &:hover {
      background: rgba($white, 0.3);
    }
  }

  // Modifiers

  &.border {
    background: $white;

    &.primary {
      border: 1px solid rgba($accent, 0.7);
      color: $accent;

      &:hover {
        background: #eaf6fc;
      }

      &[disabled] {
        background: #fafafa;
        color: #98d1ee;
        border-color: #98d1ee;
      }
    }

    &.secondary {
      border: 1px solid rgba($secondary, 0.7);
      color: $primary;

      &:hover {
        background: lighten($quaternary, 5%);
      }

      &[disabled] {
        background: #fafafa;
        color: #b4b9bb;
        border-color: #b4b9bb;
      }
    }

    &.tertiary {
      // Not applicable
    }

    &.success {
      border: 1px solid rgba($success, 0.7);
      color: $success;

      &:hover {
        background: #e6f8f0;
      }

      &[disabled] {
        background: #fafafa;
        color: #9de2c5;
        border-color: #9de2c5;
      }
    }

    &.error {
      border: 1px solid $quaternary;
      color: $error;

      &:hover {
        background: #fdeaee;
        border-color: $error;
      }

      &[disabled] {
        background: #fafafa;
        color: #f9abbb;
        border-color: #e4e7e8;
      }
    }
  }

  &.highlight {
    &.primary {
      background: $accent-highlight;
      color: $accent;

      &:hover {
        background: #b3ddf3;
      }

      &[disabled] {
        background: #eff8fc;
        color: #2e3133;
      }
    }

    &.secondary {
      background: $primary-highlight;
      border: none;
      color: $secondary;

      &:hover {
        background: #dbdddf;
      }

      &[disabled] {
        background: #f9fafa;
        color: #b4b9bb;
      }
    }

    &.tertiary {
      // Not applicable
    }

    &.success {
      background: $success-highlight;
      color: $success;

      &:hover {
        background: #a4e4c9;
      }

      &[disabled] {
        background: #ebf9f3;
        color: #9de2c5;
      }
    }

    &.error {
      background: $error-highlight;
      color: $error;

      &:hover {
        background: #f9b1c0;
      }

      &[disabled] {
        background: #fff0f3;
        color: #f9abbb;
      }
    }
  }

  &.filter {
    border: 1px solid $gray;
    border-radius: 50px;
    height: 44px;
    padding: 0 16px;

    @media #{$tablet} {
      height: 40px;
      padding: 0 14px;
    }
  }

  &.transparent {
    background: none;

    &.primary {
      color: $accent;

      &:hover {
        background: #eaf6fc;
      }

      &[disabled] {
        background: #fafafa;
        color: #98d1ee;
      }
    }

    &.secondary {
      border: none;
      color: $primary;

      &:hover {
        background: lighten($quaternary, 5%);
      }

      &[disabled] {
        background: #fafafa;
        color: #b4b9bb;
      }
    }

    &.tertiary {
      // use <Button class="tertiary"> instead
    }

    &.success {
      color: $success;

      &:hover {
        background: #e6f8f0;
      }

      &[disabled] {
        background: #fafafa;
        color: #9de2c5;
      }
    }

    &.error {
      color: $error;

      &:hover {
        background: #fdeaee;
      }

      &[disabled] {
        background: #fafafa;
        color: #f9abbb;
      }
    }
  }

  // Icon buttons

  &.iconic {
    padding: 0;
    width: 40px;
    border-radius: 4px;
    justify-content: center;

    .icon {
      padding: 0;
      font-size: 24px;
    }

    &.rounded {
      border-radius: 100%;
    }

    @media #{$tablet} {
      width: 36px;
    }

    &.rounded {
      border-radius: 50%;
    }

    &.x-large {
      width: 64px;

      .icon {
        font-size: 28px;
      }
    }

    &.large {
      width: 48px;

      .icon {
        font-size: 24px;
      }

      @media #{$tablet} {
        width: 42px;
      }
    }

    &.medium {
      width: 36px;
      height: 36px;

      .icon {
        font-size: 20px;
      }

      @media #{$tablet} {
        width: 30px;
      }
    }

    &.small {
      width: 32px;

      .icon {
        font-size: 17px;
      }

      @media #{$tablet} {
        width: 30px;
      }
    }

    &.tiny {
      width: 26px;
      height: 26px;

      .icon {
        font-size: 18px;
        margin-bottom: 2px;
      }
    }
  }
}

button + button {
  margin-left: 8px;
}
</style>
