<template>
  <v-app>
    <NavBar />
    <Page>
      <div class="page_wrapper">
        <router-view />
        <Footer />
      </div>
    </Page>
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

.page_wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  @include scrollbar-thin();

  @media #{$tablet} {
    padding-bottom: 3.625rem;
  }

  @media #{$mobile} {
    padding-bottom: 3.625rem;
  }

  ::v-deep .footer {
    visibility: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    @media #{$tablet} {
      visibility: visible;
    }

    @media #{$mobile} {
      visibility: visible;
    }
  }
}
</style>
