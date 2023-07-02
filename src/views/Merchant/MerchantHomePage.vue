<template>
  <Page>
    <div class="page_wrapper">
      <div class="page_wrapper_nav">
        <MerchantNavLinks />
      </div>
      <div class="page_wrapper_content">
        <router-view />
      </div>
    </div>
  </Page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/generics/Page.vue";
import MerchantNavLinks from "@/components/merchant/MerchantNavLinks.vue";

export default defineComponent({
  name: "MerchantHomePage",
  components: {
    Page,
    MerchantNavLinks,
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

:deep(.page) {
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
    padding-bottom: 2rem;

    @media #{$allSmallScreens} {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 0;
      padding-bottom: 0;
    }

    > div {
      display: block;
      --bs-body-color-rgb: 33, 37, 41;
      border: 0.2px solid $pageBgColor;
      border-radius: 0.375rem;
      margin: 1rem;
      overflow: hidden;
      height: fit-content;
    }

    &_nav {
      position: sticky;
    }
  }
}
</style>
