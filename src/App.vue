<template>
  <v-app>
    <NavBar />
    <div class="page">
      <div class="page_wrapper">
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

.page {
  width: 100%;
  height: 100%;
  background-color: $gray-300;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media #{$tablet} {
    margin-top: 2.5rem;
  }

  @media #{$mobile} {
    margin-top: 2.5rem;
  }

  &_wrapper {
    position: absolute;
    width: 60%;
    height: 100%;
    display: block;
    top: 0;
    overflow-x: hidden;
    overflow-y: auto;
    gap: 0;

    @include scrollbar-thin();

    @media #{$laptop-large} {
      width: 70%;
    }

    @media #{$laptop-medium} {
      width: 80%;
    }

    @media #{$laptop} {
      width: 100%;
    }

    @media #{$tablet} {
      padding-bottom: 3.625rem;
      width: 100%;
    }

    @media #{$mobile} {
      width: 80%;
      padding-bottom: 3.625rem;
    }

    @media #{$mobile-small} {
      width: 100%;
      padding-bottom: 3.625rem;
    }
  }
}
</style>
