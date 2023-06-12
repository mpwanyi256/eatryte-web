<template>
  <Page class="profile">
    <div class="profile_wrapper">
      <div class="profile_wrapper_nav">
        <ProfileNav />
      </div>
      <div class="profile_wrapper_content">
        <router-view />
      </div>
    </div>
  </Page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/generics/Page.vue";
import ProfileNav from "@/components/profile/ProfileNav.vue";

export default defineComponent({
  name: "UserProfile",
  components: {
    Page,
    ProfileNav,
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
    grid-template-columns: 35% 65%;
    height: auto;
    color: $black;
    padding-top: 2rem;
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
      box-shadow: 0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb), 0.075) !important;
      margin: 1rem;
      overflow: hidden;
      background-color: $white !important;
      height: fit-content;
    }

    &_nav {
      position: sticky;
    }

    &_content {
      padding: 1.5rem;
    }
  }
}
</style>
