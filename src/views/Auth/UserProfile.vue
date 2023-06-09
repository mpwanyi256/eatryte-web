<template>
  <Page class="profile">
    <div class="profile_wrapper">
      <div class="profile_wrapper_nav">Nav Area</div>
      <div class="profile_wrapper_content">Content Area</div>
    </div>
  </Page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/generics/Page.vue";

export default defineComponent({
  name: "UserProfile",
  components: {
    Page,
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.profile {
  display: block;
  width: 100%;
  height: 100%;
  background-color: $pageBgColor;
  overflow-y: auto;
  overflow-x: hidden;
  @include scrollbar-thin();

  &_wrapper {
    @include page-flex();
    display: grid;
    grid-template-columns: 30% 70%;
    height: auto;
    color: $black;
    padding-top: 3rem;
    padding-bottom: 3rem;

    > div {
      border: 1px solid $black;
    }

    &_nav {
      position: sticky;
    }

    &__content {
      height: 600rem !important;
    }
  }
}
</style>
