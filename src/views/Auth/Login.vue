<template>
  <Page class="login">
    <div class="login_cover" />
    <div class="login_wrapper">
      <router-view />
    </div>
  </Page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Page from "@/components/generics/Page.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    Page,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = store.state.auth.user;

    if (user) {
      router.replace({ name: "home" });
    }

    return {};
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
  overflow: hidden;
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
    overflow: hidden;
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
    overflow-y: auto;
    @media #{$allSmallScreens} {
      width: 100%;
      top: 3.625rem;
    }
  }
}
</style>
