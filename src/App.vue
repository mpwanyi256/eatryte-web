<template>
  <v-app style="overflow-x: hidden">
    <NavBar />
    <div class="er_home">
      <router-view transition="fade-transition" />
    </div>
    <MobileNav />
    <!-- <PageFooter /> -->
    <v-snackbar v-model="snackbar" multi-line vertical>
      {{ alertMessage }}
    </v-snackbar>
  </v-app>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { State } from "@/store";
import NavBar from "@/components/nav/NavBar.vue";
import MobileNav from "@/components/nav/MobileNav.vue";
// import PageFooter from "@/components/nav/PageFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    MobileNav,
    // PageFooter,
  },
  setup() {
    const store = useStore<State>();
    const alertMessage = computed(() => store.state.app.alertMessage);
    const snackbar = ref(false);

    watch(
      () => store.state.app.alertMessage,
      (val) => {
        snackbar.value = !!val;
      }
    );

    return {
      snackbar,
      alertMessage,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.er_home {
  height: 100%;
  width: 100%;
  // padding-bottom: 1rem;
  // overflow-y: auto;
  display: flex;
  background-color: $pageBgColor;
  // @include scrollbar-hidden();

  @media #{$tablet} {
    margin-top: 2.6rem;
    margin-bottom: 4rem;
  }

  @media #{$mobile} {
    margin-top: 2.6rem;
    height: calc(100vh - 10.578rem);
  }

  @media #{$mobile-small} {
    margin-top: 2.6rem;
  }
}
</style>
