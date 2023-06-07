<template>
  <div class="footer">
    <div class="footer_wrapper">
      <h3>Footer</h3>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageFooter",
  components: {},
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.footer {
  display: inline-flex;
  background-color: $black;
  color: $white;
  height: 37rem;
  visibility: hidden;
  margin-top: 2rem;

  @media #{$laptop} {
    visibility: visible;
  }

  @media #{$laptop-medium} {
    visibility: visible;
  }

  @media #{$laptop-large} {
    visibility: visible;
  }

  &_wrapper {
    @include page-flex();
  }
}
</style>
