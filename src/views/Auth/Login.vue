<template>
  <Page class="login">
    <div class="login_cover"></div>
    <div class="login_wrapper">
      <router-view></router-view>
    </div>
  </Page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/generics/Page.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {
    Page,
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.login {
  display: grid;
  min-height: 100%;
  width: 100%;
  grid-template-columns: 50% 50%;
  overflow: hidden !important;
  background-color: $white !important;

  @media #{$mobile-small} {
    grid-template-columns: 100%;
  }

  &_cover {
    background-image: url("@/assets/images/salads.jpg");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
  }

  &_wrapper {
    background-color: $white;
    display: flex;
    padding: 3rem;
    height: 100%;
    position: absolute;
    right: 0;
    width: 50%;
    top: 4.25rem;
    @media #{$allSmallScreens} {
      width: 100%;
      top: 3.625rem;
    }
  }
}
</style>
