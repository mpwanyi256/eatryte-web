<template>
  <Page title="Home">
    <template #content>
      <h1>Home</h1>
    </template>
  </Page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Page from "@/components/generics/Page.vue";

@Options({
  components: {
    Page,
  },
  props: {
    msg: String,
  },
})
export default class HomeView extends Vue {}
</script>
