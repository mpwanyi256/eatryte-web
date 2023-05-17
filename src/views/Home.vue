<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/nav/NavBar.vue";

@Options({
  components: {
    NavBar,
  },
  props: {
    msg: String,
  },
})
export default class HomeView extends Vue {}
</script>
