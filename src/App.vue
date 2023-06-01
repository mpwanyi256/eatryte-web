<template>
  <v-app>
    <NavBar />
    <div class="er_home">
      <div class="er_home_wrapper">
        <router-view />
      </div>
      <Footer />
    </div>
  </v-app>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/nav/NavBar.vue";
import Page from "@/components/generics/Page.vue";
import Footer from "@/components/nav/Footer.vue";

@Options({
  components: {
    Footer,
    NavBar,
    Page,
  },
})
export default class HomeView extends Vue {}
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.er_home {
  width: 100%;
  height: 100%;
  background-color: $gray-300;
  overflow: hidden;
  display: flex;

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

    @media #{$tablet} {
      padding-bottom: 3.625rem;
      margin-top: 6.953rem;
    }

    @media #{$mobile} {
      margin-top: 6.953rem;
      padding-bottom: 3.625rem;
    }

    @media #{$mobile-small} {
      margin-top: 6.953rem;
      padding-bottom: 3.625rem;
    }
  }
}

::v-deep .footer {
  position: absolute;
  bottom: 0;
}
</style>
