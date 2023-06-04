<template>
  <v-app>
    <NavBar />
    <div class="er_home">
      <div class="er_home_wrapper">
        <router-view />
      </div>
      <Footer />
    </div>
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
import Footer from "@/components/nav/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Footer,
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
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  background-color: $pageBgColor;

  @media #{$tablet} {
    margin-top: 2.5rem;
  }

  @media #{$mobile} {
    margin-top: 2.5rem;
  }

  &_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    overflow: hidden;
    gap: 0;
    margin-top: 3.8rem;

    @media #{$laptop-large} {
      margin-top: 3.8rem;
    }

    @media #{$laptop-medium} {
      margin-top: 3.8rem;
    }

    @media #{$laptop} {
      margin-top: 3.8rem;
    }

    // ::TODO Add once we have fixed the bottom navBar
    @media #{$tablet} {
      // padding-bottom: 3.625rem;
      margin-top: 6.953rem;
    }

    @media #{$mobile} {
      margin-top: 6.953rem;
      // padding-bottom: 3.625rem;
    }

    @media #{$mobile-small} {
      margin-top: 6.953rem;
      // padding-bottom: 3.625rem;
    }
  }
}

::v-deep .footer {
  position: absolute;
  bottom: 0;
  visibility: hidden;
}
</style>
